import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import images from "./../assets/index";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getUserCart,
  deleteCartProduct,
  updateCartProduct,
} from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const userCartState = useSelector((state) => state.auth.cartProducts) || [];
  const [productUpdateDetail, setProductUpdateDetail] = useState({});
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const shippingFee = 30000;

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  useEffect(() => {
    if (productUpdateDetail.cartItemId) {
      dispatch(
        updateCartProduct({
          cartItemId: productUpdateDetail.cartItemId,
          quantity: productUpdateDetail.quantity,
        })
      ).then(() => {
        setProductUpdateDetail({});
        dispatch(getUserCart());
      });
    }
  }, [productUpdateDetail, dispatch]);

  useEffect(() => {
    if (userCartState.length) {
      const totalAmount = userCartState.reduce(
        (acc, item) => acc + item?.productId.price * item?.quantity,
        0
      );
      setTotal(totalAmount);
    }
  }, [userCartState]);

  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 400);
  };

  const handleIncrement = (item) => {
    setProductUpdateDetail({
      cartItemId: item?._id,
      quantity: item?.quantity + 1,
    });
  };

  const handleDecrement = (item) => {
    if (item?.quantity > 1) {
      setProductUpdateDetail({
        cartItemId: item?._id,
        quantity: item?.quantity - 1,
      });
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <>
      <Meta title={"Giỏ hàng"} />
      <BreadCrumb title="Giỏ hàng" />
      <Container>
        <section className="flex flex-col gap-10 px-4 py-6">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell align="right">Đơn giá</TableCell>
                  <TableCell align="right">Số lượng</TableCell>
                  <TableCell align="right">Tổng tiền</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userCartState &&
                  userCartState.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center">
                            <div className="w-20 h-20 bg-gray-200 flex-shrink-0 mr-4">
                              <img
                                src={images.product.anh1}
                                alt="Iphone 12 pro max"
                                className="w-full h-full rounded-lg object-cover"
                              />
                            </div>
                            <div>
                              <h5 className="text-sm md:text-xl font-medium">
                                {item?.productId?.title}
                              </h5>
                              <div className="text-gray-500 flex items-center gap-2">
                                <p>Color:</p>
                                <span
                                  className={`text-xs md:text-base text-gray-500`}
                                >
                                  {item?.color?.title}
                                </span>
                                <div
                                  key={index}
                                  className={`w-4 h-4 border border-gray-500 bg-${
                                    item?.color?.title.toLowerCase() ===
                                      "black" ||
                                    item?.color?.title.toLowerCase() === "white"
                                      ? item?.color?.title.toLowerCase()
                                      : item?.color?.title.toLowerCase() +
                                        "-600"
                                  } rounded-full`}
                                />
                              </div>
                              <p className="text-xs text-gray-500">
                                Giảm giá 15%
                              </p>
                            </div>
                          </div>
                        </TableCell>

                        <TableCell align="right">
                          {formatCurrency(item?.productId?.price)}
                        </TableCell>
                        <TableCell align="right">
                          <div className="flex items-center justify-end gap-4">
                            <button
                              className="text-red-600 hover:text-red-800 transition duration-300"
                              onClick={() => handleDecrement(item)}
                            >
                              -
                            </button>
                            <CustomInput
                              type="number"
                              value={
                                productUpdateDetail.cartItemId === item?._id
                                  ? productUpdateDetail.quantity
                                  : item?.quantity
                              }
                              onChange={(e) =>
                                setProductUpdateDetail({
                                  cartItemId: item?._id,
                                  quantity: parseInt(e.target.value),
                                })
                              }
                              className="w-12 text-center bg-gray-100 rounded-md p-1 text-sm border"
                            />
                            <button
                              className="text-green-600 hover:text-green-800 transition duration-300"
                              onClick={() => handleIncrement(item)}
                            >
                              +
                            </button>
                            <button
                              onClick={() => {
                                deleteACartProduct(item?._id);
                              }}
                              className="ml-4 text-red-600 hover:text-red-800 transition duration-300"
                            >
                              <DeleteForeverRoundedIcon />
                            </button>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {formatCurrency(
                            item?.productId?.price * item?.quantity
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell rowSpan={4} />
                  <TableCell>Tổng tiền hàng</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">{formatCurrency(total)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Phí vận chuyển</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    {formatCurrency(shippingFee)}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={2}>Thành tiền</TableCell>
                  <TableCell align="right">
                    {formatCurrency(total + shippingFee)}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={2}>
                    <button
                      onClick={() => navigate("/product")}
                      className="flex items-center duration-300 hover:gap-2 hover:-translate-x-3 justify-center gap-2 tracking-widest p-3 opacity-80 
                      border-2 text-gray-900 w-[200px] hover:opacity-100 hover:border-red-500 px-4 bg-white rounded-lg font-medium"
                    >
                      <svg
                        className="w-5 h-5 rotate-180"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                      <p>Tiếp tục mua sắm</p>
                    </button>
                  </TableCell>
                  <TableCell align="right">
                    <Link
                      to="/checkout"
                      className="py-3 opacity-80 border-2 text-white hover:opacity-100 tracking-widest transition duration-300 px-4 bg-slate-900 rounded-lg font-medium"
                    >
                      Thanh toán ngay
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </Container>
    </>
  );
};

export default Cart;
