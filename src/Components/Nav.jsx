import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { BiArrowToRight } from "react-icons/bi";
function Nav() {
  const Links = [
    { name: "HOME" },
    { name: "ABOUT" },
    { name: "CONTACT" },
    { name: "BLOG" },
  ];
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <nav className="flex items-center justify-between pt-5 bg-gray-300 py-4">
      <h1 className="text-3xl">Aditya</h1>
      {open ? (
        <AiOutlineMenu
          className="text-3xl text-black z-20 fixed right-5 top-6 cursor-pointer md:hidden "
          onClick={handleMenu}
        />
      ) : (
        <BiArrowToRight
          className="text-3xl text-black z-20 fixed right-5 top-6 cursor-pointer md:hidden "
          onClick={handleMenu}
        />
      )}
      <ul
        className={`bg-gray-700 backdrop-blur-md  md:pl-10 pr-28 md:static fixed  ease-linear top-0 md:h-auto h-screen z-10 duration-300  ${
          !open ? "right-[-100%] " : "right-0"
        } `}
      >
        {Links.map((link, index) => (
          <li
            key={index}
            className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6"
          >
            <a
              href="#"
              className="text-sm text-white md:py-5 py-3 inline-block font-normal"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
