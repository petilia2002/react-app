import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Filter = ({ search, setSearch }) => {
  const navigate = useNavigate();

  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto flex items-center py-6 gap-4">
        <button className="py-1 px-3 rounded border border-gray-200 hover:bg-gray-200">
          Купить
        </button>
        <button className="py-1 px-3 rounded border border-gray-200 hover:bg-gray-200">
          Квартиру в новостройке
        </button>
        <button className="py-1 px-3 rounded border border-gray-200 hover:bg-gray-200">
          1, 2 комн.
        </button>
        <button className="py-1 px-3 rounded border border-gray-200 hover:bg-gray-200">
          Цена
        </button>
        <button className="py-1 px-3 rounded border border-gray-200 hover:bg-gray-200">
          Еще фильтры
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/ads?q=${search}`);
          }}
          className="flex items-center gap-2 rounded px-3 py-1 border border-gray-200 hover:border-gray-500 transition focus-within:border-gray-500 flex-grow"
        >
          <RiSearchLine className="text-blue-600" />
          <input
            className="w-full"
            placeholder="Адрес или ЖК"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <button className="py-1 px-3 rounded bg-blue-600 text-white hover:bg-blue-500">
          Найти
        </button>
        <button className="flex items-center gap py-1 px-3 rounded bg-white text-blue-600 gap-2 hover:bg-gray-200">
          <AiOutlineHeart className="text-xl" />
          Сохранить поиск
        </button>
      </div>
    </div>
  );
};

export default Filter;
