import { useState, useEffect } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import useDebounce from "../hooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProducts } from "./../features/products/productSlice";
import CustomInput from "./CustomInput";
import images from "../assets";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate();
  const debouncedValue = useDebounce(searchValue, 700);
  const searchResult =
    useSelector((state) => state.product.getSearchProducts) || [];

  useEffect(() => {
    if (debouncedValue) {
      dispatch(getSearchProducts(debouncedValue));
    }
  }, [debouncedValue, dispatch]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleNavigation = (e, id) => {
    e.stopPropagation();
    navigate("/product/" + id);
    setShowResult(false);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) =>
        showResult && searchResult.length > 0 ? (
          <div
            className="bg-white border rounded-md border-gray-300 shadow-lg p-2 mt-2 w-[300px] lg:w-[500px] z-10"
            {...attrs}
          >
            {searchResult.map((item, index) => {
              return (
                <div
                  onClick={(e) => {
                    handleNavigation(e, item?._id);
                  }}
                  key={index}
                  className="hover:-translate-y-[10%] transition-all duration-500 flex justify-between my-4 items-center p-2 bg-slate-50 hover:bg-slate-100 cursor-pointer shadow-md rounded-lg"
                >
                  <div className="flex items-center ">
                    <div className="border-2  bg-white flex-shrink-0 mr-4">
                      <img
                        className="w-[45px] h-[45px] lg:w-12 lg:h-12 rounded-lg object-cover"
                        src={images.product.anh2}
                        alt="Iphone 12 pro max"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">{item?.title}</h5>
                    </div>
                  </div>
                  <div className="text-gray-800 font-semibold ">
                    <p>{formatCurrency(item?.price)}</p>
                    <p className="text-xs text-gray-500">
                      Giảm 15% cho học sinh - sinh viên - nhân viên văn phòng
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null
      }
      onClickOutside={handleHideResult}
    >
      <div className="flex w-full pr-3 items-center space-x-1">
        <CustomInput
          className="focus:outline-none flex h-[32px] w-[220px] lg:h-[40px] lg:w-[300px]  rounded-md border border-gray-300 bg-white px-3 py-2 text-[15px] placeholder-gray-500 focus:ring-1 focus:ring-slate-900 focus:border-transparent"
          type="search"
          placeholder="Tìm Kiếm..."
          value={searchValue}
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
        />
        <button className="bg-slate-900 hover:bg-slate-800 lg:h-[40px] text-white  font-semibold py-2 px-6 rounded-md shadow-md transition-colors duration-300 ease-in-out flex items-center justify-center">
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
    </HeadlessTippy>
  );
};

export default SearchInput;
