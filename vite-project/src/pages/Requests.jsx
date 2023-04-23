import React, { useState, useEffect } from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { FiMap } from "react-icons/fi";
import requests from "../requests.json";
import { Navbar, Request } from "../components";

const Requests = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex flex-col gap-4 mt-6">
        <p className="text-gray-500 font-light">
          Недвижимость в Самаре / Продажа
        </p>
        <h1 className="font-bold text-3xl text-gray-800">Мои заявки</h1>
        <div className="flex items-center gap-4">
          <p className="">Найдено 8 004 заявлений</p>
          <button className="py-1 flex items-center px-3 rounded gap-2 text-blue-500 hover:bg-gray-300 font-medium">
            <RiArrowLeftRightLine className="rotate-90 text-xl" />
            По умолчанию
          </button>
          <button className="py-1 flex items-center px-3 rounded gap-2 text-blue-500 hover:bg-gray-300 font-medium">
            <FiMap className="text-xl" />
            На карте
          </button>
        </div>
      </div>
      <div className="container mx-auto grid items-start grid-cols-2 gap-20 mt-8">
        {requests.map((item, index) => {
          return <Request {...item} key={index} />;
        })}
      </div>
      {/* <div className="container mx-auto flex flex-col gap-4 mt-4">
        {posts.map((item, index) => {
          return (
            <Ad
              title={item.title}
              adress={item.adress}
              image={item.image}
              description={item.description}
              price={item.price}
              apacity={item.apacity}
              period={item.period}
              key={index}
            />
          );
        })}
      </div> */}
    </>
  );
};

export default Requests;
