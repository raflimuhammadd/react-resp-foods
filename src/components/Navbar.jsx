import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div
      className="max-w-[1640] mx-auto flex justify-between
    items-center p-4"
    >
      {/* Left Side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} className="hover:scale-125 duration-300 shadow-lg" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl ml-3">
          Eat <span className="font-bold text-orange-500">Bro's</span>
        </h1>
        <div
          className="hidden lg:flex items-center bg-gray-200
        rounded-full p-1 text-[14px] ml-4"
        >
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Input Search */}
      <div
        className="bg-gray-200 rounded-full flex items-center
      px-2 w-[200px] sm:w-[400px] lg:w-[500px]"
      >
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 2-full 
        focus:outline-none capitalize"
          type="text"
          placeholder="Search  Food.."
        />
      </div>
      {/* Shopping Cart */}
      <button
        className="bg-black font-bold text-white hover:bg-orange-500 border-none duration-300 hidden md:flex items-center
      py-2 rounded-full"
      >
        <BsFillCartFill size={25} className="mr-2" /> CART
      </button>

      {/* For Mobile Devices */}
      {/* overlays */}\
      {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 
      top-0 left-0"></div> : ""}


      {/* Side Bar Menu */}
      <div
        className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
        <AiOutlineClose onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer hover:scale-125 duration-300 shadow-lg"
        />
        <h2 className="text-2xl p-4">
          Eats <span className="font-bold text-orange-600">Bro's</span>{" "}
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex shadow-lg cursor-pointer hover:scale-105 duration-300">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex shadow-lg cursor-pointer hover:scale-105 duration-300">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex shadow-lg cursor-pointer hover:scale-105 duration-300">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex shadow-lg cursor-pointer hover:scale-105 duration-300">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex shadow-lg cursor-pointer hover:scale-105 duration-300">
              <AiFillTag size={25} className="mr-4" />
              Promotion
            </li>
            <li className="text-xl py-4 flex shadow-lg cursor-pointer hover:scale-105 duration-300">
              <BsFillSaveFill size={25} className="mr-4" />
              The Best
            </li>
            <li className="text-xl py-4 flex shadow-lg cursor-pointer hover:scale-105 duration-300">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
