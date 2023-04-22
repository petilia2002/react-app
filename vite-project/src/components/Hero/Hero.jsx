import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const dates = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

const Hero = () => {
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selected, setSelected] = useState(false);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  console.log(startDate.getMonth());

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    setSelected(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="h-[490px] relative">
      <div className="absolute inset-0">
        <h1 className="absolute top-[20%] text-[38px] text-custom-shadow text-white left-[15%]">
          За недвижимостью - на Циан
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow w-[70%] absolute top-[30%] left-[15%] rounded mt-10 flex"
        >
          <Popover className="relative group">
            {({ open }) => (
              <>
                <Popover.Button className="font-light flex items-center px-5 h-full text-gray-400 text-sm outline-none border-r border-r-gray-200 group-hover:bg-blue-100/50 transition rounded-tl rounded-bl">
                  Цена
                  <FiChevronDown
                    className={`ml-8 text-xl transition duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Popover.Button>
                <Popover.Panel>
                  <div className="absolute z-10 mt-2 shadow rounded left-0 p-4 bg-white flex items-center gap-4 text-sm font-light">
                    <div className="rounded py-1 px-2 border border-gray-200 hover:border-gray-400 transition flex items-center">
                      <input
                        type="text"
                        className="outline-none"
                        placeholder="от"
                      />
                      <span>₽</span>
                    </div>
                    <div className="rounded py-1 px-2 border border-gray-200 hover:border-gray-400 transition flex items-center">
                      <input
                        type="text"
                        className="outline-none"
                        placeholder="до"
                      />
                      <span>₽</span>
                    </div>
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
          <Popover className="relative group">
            {({ open }) => (
              <>
                <Popover.Button className="font-light flex items-center px-5 h-full text-sm outline-none border-r border-r-gray-200 group-hover:bg-blue-100/50 transition rounded-tl rounded-bl">
                  <span className="inline-flex w-16">
                    {numberOfGuests} {numberOfGuests <= 1 ? "гость" : "гостей"}
                  </span>
                  <FiChevronDown
                    className={`ml-4 text-xl text-gray-400 transition duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Popover.Button>
                <Popover.Panel>
                  <div className="absolute z-10 mt-2 shadow rounded left-0 p-4 bg-white flex flex-col gap-2 text-sm font-light">
                    <h3 className="font-semibold text-sm">Количество гостей</h3>
                    <div className="py-1 px-3 border border-gray-200 rounded hover:border-gray-400 flex items-center justify-between">
                      <button
                        onClick={() => setNumberOfGuests((p) => p - 1)}
                        disabled={numberOfGuests === 1}
                        className="outline-none"
                      >
                        <AiOutlineMinus
                          className={`${
                            numberOfGuests > 1 ? "text-blue-600" : ""
                          }`}
                        />
                      </button>
                      <input
                        value={numberOfGuests}
                        onChange={(e) => setNumberOfGuests(e.target.value)}
                        className="outline-none text-center w-20"
                        type="text"
                      />
                      <button
                        onClick={() => setNumberOfGuests((p) => p + 1)}
                        className="outline-none"
                      >
                        <AiOutlinePlus className="cursor-pointer text-blue-600" />
                      </button>
                    </div>
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
          <Popover className="relative group">
            {({ open }) => (
              <>
                <Popover.Button className="font-light flex items-center px-5 h-full text-sm outline-none border-r border-r-gray-200 group-hover:bg-blue-100/50 transition rounded-tl rounded-bl">
                  {selected ? (
                    <span className="inline-flex w-40">
                      {startDate.getDate()} {dates[startDate.getMonth()]} -{" "}
                      {endDate.getDate()} {dates[endDate.getMonth()]}
                    </span>
                  ) : (
                    <span className="text-gray-400 inline-flex w-40">
                      Заезд - Отъезд
                    </span>
                  )}
                  <FiChevronDown
                    className={`ml-4 text-xl text-gray-400 transition duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Popover.Button>
                <Popover.Panel>
                  <div className="absolute z-10 mt-2 shadow rounded left-0">
                    <DateRangePicker
                      className="rounded overflow-hidden"
                      rangeColors={["#2563eb"]}
                      ranges={[selectionRange]}
                      minDate={new Date()}
                      onChange={handleSelect}
                    />
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
          <div className="w-full rounded-tr rounded-br">
            <input
              type="text"
              placeholder="Город, адрес, метро, район, ж/д, шоссе или ЖК"
              className="text-gray-700 p-5 text-sm w-full font-light border-none outline-none rounded"
            />
          </div>
        </form>
        <div className="w-[70%] absolute top-[50%] left-[15%] mt-6 flex justify-end">
          <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded mr-2 transition hover:text-blue-500">
            Показать на карте
          </button>
          <button className="bg-blue-600 font-semibold text-white rounded px-8 py-2 transition hover:bg-blue-700">
            Найти
          </button>
        </div>
        <div className="bg-image"></div>
      </div>
    </div>
  );
};

export default Hero;
