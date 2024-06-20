import { Rating } from "@mui/material";
import { Kbd } from "flowbite-react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon, MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import {
  MdDensityLarge,
  MdDensityMedium,
  MdOutlineDensitySmall,
} from "react-icons/md";
import images from "../assets";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import { getUserCart } from "../features/user/userSlice";
import { Link } from "react-router-dom";

const OurStore = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [grid, setGrid] = useState(3);

  const [brands, setBrands] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.products) || [];
  const [newData, setNewData] = useState([]);

  // filter state
  const [brand, setBrand] = useState(null);
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState("");

  useEffect(() => {
    setNewData(productState);
  }, [newData]);

  useEffect(() => {
    let newBrands = [];
    let newTags = [];
    let newCategories = [];

    newData.forEach((element) => {
      if (element.tags && typeof element.tags === "string") {
        const tags = element.tags.split(",");
        newTags.push(...tags);
      }

      newBrands.push(element.brand);
      newCategories.push(element.category);
    });

    const uniqueBrands = [...new Set(newBrands)];
    const uniqueTags = [...new Set(newTags)];
    const uniqueCategories = [...new Set(newCategories)];

    setBrands(uniqueBrands);
    setTags(uniqueTags);
    setCategories(uniqueCategories);
  }, [newData]);

  useEffect(() => {
    dispatch(
      getAllProducts({ sort, tag, brand, category, minPrice, maxPrice })
    );

    dispatch(getUserCart());
  }, [dispatch, sort, tag, brand, category, minPrice, maxPrice]);

  const [showMore, setShowMore] = useState(false);
  const [showMoreProducts, setShowMoreProducts] = useState(15);

  const productsToShow = productState.slice(0, showMoreProducts);

  const handleShowMore = () => {
    if (productsToShow.length < productState.length) {
      setShowMoreProducts((prevShowAll) => prevShowAll + 10);
    } else {
      setShowMore(true);
    }
  };

  const handleGridChange = (newGrid) => {
    setGrid(newGrid);
  };
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <>
      <Meta title={"Sản phẩm"} />
      <BreadCrumb title="Sản phẩm" />

      <Container>
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </Container>

      {/*  */}
      <Container>
        <main className="mx-auto">
          <div
            className="flex flex-col items-center px-2 border-b border-gray-200 lg:p-4  p-2
          lg:justify-between 
          lg:flex-row space-y-3
          "
          >
            <div
              onClick={() => window.location.reload()}
              className="text-2xl font-bold cursor-pointer hover:text-gray-800 tracking-tight uppercase text-gray-900"
            >
              sản phẩm
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-slate-500 text-sm mr-3">
                {productState.length} Sản phẩm
              </p>
              <div className="relative inline-block text-left outline-none">
                <select
                  onChange={(e) => setSort(e.target.value)}
                  value={sort}
                  defaultValue={"manula"}
                  className="group outline-none inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900 px-2 py-1 border border-gray-300 rounded-md"
                >
                  <option value="title">Từ A-Z</option>
                  <option value="-title">Từ Z-A</option>
                  <option value="price">Giá thấp đến cao</option>
                  <option value="-price">Giá cao đến thấp</option>
                  <option value="createdAt">Sản phẩm mới</option>
                  <option value="-createdAt">Sản phẩm cũ</option>
                </select>
              </div>

              {/* action icon */}
              <div className="items-center pl-3 flex gap-2">
                <div
                  onClick={() => handleGridChange(3)}
                  className={` ${
                    grid === 3
                      ? "bg-slate-800 opacity-100 text-white"
                      : "bg-slate-200 hover:bg-slate-800 hover:text-white opacity-80 text-gray-800 hover:opacity-100"
                  } transition duration-300 bg-slate-200 rounded-lg p-2 cursor-pointer`}
                >
                  <MdOutlineDensitySmall
                    className="h-4 w-4 rotate-90"
                    aria-hidden="true"
                  />
                </div>

                <div
                  onClick={() => handleGridChange(4)}
                  className={` ${
                    grid === 4
                      ? "bg-slate-800 opacity-100 text-white"
                      : "bg-slate-200 hover:bg-slate-800 hover:text-white opacity-80 text-gray-800 hover:opacity-100"
                  } transition duration-300 bg-slate-200 rounded-lg p-2 cursor-pointer`}
                >
                  <MdDensityMedium
                    className="h-4 w-4 rotate-90"
                    aria-hidden="true"
                  />
                </div>

                <div
                  onClick={() => handleGridChange(6)}
                  className={` ${
                    grid === 6
                      ? "bg-slate-800 opacity-100 text-white"
                      : "bg-slate-200 hover:bg-slate-800 hover:text-white opacity-80 text-gray-800 hover:opacity-100"
                  } transition duration-300 bg-slate-200 rounded-lg p-2 cursor-pointer`}
                >
                  <MdDensityLarge
                    className="h-4 w-4 rotate-90"
                    aria-hidden="true"
                  />
                </div>

                <div
                  onClick={() => handleGridChange(12)}
                  className={` ${
                    grid === 12
                      ? "bg-slate-800 opacity-100 text-white"
                      : "bg-slate-200 hover:bg-slate-800 hover:text-white opacity-80 text-gray-800 hover:opacity-100"
                  } transition duration-300 bg-slate-200 rounded-lg p-2 cursor-pointer`}
                >
                  <MdDensityMedium className="h-4 w-4" aria-hidden="true" />
                </div>

                {/* filter mobile */}
                <div
                  type="button"
                  className="text-black hover:text-white hover:bg-slate-800 transition duration-300 bg-slate-200  rounded-lg opacity-85 hover:opacity-100 active:opacity-100 p-2  lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
              {/* filter */}
              <div className="col-span-1 py-3 px-5 hidden lg:block">
                {/* */}
                <div className="bg-white p-5 rounded-lg mb-3">
                  <h3 className="font-semibold text-lg">Danh mục sản phẩm</h3>
                  <div className="py-3 px-3">
                    <ul className="text-black">
                      {brands &&
                        [...new Set(brands)].slice(0, 7).map((item, index) => (
                          <li
                            key={index}
                            onClick={() => setBrand(item)}
                            className="mb-2 opacity-70 font-medium bg-slate-100 hover:opacity-100 hover:bg-slate-200 cursor-pointer p-2 rounded-lg"
                          >
                            <a className="px-4">{item}</a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                {/* filter */}
                <div className="bg-white p-5 rounded-lg mb-3">
                  <h3 className="font-semibold text-lg">Filter By</h3>

                  {/* price */}
                  <div className="px-4 py-2">
                    <h3 className="text-base font-medium">Price</h3>
                    <div className="px-4">
                      <label className="block text-gray-800 font-semibold text-sm">
                        Từ:
                      </label>
                      <div className="mt-2">
                        <CustomInput
                          onChange={(e) => {
                            setMinPrice(e.target.value);
                          }}
                          type="number"
                          placeholder=""
                          className="block w-32 xl:w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        />
                      </div>
                      <label className="block text-gray-800 font-semibold text-sm">
                        đến:
                      </label>
                      <div className="mt-2">
                        <CustomInput
                          onChange={(e) => {
                            setMaxPrice(e.target.value);
                          }}
                          type="number"
                          placeholder=""
                          className="block w-32 xl:w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg mb-3">
                  <h3 className="font-semibold text-lg">Product Tags</h3>
                  <div className="flex flex-wrap gap-1 p-4">
                    {tags &&
                      [...new Set(tags)].slice(0, 9).map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setTag(item);
                          }}
                          className="pb-3 cursor-pointer"
                        >
                          <Kbd>{item}</Kbd>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg mb-3">
                  <h3 className="font-semibold text-lg">Sản phẩm liên quan</h3>
                  <div className="  p-3 rounded-lg items-center flex flex-col justify-center ">
                    {productState.slice(0, 3).map((item, index) => (
                      <Link
                        key={index}
                        to={"/product/" + item._id}
                        className="relative bg-white hover:bg-slate-200 rounded-lg shadow-lg shadow-slate-200 ring-1 ring-slate-300 transition duration-500 scale-95 hover:scale-100"
                      >
                        <img
                          src={
                            item?.images[0]?.url
                              ? images.product.watch
                              : images.product.watch
                          }
                          className="object-cover w-full h-40 lg:h-auto"
                          alt="Samsung Galaxy S24 Ultra"
                        />
                        <div className="p-4">
                          <p className="text-sm font-medium text-gray-600">
                            Giảm giá
                          </p>
                          <h2 className="text-lg lg:text-2xl font-semibold transition duration-500 text-gray-800 py-3">
                            {item?.title}
                          </h2>
                          <Rating
                            readOnly
                            defaultValue={
                              Number(item?.totalrating)
                                ? Number(item?.totalrating)
                                : 4
                            }
                            size="small"
                          />
                          <p className="text-base font-semibold text-red-500">
                            Giá chỉ còn: {formatCurrency(item?.price)}
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
                  <div className="bg-white rounded-lg gap-4 grid grid-cols-12">
                    <ProductCard data={productsToShow} grid={grid} />
                  </div>

                  {showMore == false && (
                    <div className="mt-7 text-center">
                      <button
                        onClick={handleShowMore}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Xem thêm
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </Container>
      {/*  */}
    </>
  );
};

export default OurStore;
