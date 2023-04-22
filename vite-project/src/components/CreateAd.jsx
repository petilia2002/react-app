import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MyModal({ isOpen, closeModal }) {
  const [formState, setStateForm] = useState({
    title: "",
    adress: "",
    price: 0,
    description: "",
    apacity: 1,
    period: 1,
  });

  const [errors, setErrors] = useState({
    title: false,
    adress: false,
    price: false,
    description: false,
    period: false,
    apacity: false,
  });

  function handleChange(e) {
    setStateForm({ ...formState, [e.target.name]: e.target.value });
  }
  console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    const tempErrors = {
      title: false,
      adress: false,
      price: false,
      description: false,
      period: false,
    };

    let flag = false;

    if (!formState.title.trim()) {
      tempErrors.title = true;
      flag = true;
    }
    if (!formState.adress.trim()) {
      tempErrors.adress = true;
      console.log("hello");
      flag = true;
    }
    if (!formState.description.trim()) {
      tempErrors.description = true;
      flag = true;
    }
    if (!formState.price) {
      tempErrors.price = true;
      flag = true;
    }
    if (!formState.period) {
      tempErrors.period = true;
      flag = true;
    }
    if (!formState.apacity) {
      tempErrors.apacity = true;
      flag = true;
    }
    setErrors(tempErrors);

    if (flag) {
      return;
    } else {
      alert("Все поля заполнены");
    }
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-lg w-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-lg w-full">
                    <button
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-hide="authentication-modal"
                      onClick={closeModal}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                      <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Новое объявление
                      </h3>
                      <p className="w-full">
                        Здесь арендодатель может бесплатно разместить объявление
                      </p>
                      <form
                        className="w-full mt-5"
                        action="#"
                        onSubmit={handleSubmit}
                      >
                        <div className="grid grid-cols-2 gap-6">
                          <div className="w-full space-y-6">
                            <div className="flex flex-col items-start">
                              <label
                                htmlFor="adress"
                                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                                  errors.adress && "text-red-500"
                                }`}
                              >
                                Адрес
                              </label>
                              <input
                                type="text"
                                name="adress"
                                id="adress"
                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${
                                  errors.adress && "border-red-300"
                                }`}
                                placeholder="Адрес"
                                value={formState.adress}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex flex-col items-start">
                              <label
                                htmlFor="title"
                                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                                  errors.title && "text-red-500"
                                }`}
                              >
                                Название
                              </label>
                              <input
                                type="text"
                                name="title"
                                id="title"
                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${
                                  errors.title && "border-red-300"
                                }`}
                                placeholder="Название"
                                value={formState.title}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex flex-col items-start">
                              <label
                                htmlFor="apacity"
                                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                                  errors.apacity && "text-red-500"
                                }`}
                              >
                                Вместимость
                              </label>
                              <input
                                type="number"
                                name="apacity"
                                id="apacity"
                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${
                                  errors.apacity && "border-red-300"
                                }`}
                                placeholder="Вместимость"
                                min="1"
                                value={formState.apacity}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="w-full space-y-6">
                            <div className="flex flex-col items-start">
                              <label
                                htmlFor="price"
                                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                                  errors.price && "text-red-500"
                                }`}
                              >
                                Оплата за час
                              </label>
                              <input
                                type="number"
                                name="price"
                                id="price"
                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${
                                  errors.price && "border-red-300"
                                }`}
                                placeholder="Оплата"
                                min="0"
                                value={formState.price}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="flex flex-col items-start">
                              <label
                                htmlFor="period"
                                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                                  errors.period && "text-red-500"
                                }`}
                              >
                                Срок аренды
                              </label>
                              <input
                                type="number"
                                name="period"
                                id="period"
                                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${
                                  errors.period && "border-red-300"
                                }`}
                                placeholder="Срок аренды в часах"
                                min="1"
                                value={formState.period}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex flex-col items-start">
                              <label
                                htmlFor="description"
                                className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${
                                  errors.description && "text-red-500"
                                }`}
                              >
                                Описание
                              </label>
                              <textarea
                                id="description"
                                name="description"
                                rows="4"
                                className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${
                                  errors.description && "border-red-300"
                                }`}
                                placeholder="Описание"
                                style={{ resize: "none" }}
                                value={formState.description}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="mt-6 w-3/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Разместить объявление
                        </button>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
