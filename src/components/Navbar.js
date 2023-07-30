import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleBuilder = () => {
    if (session?.user?.email) {
      return router.push(`/builders`);
    }
    return router.push(`/login`);
    // signIn("google", {
    //   callbackUrl: "http://localhost:3000",
    // });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
          >
            <li>
              <Link href={`/CPU`}>CPU / Processor</Link>
            </li>
            <li>
              <Link href={`/motherboard`}>Motherboard</Link>
            </li>
            <li>
              <Link href={`/ram`}>RAM</Link>
            </li>
            <li>
              <Link href={`/powerSupply`}>Power Supply Unit</Link>
            </li>
            <li>
              <Link href={`/storageAndDevice`}>Storage Device</Link>
            </li>
            <li>
              <Link href={`/monitor`}>Monitor</Link>
            </li>
            <li>
              <Link href={`/othersDevice`}>Others</Link>
            </li>
            <li>
              {session?.user?.email ? (
                <li
                  onClick={() => {
                    signOut("google", {
                      callbackUrl: "https://pc-builder-app-rakibshakib.vercel.app/login",
                    });
                  }}
                >
                  signOut
                </li>
              ) : (
                <Link href={`/login`}>Login</Link>
              )}
            </li>
          </ul>
        </div>
        <Link
          href={`/`}
          className="btn btn-ghost normal-case text-2xl md:text-xl"
        >
          PCHUB
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary>Categories </summary>
              <ul className="p-2">
                <li>
                  <Link href={`/CPU`}>CPU / Processor</Link>
                </li>
                <li>
                  <Link href={`/motherboard`}>Motherboard</Link>
                </li>
                <li>
                  <Link href={`/ram`}>RAM</Link>
                </li>
                <li>
                  <Link href={`/powerSupply`}>Power Supply Unit</Link>
                </li>
                <li>
                  <Link href={`/storageAndDevice`}>Storage Device</Link>
                </li>
                <li>
                  <Link href={`/monitor`}>Monitor</Link>
                </li>
                <li>
                  <Link href={`/othersDevice`}>Others</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            {session?.user?.email ? (
              <li
                onClick={() => {
                  signOut("google", {
                    callbackUrl: "https://pc-builder-app-rakibshakib.vercel.app/login",
                  });
                }}
              >
                signOut
              </li>
            ) : (
              <Link href={`/login`}>Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <p
          onClick={() => handleBuilder()}
          className="btn lg:text-md btn-sm md:text-[12px] sm:text-[10px]"
        >
          PC Builder
        </p>
      </div>
    </div>
  );
};

export default Navbar;
