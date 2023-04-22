import React, { useState, useEffect } from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { FiMap } from "react-icons/fi";
import data from "../data.json";
import { Filter, Navbar2, Ad } from "../components";
import { useSearchParams } from "react-router-dom";

const Ads = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const [search, setSearch] = useState(searchTerm);
  const [posts, setPosts] = useState(data);

  useEffect(() => {
    if (!searchTerm) {
      setPosts(data);
    } else {
      setPosts(
        data.filter((item) => {
          return item.adress.toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    }
  }, [searchTerm]);

  return (
    <>
      <Navbar2 />
      <Filter search={search} setSearch={setSearch} />
      <div className="container mx-auto flex flex-col gap-4 mt-6">
        <p className="text-gray-500 font-light">
          Недвижимость в Самаре / Продажа
        </p>
        <h1 className="font-bold text-3xl text-gray-800">
          Продажа 1-комн и 2-комн квартир в Самаре
        </h1>
        <div className="flex items-center gap-4">
          <p className="">Найдено 8 004 объявления</p>
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
      <div className="container mx-auto flex flex-col gap-4 mt-4">
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
      </div>
    </>
  );
};

export default Ads;
