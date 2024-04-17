import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/lib/definitions';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    Github,
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      console.log(`authorized:${nextUrl} `);
      if (nextUrl.pathname.startsWith("/studio")) return !!auth;
      return true;
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
});
