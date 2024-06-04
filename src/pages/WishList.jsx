import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import images from "./../assets/index";
import { IoIosCloseCircle } from "react-icons/io";
import { styled } from "@mui/material/styles";
import { FaBagShopping } from "react-icons/fa6";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProductWishList } from "./../features/user/userSlice";
import { addToWishList } from "../features/products/productSlice";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const WishList = () => {
  const dispatch = useDispatch();
  const wishListState = useSelector(
    (state) => state?.auth?.wishlist?.wishlist ?? []
  );

  useEffect(() => {
    dispatch(getUserProductWishList());
  }, [dispatch]);

  const removeFromWishList = (id) => {
    dispatch(addToWishList(id)).then(() => {
      dispatch(getUserProductWishList());
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };
  return (
    <>
      <Meta title={"Wish List"} />
      <BreadCrumb title="Wish List" />
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 gap-6 p-6 bg-gray-100">
          {wishListState && wishListState.length === 0 && (
            <div className="text-center text-2xl text-gray-500 font-bold col-span-1 md:col-span-10">
              No Data
            </div>
          )}
          {wishListState &&
            wishListState.map((item, index) => (
              <div
                key={index}
                className="border col-span-2 group rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative">
                  <IoIosCloseCircle
                    onClick={() => {
                      removeFromWishList(item?._id);
                    }}
                    className="absolute top-2 right-2 text-2xl text-red-500 cursor-pointer hover:text-red-600 transition-colors"
                  />
                  <img
                    src={
                      item.images ? images.product.anh4 : images.product.anh4
                    }
                    alt={item?.images[0].public_id}
                    className="rounded-lg object-cover p-5 h-auto w-full pointer-events-none"
                  />
                </div>
                <div className="p-4">
                  <h5 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
                    {item.title}
                  </h5>
                  <p className="text-base font-medium text-red-500 mb-4">
                    Giá: {formatCurrency(item?.price)}
                    <sub className="pl-2 text-sm line-through text-gray-500">
                      500000
                    </sub>
                  </p>
                  <div>
                    <p className="text-sm py-3 opacity-70 font-medium">
                      Đã bán được 55 sản phẩm
                    </p>
                    <Stack spacing={2} sx={{ flexGrow: 1 }}>
                      <BorderLinearProgress variant="determinate" value={20} />
                    </Stack>
                  </div>
                  <div className="py-3 group relative flex justify-end items-center text-zinc-600 text-sm font-bold">
                    <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-700 group-hover:delay-300 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
                      <div className="bg-lime-200 flex items-center gap-1 p-2 rounded-md">
                        <span>Giảm 15%</span>
                      </div>
                      <div className="shadow-md bg-lime-200 absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                      <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
                        <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                      </div>
                    </div>

                    <Link
                      to="/cart"
                      className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-lime-200 to-yellow-200 p-3 rounded-full cursor-pointer duration-700"
                    >
                      <FaBagShopping className="text-xl" />
                      <span className="text-[0px] group-hover:text-sm duration-500">
                        Mua ngay
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </>
  );
};

export default WishList;
