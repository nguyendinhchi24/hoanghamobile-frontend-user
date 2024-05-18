import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  RadioGroup,
  Rating,
} from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import {
  MdDensityLarge,
  MdDensityMedium,
  MdOutlineDensitySmall,
} from "react-icons/md";
import images from "../assets";
import ProductCard from "../components/ProductCard";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
//

const OurStore = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [grid, setGrid] = useState(3);
  const [checkedColor, setCheckedColor] = useState({
    black: false,
    white: false,
    red: false,
    blue: false,
    pink: false,
  });
  const [checkedRam, setCheckedRam] = useState({
    ram4gb: false,
    ram6gb: false,
    tam8gb: false,
    ram12gb: false,
    ram16gb: false,
  });

  const handleChangeColor = (event) => {
    setCheckedColor({
      ...checkedColor,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChangeRam = (event) => {
    setCheckedRam({
      ...checkedRam,
      [event.target.name]: event.target.checked,
    });
  };

  const handleGridChange = (newGrid) => {
    setGrid(newGrid);
  };
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />

      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>

      {/*  */}

      <main className="mx-auto">
        <div
          className="flex flex-col items-center px-4 border-b border-gray-200 py-2
        lg:justify-between 
        lg:flex-row space-y-3
        "
        >
          <h1 className="text-4xl font-bold tracking-tight uppercase text-gray-900">
            Iphone
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-slate-500 text-sm mr-3">
              31 Sản phẩm
            </p>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* action icon */}
            <div className="items-center pl-3 flex gap-2">
              <button
                onClick={() => handleGridChange(12)}
                type="button"
                className=" text-white hover:text-white hover:bg-slate-800 transition duration-300 bg-slate-800 ac  rounded-lg opacity-85 hover:opacity-100 active:opacity-100 p-2"
              >
                <MdDensityMedium className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                onClick={() => handleGridChange(6)}
                type="button"
                className=" text-black hover:text-white hover:bg-slate-800 transition duration-300  bg-slate-200  rounded-lg opacity-85 hover:opacity-100 p-2"
              >
                <MdDensityLarge
                  className="h-4 w-4 rotate-90"
                  aria-hidden="true"
                />
              </button>
              <button
                onClick={() => handleGridChange(4)}
                type="button"
                className=" text-black hover:text-white hover:bg-slate-800 transition duration-300  bg-slate-200  rounded-lg opacity-85 hover:opacity-100 p-2"
              >
                <MdDensityMedium
                  className="h-4 w-4 rotate-90"
                  aria-hidden="true"
                />
              </button>

              <button
                onClick={() => handleGridChange(3)}
                type="button"
                className=" text-black hover:text-white hover:bg-slate-800 transition duration-300 bg-slate-200  rounded-lg opacity-85 hover:opacity-100 p-2"
              >
                <MdOutlineDensitySmall
                  className="h-4 w-4 rotate-90"
                  aria-hidden="true"
                />
              </button>
              {/* filter mobile */}
              <button
                type="button"
                className=" text-black hover:text-white hover:bg-slate-800 transition duration-300 bg-slate-200  rounded-lg opacity-85 hover:opacity-100 active:opacity-100 p-2  lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="">
          <div className="grid grid-cols-4 gap-2">
            {/* filter */}
            <div className="col-span-1 py-3 px-5 hidden lg:block">
              {/* */}
              <div className="bg-white p-5 rounded-lg mb-3">
                <h3 className="font-semibold text-lg">Danh mục sản phẩm</h3>
                <div className="py-3 px-3">
                  <ul className="text-black">
                    <li className="mb-2 opacity-70 font-medium bg-slate-100 hover:opacity-100 hover:bg-slate-200 cursor-pointer p-2 rounded-lg">
                      <a className="px-4">Xiaomi</a>
                    </li>
                    <li className="mb-2 opacity-70 font-medium bg-slate-100 hover:opacity-100 hover:bg-slate-200 cursor-pointer p-2 rounded-lg">
                      <a className="px-4">Samsung</a>
                    </li>
                    <li className="mb-2 opacity-70 font-medium bg-slate-100 hover:opacity-100 hover:bg-slate-200 cursor-pointer p-2 rounded-lg">
                      <a className="px-4">Oppo</a>
                    </li>
                    <li className="mb-2 opacity-70 font-medium bg-slate-100 hover:opacity-100 hover:bg-slate-200 cursor-pointer p-2 rounded-lg">
                      <a className="px-4">Vivo</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* filter */}
              <div className="bg-white p-5 rounded-lg mb-3">
                <h3 className="font-semibold text-lg">Filter By</h3>
                {/* pin */}
                <div className="px-4 py-2">
                  <h3 className="text-base font-medium">Pin</h3>
                  <FormGroup className="px-4">
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }}
                          color="default"
                        />
                      }
                      label="6000 mAh (6)"
                      className="focus:outline-none"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }}
                          color="default"
                        />
                      }
                      label="5000 mAh (6)"
                      className="focus:outline-none"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }}
                          color="default"
                        />
                      }
                      label="4000 mAh (6)"
                      className="focus:outline-none"
                    />
                  </FormGroup>
                </div>
                {/* price */}
                <div className="px-4 py-2">
                  <h3 className="text-base font-medium">Price</h3>
                  <div className="px-4">
                    <label className="block text-gray-800 font-semibold text-sm">
                      Từ:
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder=""
                        className="block w-32 xl:w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                      />
                    </div>
                    <label className="block text-gray-800 font-semibold text-sm">
                      đến:
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder=""
                        className="block w-32 xl:w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                      />
                    </div>
                  </div>
                </div>
                {/* color */}
                <div className="px-4 py-2">
                  <h3 className="text-base font-medium">Color</h3>
                  <div className="px-4">
                    <FormControl>
                      <RadioGroup row>
                        <FormControlLabel
                          value="black"
                          control={
                            <Checkbox
                              name="black"
                              checked={checkedColor.black}
                              onChange={handleChangeColor}
                              style={{
                                color: checkedColor.black ? "black" : "default",
                              }}
                              size="big"
                            />
                          }
                          label="Đen"
                        />
                        <FormControlLabel
                          value="white"
                          control={
                            <Checkbox
                              name="white"
                              checked={checkedColor.white}
                              onChange={handleChangeColor}
                              style={{
                                color: checkedColor.white ? "gray" : "default",
                              }}
                              size="big"
                            />
                          }
                          label="Trắng"
                        />
                        <FormControlLabel
                          value="red"
                          control={
                            <Checkbox
                              name="red"
                              checked={checkedColor.red}
                              onChange={handleChangeColor}
                              style={{
                                color: checkedColor.red ? "red" : "default",
                              }}
                              size="big"
                            />
                          }
                          label="Đỏ"
                        />
                        <FormControlLabel
                          value="blue"
                          control={
                            <Checkbox
                              name="blue"
                              checked={checkedColor.blue}
                              onChange={handleChangeColor}
                              style={{
                                color: checkedColor.blue ? "blue" : "default",
                              }}
                              size="big"
                            />
                          }
                          label="Xanh dương"
                        />
                        <FormControlLabel
                          value="pink"
                          control={
                            <Checkbox
                              name="pink"
                              checked={checkedColor.pink}
                              onChange={handleChangeColor}
                              style={{
                                color: checkedColor.pink ? "pink" : "default",
                              }}
                              size="big"
                            />
                          }
                          label="Hồng"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                {/* Ram */}
                <div className="px-4 py-2">
                  <h3 className="text-base font-medium">Ram</h3>
                  <div className="px-4">
                    <FormControl>
                      <RadioGroup row>
                        <FormControlLabel
                          value="ram4gb"
                          control={
                            <Checkbox
                              checked={checkedRam.ram4gb}
                              onChange={handleChangeRam}
                              name="ram4gb"
                              size="big"
                              color="default"
                            />
                          }
                          label="RAM 4GB"
                        />
                        <FormControlLabel
                          value="ram6gb"
                          control={
                            <Checkbox
                              checked={checkedRam.ram6gb}
                              onChange={handleChangeRam}
                              name="ram6gb"
                              size="big"
                            />
                          }
                          label="RAM 6GB"
                        />
                        <FormControlLabel
                          value="ram8gb"
                          control={
                            <Checkbox
                              checked={checkedRam.ram8gb}
                              onChange={handleChangeRam}
                              name="ram8gb"
                              size="big"
                              color="default"
                            />
                          }
                          label="RAM 8GB"
                        />
                        <FormControlLabel
                          value="ram12gbb"
                          control={
                            <Checkbox
                              checked={checkedRam.ram12gb}
                              onChange={handleChangeRam}
                              name="ram12gb"
                              size="big"
                              color="default"
                            />
                          }
                          label="RAM 12GB"
                        />
                        <FormControlLabel
                          value="ram16gb"
                          control={
                            <Checkbox
                              checked={checkedRam.ram16gb}
                              onChange={handleChangeRam}
                              name="ram16gb"
                              size="big"
                              color="default"
                            />
                          }
                          label="RAM 16GB"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg mb-3">
                <h3 className="font-semibold text-lg">Product Tags</h3>
                <div className="p-4">
                  <div className="flex gap-2 flex-wrap font-semibold ">
                    <div className="px-4 py-2 opacity-80 hover:opacity-100 text-sm cursor-pointer bg-slate-300 rounded-lg">
                      xiaomi
                    </div>
                    <div className="px-4 py-2 opacity-80 hover:opacity-100 text-sm cursor-pointer bg-slate-300 rounded-lg">
                      Iphone
                    </div>
                    <div className="px-4 py-2 opacity-80 hover:opacity-100 text-sm cursor-pointer bg-slate-300 rounded-lg">
                      Sam Sung
                    </div>
                    <div className="px-4 py-2 opacity-80 hover:opacity-100 text-sm cursor-pointer bg-slate-300 rounded-lg">
                      Oppo
                    </div>
                    <div className="px-4 py-2 opacity-80 hover:opacity-100 text-sm cursor-pointer bg-slate-300 rounded-lg">
                      Vivo
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg mb-3">
                <h3 className="font-semibold text-lg">Sản phẩm liên quan</h3>
                <div className="  p-3 rounded-lg items-center flex flex-col justify-center ">
                  {[...Array(4)].map((_, index) => (
                    <Link
                      key={index}
                      to="/store"
                      className="relative bg-white hover:bg-slate-200 rounded-lg shadow-lg shadow-slate-200 ring-1 ring-slate-300 transition duration-500 scale-95 hover:scale-100"
                    >
                      <img
                        src={images.product.watch}
                        className="object-cover w-full h-40 lg:h-auto"
                        alt="Samsung Galaxy S24 Ultra"
                      />
                      <div className="p-4">
                        <p className="text-sm font-medium text-gray-600">
                          Giảm giá
                        </p>
                        <h2 className="text-lg lg:text-2xl font-semibold transition duration-500 text-gray-800 py-3">
                          Galaxy S24 Ultra
                        </h2>
                        <Rating readOnly defaultValue={4} size="small" />
                        <p className="text-base font-semibold text-red-500">
                          Giá chỉ còn 14.000.000{" "}
                          <sup className="text-sm">đ</sup>
                        </p>
                        <p className="text-sm text-gray-600">
                          Giảm 10% cho học sinh - sinh viên
                        </p>
                      </div>
                      <div className="absolute top-3 right-2 animate-bounce bg-red-500 px-5 py-3 rounded-lg">
                        <p className="text-sm font-semibold text-white">
                          Trả góp 0%
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* product */}
            <div className="col-span-3 py-3 px-5">
              <div className="bg-white p-5 rounded-lg mb-3">
                <div className="grid grid-cols-12 gap-5">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/*  */}
    </>
  );
};

export default OurStore;
