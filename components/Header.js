import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* LEFT - Logo*/}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="/amaca-travel.png"
          layout="fill"
          objectFit="contain"
                  objectPosition="left"
                  className="md:hidden" // does it work?
              />
      </div>
      {/* MIDDLE - Search bar*/}
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
        <input
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Search your activity"
        />
        <SearchIcon className="hidden md:mx-2 md:inline-flex h-8 bg-orange-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      {/* RIGHT - Menu bar*/}
      <div className="flex space-x-3 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Amaca Travel</p>
        <GlobeAltIcon className="h-6 " />
        <div className="flex items-center space-x-3 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 " />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
