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
  const { grid } = props;
  let location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState("80px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setContentHeight("80px");
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className={`${
          location.pathname === "/store" ? `col-span-${grid}` : "col-span-2"
        }`}
      >
        <div className="group relative select-none border-2 shadow shadow-red-400 bg-white rounded-lg">
          {/* like */}
          <div className="absolute z-20 top-4 text-lg right-1 cursor-pointer">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite className="text-red-500" />}
            />
          </div>
          {/*  */}
          <div
            className={`grid ${
              grid === 12 ? "grid-cols-3" : "grid-cols-1"
            } gap-4`}
          >
            {/* img */}
            <div className="flex rounded-lg p-3 justify-center items-center pointer-events-none">
              <img
                src={images.product.watch}
                alt=""
                className="rounded-lg object-cover h-64 w-64 pointer-events-none transition duration-300"
              />
            </div>
            {/* content */}
            <div className="bg-slate-50 col-span-2 group-hover:bg-slate-100 p-3">
              <h6 className="text-slate-900 font-semibold opacity-90 pt-3 text-sm uppercase">
                Iphone
              </h6>
              <h5 className="font-semibold text-xl py-2">Iphone 14 Pro max</h5>
              <Rating
                name="size-small"
                readOnly={true}
                defaultValue={3}
                size="small"
              />
              <p className="text-red-600 text-lg font-medium">8.000.000 VNĐ</p>
              <div className="flex flex-col justify-end">
                <div
                  className={`relative overflow-hidden transition-all duration-500 ease-in-out`}
                  style={{ maxHeight: contentHeight }}
                  ref={contentRef}
                >
                  <p className="indent-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas ut commodo metus. Vivamus eu pulvinar quam.
                    Suspendisse mollis magna sit amet ultrices. Suspendisse
                    molestie pretium mollis. Aliquam erat volutpat. Suspendisse
                    non laoreet nulla. Aenean et mi placerat, pulvinar ex vel,
                    semper eros.
                  </p>
                  {!isExpanded && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50"></div>
                  )}
                </div>

                <button
                  onClick={handleToggle}
                  className="mt-2 text-blue-500 hover:underline"
                >
                  {isExpanded ? "Ẩn bớt" : "Xem thêm"}
                </button>
              </div>
            </div>
          </div>

          {/* action */}
          <div
            className="absolute top-[25%] -right-8 opacity-0 duration-300
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
      </div>
    </>
  );
};

ProductCard.propTypes = {
  grid: PropTypes.number.isRequired,
};

export default ProductCard;
