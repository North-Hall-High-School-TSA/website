import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logo_9536_1683051902.png"

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["About", "Members", "Acheivements", "Blog"].map((item) => (
        <li key={item} className="p-1 font-medium text-gray-800">
          <a
            href="#"
            className="flex items-center hover:text-north-hall-green hover:underline transition-colors"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <nav className="bg-white max-w-6xl mx-auto px-6 py-3 w-full">
      <div className="flex items-center justify-between text-gray-800">
        <div className="flex items-center">
            <img src={Logo} className="h-10"></img>
        <a href="#" className="text-lg font-bold cursor-pointer py-1.5">
          North Hall Engineering
        </a>
        </div>
        
        <div className="hidden lg:block">
          <NavList />
        </div>
        <button
          className="ml-auto h-6 w-6 text-gray-800 lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {openNav && (
        <div className="lg:hidden">
          <NavList />
        </div>
      )}
    </nav>
  );
}
