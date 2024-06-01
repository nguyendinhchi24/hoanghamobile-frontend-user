//
import { Stack } from "@mui/material";
import images from "../assets";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { FaBagShopping } from "react-icons/fa6";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

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

const SpecialProduct = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        if (index < 3) {
          return (
            <div
              key={index}
              className=" border-2 ring-black shadow-lg ring-1 rounded-lg"
            >
              <div className="flex justify-between max-sm:flex-col max-lg:flex-col">
                <div className="flex justify-center items-center pointer-events-none ">
                  <img
                    src={images.product.anh1}
                    alt=""
                    className="rounded-lg object-cover p-5 h-auto w-full pointer-events-none"
                  />
                </div>
                {/* content */}
                <div className="rounded-lg py-4 px-2">
                  <h6 className="text-red-800 text-sm">{item?.brand}</h6>
                  <h5 className="font-semibold text-lg py-2">{item?.title}</h5>
                  <Rating
                    name="size-small"
                    readOnly={true}
                    defaultValue={parseInt(item?.totalrating)}
                    size="small"
                  />
                  <p className="text-red-600 text-base font-medium flex">
                    <span>{item.price} VNĐ</span> &nbsp;{" "}
                    <strike className="text-gray-500">8.500.000 VNĐ</strike>
                  </p>
                  <div className="flex items-center p-3 gap-2">
                    <p className="font-semibold text-lg">
                      500&nbsp;
                      <span className="opacity-70 text-base">Days</span>
                    </p>
                    <div className="flex items-center gap-2 font-semibold">
                      <span className="rounded-full p-2 bg-red-600 text-white">
                        12
                      </span>
                      :
                      <span className="rounded-full p-2 bg-red-600 text-white">
                        14
                      </span>
                      :
                      <span className="rounded-full p-2 bg-red-600 text-white">
                        60
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm py-3 opacity-70 font-medium">
                      Còn {item.quantity} sản phẩm
                    </p>
                    <Stack spacing={2} sx={{ flexGrow: 1 }}>
                      <BorderLinearProgress
                        variant="determinate"
                        value={item.quantity}
                      />
                    </Stack>
                  </div>
                  <div className="py-3 group relative flex justify-end items-center text-zinc-600 text-sm font-bold">
                    <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-300 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
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
                      className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-lime-200 to-yellow-200 p-3 rounded-full cursor-pointer duration-300"
                    >
                      <FaBagShopping className="text-xl" />
                      <span className="text-[0px] group-hover:text-sm duration-150">
                        Mua ngay
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

SpecialProduct.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SpecialProduct;
