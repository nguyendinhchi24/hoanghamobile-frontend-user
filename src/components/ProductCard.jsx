import { useDispatch } from "react-redux";
import { addToWishList } from "../features/products/productSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { Checkbox, IconButton, Tooltip } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import PropTypes from "prop-types";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import images from "../assets";
import { useState } from "react";

const ProductCard = ({ data, grid }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [likedItems, setLikedItems] = useState(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedItems")) || {};
    return savedLikes;
  });

  const addToWish = (id) => {
    const updatedLikes = { ...likedItems, [id]: !likedItems[id] };
    setLikedItems(updatedLikes);
    localStorage.setItem("likedItems", JSON.stringify(updatedLikes));

    dispatch(addToWishList(id));
  };

  const handleNavigation = (e, id) => {
    e.stopPropagation();
    navigate("/product/" + id);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${
            location.pathname === "/product" ? `col-span-${grid}` : "col-span-2"
          }`}
        >
          <div
            className={`${
              grid === 12 ? "flex" : ""
            } group hover:scale-105 transition-all duration-300 hover:bg-slate-100 relative select-none shadow shadow-red-400 bg-white rounded-lg`}
          >
            {/* Nút like với trạng thái được lưu trữ */}
            <div
              onClick={() => {
                addToWish(item._id);
              }}
              className="absolute z-8 text-lg right-1 top-1 cursor-pointer"
            >
              <div className="flex flex-col">
                <Tooltip title="Like" placement="left-start">
                  <IconButton>
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite className="text-red-500" />}
                      // Sử dụng trạng thái liked từ localStorage
                      checked={!!likedItems[item._id]}
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Mua ngay" placement="left-start">
                  <IconButton
                    onClick={(e) => {
                      handleNavigation(e, item?._id);
                    }}
                  >
                    <ShoppingBagOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="So sánh" placement="left-start">
                  <IconButton
                    onClick={() => {
                      navigate("/compare-product");
                    }}
                  >
                    <CompareArrowsOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white pointer-events-none">
              <img
                src={images.product.watch}
                alt=""
                className="object-cover h-48 w-full md:h-full md:w-48 pointer-events-none transition duration-300"
              />
            </div>
            <div
              onClick={(e) => {
                handleNavigation(e, item?._id);
              }}
              className={`${
                grid === 12 ? "" : "border-t"
              } p-4 w-full cursor-pointer`}
            >
              <p className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {item.brand}
              </p>
              <h4 className="block mt-1 text-lg leading-tight font-medium text-black truncate">
                {item.title}
              </h4>
              <Rating
                name="size-small"
                readOnly
                value={parseFloat(item.totalrating)}
                size="small"
                className="pt-3"
              />
              <p className="text-red-600 text-lg font-bold">
                {formatCurrency(item.price)}
              </p>
              <p className="text-slate-500 overflow-hidden whitespace-nowrap text-ellipsis">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

ProductCard.propTypes = {
  grid: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default ProductCard;
