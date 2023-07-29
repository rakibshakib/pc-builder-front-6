import Link from "next/link";
import React from "react";

const Navbar = () => {
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
          </ul>
        </div>
        <Link href={`/`} className="btn btn-ghost normal-case text-xl">
          PC Builder Platform
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
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
      </div>
      <div className="navbar-end">
        <Link href={`/builders`}>
          <p className="btn btn-sm">PC Builder</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
