import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiArrowToRight } from "react-icons/bi";
function Navbar() {
  const [open, setOpen] = useState(false);
  function closeSidebar() {
    setOpen(!open);
  }
  return (
    <div>
      <nav
        className={`flex
        fixed
        justify-around
        gap-4
        shadow
        md:bg-slate-500
        md:text-neutral-400
        md:flex-row
        md:justify-end
        md:top-0
        md:w-full
        md:h-32
        md:align-middle
        w-52
        h-full
        text-white
        bg-black
        flex-col
        right-0
        duration-300
        ease-in-out
        ${!open ? "right-[-100%] " : "right-0"}
      `}
      >
        <div className="flex items-end">
          <div>
            {open ? (
              <BiArrowToRight
                className="text-3xl text-indigo-800 z-20 fixed right-5 top-6 cursor-pointer md:hidden "
                onClick={closeSidebar}
              />
            ) : (
              <AiOutlineMenu
                className="text-3xl text-indigo-800 z-20 fixed right-5 top-6 cursor-pointer md:hidden "
                onClick={closeSidebar}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col px-5 items-center gap-36">
          <div className="text-2xl py-2 px-2">
            <a href="https://www.example.com">
              <h1>Aditya</h1>
            </a>
          </div>
          <div>
            <ul className="flex flex-col gap-12 items-center md:gap-6 justify-around py-3">
              <li>
                <a href="https://www.example.com">Home</a>
              </li>
              <li>
                <a href="https://www.example.com">About</a>
              </li>
              <li>
                <a href="https://www.example.com">Contact</a>
              </li>
              <li>
                <a href="https://www.example.com">Portfolio</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex py-3 gap-4 flex-col items-center">
              
              <li>
                <button>Hire Me</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
