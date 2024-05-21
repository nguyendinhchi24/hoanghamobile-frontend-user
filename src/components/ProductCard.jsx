import Rating from "@mui/material/Rating";
import images from "../assets";
import { Link, useLocation } from "react-router-dom";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

const ProductCard = (props) => {
  const location = useLocation();
  const { grid } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState("80px");
  const contentRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setContentHeight("80px");
    }
  }, [isExpanded]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `col-span-${grid}` : "col-span-2"
        }`}
      >
        <Link
          to={`${
            location.pathname !== "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="group relative select-none border-2 shadow shadow-red-400 bg-white rounded-lg"
        >
          {/* like */}
          <div className="absolute z-8 top-4 text-lg right-1 cursor-pointer">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite className="text-red-500" />}
            />
          </div>
          {/* img */}
          <div className="flex rounded-lg justify-center items-center bg-white pointer-events-none">
            <img
              src={images.product.watch}
              alt=""
              className="rounded-lg object-cover h-64 w-64 pointer-events-none transition duration-300"
            />
          </div>
          {/* content */}
          <div className="bg-slate-50 px-3 group-hover:bg-slate-100 ">
            <h6 className="px-10 text-slate-900 font-semibold opacity-90 pt-3 text-xs uppercase">
              Iphone
            </h6>
            <h5 className="pl-3 font-semibold text-2xl py-2">
              Iphone 14 Pro max
            </h5>
            <Rating
              name="size-small"
              readOnly={true}
              defaultValue={3}
              size="small"
              className="px-2"
            />
            <p className="px-3 text-red-600 text-lg font-bold">8.000.000 VNĐ</p>
            {/* deception */}
            <div className="px-2 flex flex-col justify-end">
              <div
                className={`relative overflow-hidden transition-all duration-500 ease-in-out`}
                style={{ maxHeight: contentHeight }}
                ref={contentRef}
              >
                <p className="indent-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas ut commodo metus. Vivamus eu pulvinar quam.
                  Suspendisse mollis magna sit amet ultrices. Suspendisse
                  molestie pretium mollis. Aliquam erat volutpat. Suspendisse
                  non laoreet nulla. Aenean et mi placerat, pulvinar ex vel,
                  semper eros.
                </p>
                {!isExpanded && (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-80"></div>
                )}
              </div>

              <button
                onClick={handleToggle}
                className="mt-2 text-blue-500 hover:underline font-medium text-base"
              >
                {isExpanded ? "Ẩn bớt" : "Xem thêm"}
              </button>
            </div>
          </div>
          {/* action */}
          <div
            className="absolute top-[13%] -right-8 opacity-0 duration-300
          transition ease-in-out delay-150 group-hover:-translate-x-12
          group-hover:opacity-100
          "
          >
            <div className="flex flex-col gap-5">
              <Link to="/product/:id" className="hover:text-red-500 text-lg">
                <FaCodeCompare />
              </Link>
              <Link to="/product/:id" className="hover:text-red-500 text-lg">
                <FaRegEye />
              </Link>
              <Link to="/product/:id" className="hover:text-red-500 text-lg">
                <FaBagShopping />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  grid: PropTypes.string.isRequired,
};

export default ProductCard;
