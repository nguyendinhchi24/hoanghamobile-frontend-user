import Rating from "@mui/material/Rating";
import images from "../assets";
import { Link } from "react-router-dom";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
const ProductCard = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className="group relative select-none border-2 shadow shadow-red-400 rounded-lg bg-white">
      {/* like */}
      <div
        onClick={handleClick}
        className="absolute top-4 text-lg right-4 cursor-pointer"
      >
        {isLiked ? <FaHeart className="text-red-600" /> : <FaRegHeart />}
      </div>
      {/* img */}
      <div className="flex rounded-lg p-4 justify-center items-center pointer-events-none ">
        <img
          src={images.product.watch}
          alt=""
          className="rounded-lg object-cover h-64 w-64 p-4 pointer-events-none scale-90 transition duration-300 group-hover:scale-100"
        />
      </div>
      {/* content */}
      <div className="bg-slate-50 p-4 rounded-lg">
        <h6 className="text-slate-900 font-semibold opacity-90 text-sm uppercase">
          Iphone
        </h6>
        <h5 className="font-semibold text-lg py-2">Iphone 14 Pro max</h5>
        <Rating
          name="size-small"
          readOnly={true}
          defaultValue={3}
          size="small"
        />
        <p className="text-red-600 text-base font-medium">8.000.000 VNĐ</p>
      </div>
      {/* action */}
      <div
        className="absolute top-[15%] -right-8 opacity-0 duration-300
      transition ease-in-out delay-150 group-hover:-translate-x-12
      group-hover:opacity-100
      "
      >
        <div className="flex flex-col gap-5">
          <Link className="hover:text-red-500 text-lg">
            <FaCodeCompare />
          </Link>
          <Link className="hover:text-red-500 text-lg">
            <FaRegEye />
          </Link>
          <Link className="hover:text-red-500 text-lg">
            <FaBagShopping />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
