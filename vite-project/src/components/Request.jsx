import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Request = ({ ad: { image, title }, name, event, phone }) => {
  return (
    <div className="bg-white rounded-[20px] p-6 shadow border border-gray-100 transition duration-200 hover:shadow-xl flex py-10 font-inter">
      <div className="w-[380px] h-[300px] rounded-[20px] -translate-x-16 overflow-hidden flex-shrink-0">
        <img src={image} className="w-[480px] h-full object-cover"></img>
      </div>
      <div className="flex flex-col gap-4 flex-grow-0">
        <h2 className="text-3xl font-medium">{title}</h2>
        <p className="text-gray-900 font-[400] text-xl">{name}</p>
        <p className="text-gray-600 font-[400] leading-8">{event}</p>
        <p className="text-gray-600 font-[400]">{phone}</p>
        <div className="mt-auto flex gap-4">
          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <AiOutlineClose className="mr-2 text-lg" />
            Отклонить
          </button>
          <button
            type="button"
            className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
          >
            <AiOutlineCheck className="text-white mr-2 text-lg" />
            Принять
          </button>
        </div>
      </div>
    </div>
  );
};

export default Request;
