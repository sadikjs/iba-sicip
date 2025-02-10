import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import Register from "./model/register-model";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (credentials == null) return null;
        try {
          const user = await Register.findOne({
            email: credentials?.email,
          });
          console.log(user);
          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isMatch) {
              return user;
            } else {
              console.error("password mismatch");
              throw new Error("Check your password");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {
          console.error(err);
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  trustedHosts: ["www.sadikjs.com", "sadikjs.com"],
});
