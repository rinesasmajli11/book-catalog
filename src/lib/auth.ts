import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Fake users database (static)
export const fakeUsers = [
  {
    id: "1",
    email: "admin@test.com",
    password: "admin123",
    name: "Admin User",
    role: "admin",
  },
  {
    id: "2",
    email: "user@test.com",
    password: "user123",
    name: "Regular User",
    role: "user",
  },
  {
    id: "3",
    email: "demo@bookcatalog.com",
    password: "demo123",
    name: "Demo User",
    role: "user",
  },
];

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = fakeUsers.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );

        if (!user) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        } as any;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = (user as any).id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },
};
