import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Verificar email (case insensitive)
        if (credentials.email.toLowerCase() !== process.env.ADMIN_EMAIL?.toLowerCase()) {
          return null;
        }

        // Verificar password
        if (!process.env.ADMIN_PASSWORD_HASH) {
          return null;
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          process.env.ADMIN_PASSWORD_HASH
        );

        if (!isValid) {
          return null;
        }

        return {
          id: '1',
          email: credentials.email,
          name: 'Admin'
        };
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 horas
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
