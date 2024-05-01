import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import type { User } from "@/lib/definitions";

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

var bcrypt = require('bcryptjs');


export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  // theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  secret: process.env.AUTH_SECRET,
  providers: [
    Github,Google,
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
      console.log(`authorized:${nextUrl.pathname}`);      
      //credentials:http://localhost:3000/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fstudio
      //github:
      if (nextUrl.pathname.startsWith("/studio")) return !!auth;
      if (nextUrl.pathname.startsWith("/login") && !!auth) return Response.redirect(new URL('/', nextUrl));
      return true;
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
});
