import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import data from "./data.json";
import CustomInput from "./CustomInput";

const products = data;
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`w-full bg-white sticky top-0 left-0 z-40 border-b border-gray-300 py-3 `}
      >
        <nav
          className="mx-auto flex w-full px-8 items-center justify-between p-2"
          aria-label="Global"
        >
          {/* logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Logo"
              />
            </Link>
            <span className="ml-4 text-xl font-semibold hover:text-gray-800 text-black">
              Hoàng Hà Mobile
            </span>
          </div>

          {/* inputsearch */}
          <div className="max-sm:hidden lg:flex-1 lg:justify-end items-center">
            <div className="flex max-w-[310px] pr-3 items-center space-x-2">
              <CustomInput
                className="focus:outline-none flex h-[32px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[15px] placeholder-gray-500 focus:ring-1 focus:ring-slate-900 focus:border-transparent"
                type="search"
                placeholder="Tìm Kiếm..."
              />
              <button className="bg-slate-900 hover:bg-slate-800 text-white  font-semibold py-2 px-5 rounded-md shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Bars3Icon reponsive */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* listmenu */}
          <Popover.Group className="hidden pl-6 lg:flex lg:gap-x-8">
            <Link
              to="/"
              className="text-[15px] font-semibold leading-6 text-black outline-none hover:text-cyan-900"
            >
              <span>Trang chủ</span>
            </Link>

            <Popover className="relative items-center">
              <Popover.Button className="flex items-center gap-x-1 text-[15px] font-semibold leading-6 hover:text-gray-800 text-black  outline-none">
                <span className="text-black hover:text-cyan-900">Danh mục</span>
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-900"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[350px] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="px-3 py-3">
                    {products.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        href={item.href}
                        className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-4 hover:bg-gray-200 cursor-pointer"
                      >
                        <div className="flex-auto">
                          <div className="block font-semibold hover:text-gray-800 text-black">
                            {item.name}
                          </div>
                          <p className="mt-2 indent-2 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Link
              to="/contact"
              href="#"
              className="text-[15px] font-semibold leading-6 hover:text-cyan-900 text-black outline-none"
            >
              <span>Liên hệ </span>
            </Link>
            <Link
              to="/login"
              href="#"
              className="text-[15px] font-semibold leading-6 hover:text-cyan-900 text-black outline-none"
            >
              <span>Đăng nhập</span>
            </Link>

            {/* cart */}
            <a
              href="#"
              className="text-[15px] font-semibold leading-6  text-black outline-none"
            >
              <div className="hidden lg:flex lg:flex-1 lg:justify-end outline-none">
                <Link
                  to={"/cart"}
                  href="#"
                  className="flex items-center text-[15px] font-semibold leading-6 text-black outline-none hover:opacity-100 opacity-90 hover:text-cyan-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <span className="px-2 rounded py-1 bg-cyan-200 text-xs ">
                    7
                  </span>
                  <span className="ml-2 underline text-red-600">
                    1.000.000 VNĐ
                  </span>
                </Link>
              </div>
            </a>
          </Popover.Group>
        </nav>

        {/* reponsive */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="flex lg:flex-1">
                <button to={"/"} className="-m-1.5 p-1.5 flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Logo"
                  />
                </button>
                <span className="ml-4 text-lg font-semibold hover:text-gray-800 text-black">
                  Hoàng Hà Mobile
                </span>
              </div>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* inputsearch */}
                  <div className="max-sm:hidden lg:flex-1 lg:justify-end items-center">
                    <div className="flex max-w-[310px] pr-3 items-center space-x-2">
                      <CustomInput
                        className="focus:outline-none flex h-[32px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[15px] placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        type="search"
                        placeholder="Tìm Kiếm..."
                      />
                      <button className="bg-cyan-200 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center">
                        <svg
                          className="h-4 w-4 fill-current text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8.07 13.64c-2.39 0-4.33-1.94-4.33-4.33s1.94-4.33 4.33-4.33c1.16 0 2.22 0.45 3.03 1.19l4.17-4.17c0.36-0.36 0.95-0.36 1.31 0 0.36 0.36 0.36 0.95 0 1.31l-4.17 4.17c0.74 0.81 1.19 1.87 1.19 3.03 0 2.75-2.24 4.99-4.99 4.99zM8.07 12.64c2.21 0 4-1.79 4-4s-1.79-4-4-4c-2.21 0-4 1.79-4 4s1.79 4 4 4z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <Link
                    to={"/"}
                    className="-mx-3 outline-none block rounded-lg px-3 py-2 text-[15px] font-semibold leading-7 text-black hover:bg-gray-200"
                  >
                    <span>Trang chủ</span>
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center outline-none justify-between rounded-lg py-2 pl-3 pr-3.5 text-[15px] font-semibold leading-7 text-black hover:bg-gray-200">
                          <span>Danh mục</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-1">
                          {[...products].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm outline-none font-semibold leading-7 text-black hover:text-black opacity-80 hover:opacity-100 hover:bg-slate-200"
                            >
                              <Link to={`/product-details`}>{item.name}</Link>
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>

                <div className="py-6 flex justify-between">
                  <Link
                    to={"/cart"}
                    className="flex items-center text-[15px] font-semibold outline-none leading-6 text-black hover:opacity-100 opacity-90 hover:text-red-600 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <span className="px-2 rounded py-[1px] outline-none bg-cyan-200">
                      7
                    </span>
                    <span className="ml-1 underline text-red-500 font-semibold">
                      100.000.000.000 VNĐ
                    </span>
                  </Link>
                  <Link
                    to={"/"}
                    className="-mx-3 block rounded-lg px-3 py-2 outline-none text-[15px] font-semibold leading-7 text-black hover:bg-gray-50"
                  >
                    Đăng xuất
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
