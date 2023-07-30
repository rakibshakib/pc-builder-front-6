import RootLayout from "@/components/RootLayout";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginPages = () => {
  const handleSignIn = () => {
    signIn("google", {
      callbackUrl: "https://pc-builder-app-rakibshakib.vercel.app/login",
    });
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-[400px]">
        <div
          onClick={() => handleSignIn()}
          className="flex items-center shadow-md bg-blue-500 px-1 py-1 rounded-md cursor-pointer"
        >
          <div className="bg-white p-1">
            <img width={30} height={25} src="/images/google.png" alt="" />
          </div>
          <button className="ml-2 font-bold text-md text-white h-[30px] px-2">
            Sign Up With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;

LoginPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
