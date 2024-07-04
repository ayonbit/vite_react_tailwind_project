import React from "react";
import logo from "../assets/codeabc_circle.png";
import lock from "../assets/lock.png";
import search from "../assets/search.png";
export default function Navbar() {
  return (
    <>
      <nav className="container flex flex-col md:flex-row items-center mx-auto gap-4 py-2">
        <img className="w-[80px] h-[80px]" src={logo} alt="logo" />
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <p>Home</p>
            <p>Channel</p>
            <p>Supports</p>
            <p>About</p>
            <img src={search} alt="search" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex gap-2 items-center">
              <img src={lock} alt="lock" />
              <span>Login</span>
            </div>
            <button className="btn_donate" type="button">
              Donate Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
