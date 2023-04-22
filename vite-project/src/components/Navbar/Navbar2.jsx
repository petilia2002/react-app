import React from "react";
import { RiMenuAddFill } from "react-icons/ri";
import { AiOutlineMessage, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar2 = ({ openModal }) => {
  return (
    <nav className="flex items-center shadow h-16">
      <div className="container flex mx-auto">
        <Link to="/">
          <div className="logo" />
        </Link>
        <div className="flex items-center ml-12 text-sm text-gray-700 font-semibold">
          <Link
            to="/ads"
            className="h-full relative flex items-center hover:after:absolute hover:after:left-0 hover:after:right-0
            hover:after:bottom-0 hover:after:h-[4px] hover:after:bg-gray-300"
          >
            Смотреть все объявления
          </Link>
        </div>
        <div className="flex items-center gap-4 ml-auto text-gray-500 mr-6 text-xl">
          <RiMenuAddFill className="cursor-pointer" />
          <AiOutlineMessage className="cursor-pointer" />
          <AiOutlineHeart className="cursor-pointer" />
          <HiOutlineBell className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-4">
          <button
            className="text-white bg-blue-600 rounded text-sm py-2 px-3 transition hover:bg-blue-700"
            onClick={openModal}
          >
            + Разместить объявление
          </button>
          <Link
            className="text-blue-600 bg-blue-100 rounded text-sm py-2 px-3 font-medium hover:bg-[#0f489d33]"
            to="/login"
          >
            Войти
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
