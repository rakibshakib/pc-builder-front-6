import NextAuth from "next-auth";
import GoogleProvide from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvide({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "https://pc-builder-app-rakibshakib.vercel.app/login",
  },
};
export default NextAuth(authOptions);
