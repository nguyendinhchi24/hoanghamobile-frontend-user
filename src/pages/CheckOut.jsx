import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import images from "../assets";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createAnOrder, getUserCart } from "../features/user/userSlice";

let checkOutSchema = Yup.object({
  state: Yup.string().required("State không được để trống"),
  name: Yup.string().required("Name không được để trống"),
  phone: Yup.string().required("Phone không được để trống"),
  address: Yup.string().required("Địa chỉ không được để trống"),
  description: Yup.string(),
});

const CheckOut = () => {
  const [selectedState, setSelectedState] = useState("");
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const shippingFee = 30000;
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cartState = useSelector((state) => state.auth.cartProducts) || [];
  const userState = useSelector((state) => state.auth.user) || [];
  const { _id: userId } = userState;
  // const orderIdProduct = useSelector((state) => state.auth.orderIdProduct);

  const handleCheckout = (values) => {
    const orderItems = cartState.map((item) => ({
      product: item.productId._id,
      color: item.color._id,
      quantity: item.quantity,
      price: item.price,
    }));

    const totalPrice = cartState.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const payload = {
      user: userId,
      shippingInfo: {
        name: values.name,
        phone: values.phone,
        address: values.address,
        state: values.state,
        other: values.description,
      },
      orderItems: orderItems,
      totalPrice: totalPrice,
      totalPriceAfterDiscount: totalPrice,
      orderStatus: "Success",
    };

    if (values.state == "money") {
      dispatch(createAnOrder(payload));
    }
  };

  // const handleCheckout = (values) => {
  //   const endpoint = values.state === "momo" ? "checkout" : "create-order";

  //   const payload = {
  //     carts: [
  //       {
  //         id: "222",
  //         totalPrice: 9999,
  //         products: [
  //           {
  //             id: "204727",
  //             name: "YOMOST Bac Ha&Viet Quat 170ml",
  //             description: "YOMOST Sua Chua Uong Bac Ha&Viet Quat 170ml/1 Hop",
  //             category: "beverage",
  //             imageUrl: "https://momo.vn/uploads/product1.jpg",
  //             manufacturer: "Vinamilk",
  //             price: 1,
  //             quantity: 1,
  //             unit: "hộp",
  //             totalPrice: 10000,
  //             taxAmount: "200",
  //           },
  //         ],
  //       },
  //     ],
  //     userInfo: {
  //       name: "Nguyen Van A",
  //       phone: "0999888999",
  //       email: "email_add@domain.com",
  //     },
  //   };

  //   if (endpoint === "checkout") {
  //     dispatch(checkOut(payload));
  //   }
  // };

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  useEffect(() => {
    if (cartState.length) {
      const totalAmount = cartState.reduce(
        (acc, item) => acc + item?.productId.price * item?.quantity,
        0
      );
      setTotal(totalAmount);
    }
  }, [cartState]);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
      description: "",
      state: "",
    },
    validationSchema: checkOutSchema,
    onSubmit: (values) => {
      handleCheckout(values);
    },
  });
  const handleStateChange = (e) => {
    if (e.target.value === "null") {
      setSelectedState("");
    } else {
      setSelectedState(e.target.value);
      formik.setFieldValue("state", e.target.value);
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
      <Meta title={"Order History"} />
      <BreadCrumb title="Order History" />
      <Container>
        <section>
          <div className="grid lg:grid-cols-12 p-5 gap-6">
            {/* product */}
            <div className="col-span-6 p-8 bg-white rounded-lg">
              <div className="p-5 bg">
                <div className="border-b-4">
                  {/* render */}
                  {cartState &&
                    cartState.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-between my-4 items-center p-4 bg-slate-50 shadow-md rounded-lg"
                        >
                          <div className=" flex items-center">
                            <div className="relative border-2 w-20 h-20 bg-white flex-shrink-0 mr-4">
                              <img
                                src={images.product.anh2}
                                alt="Iphone 12 pro max"
                                className="h-full rounded-lg object-cover"
                              />
                              <div className="absolute -top-2 -right-2 text-gray-800 items-center font-semibold flex">
                                <p className="h-6 w-6 text-gray-900 text-sm flex items-center justify-center rounded-full bg-cyan-200">
                                  {item?.quantity}
                                </p>
                              </div>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium">
                                {item?.productId.title}
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
                                Giảm 15% cho học sinh - sinh viên - nhân viên
                                văn phòng
                              </p>
                            </div>
                          </div>

                          <div className="text-gray-800 font-semibold ">
                            <p>
                              {formatCurrency(item?.price * item?.quantity)}
                            </p>
                          </div>
                        </div>
                      );
                    })}

                  {/*  */}
                </div>
                <div className="">
                  <div className="flex justify-between p-2 bg-white border-b rounded-lg my-4">
                    <h3>Tổng tiền hàng</h3>
                    <p>
                      {formatCurrency(total)
                        ? formatCurrency(total)
                        : formatCurrency(0)}
                    </p>
                  </div>
                  <div className="flex justify-between p-2 bg-white border-b rounded-lg my-4">
                    <h3>Phí vận chuyển</h3>
                    <p>
                      {formatCurrency(shippingFee)
                        ? formatCurrency(shippingFee)
                        : formatCurrency(0)}
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="text-black font-semibold text-xl flex justify-between p-2 bg-white border-b rounded-lg my-4">
                    <h3>Tổng thanh toán</h3>
                    <p>
                      {formatCurrency(total + shippingFee)
                        ? formatCurrency(total + shippingFee)
                        : formatCurrency(0)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* address */}
            <div className="col-span-6 p-8 bg-white rounded-lg">
              <div className="">
                <div>
                  <h3 className="text-center mt-2 mb-1 font-medium text-lg text-gray-900">
                    Thông tin đặt hàng
                  </h3>
                  <p className="text-sm mb-4 mt-4 text-center text-gray-700">
                    Bạn cẩn phải điền đầy đủ thông tin có dấu *
                  </p>
                </div>

                <form onSubmit={formik.handleSubmit}>
                  {/* name */}
                  <div className="mb-4">
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">
                          Name
                        </label>
                        <p className="text-red-600 text-lg">*</p>
                      </div>
                      <div className="error text-red-500 text-sm p-0 m-0 font-medium">
                        {formik.touched.name && formik.errors.name ? (
                          <div>{formik.errors.name}</div>
                        ) : null}
                      </div>
                    </div>
                    <CustomInput
                      className="w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                      type="text"
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">
                          Phone
                        </label>
                        <p className="text-red-600 text-lg">*</p>
                      </div>
                      <div className="error text-red-500 text-sm p-0 m-0 font-medium">
                        {formik.touched.phone && formik.errors.phone ? (
                          <div>{formik.errors.phone}</div>
                        ) : null}
                      </div>
                    </div>
                    <CustomInput
                      className="w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone"
                      type="number"
                      name="phone"
                      onChange={formik.handleChange("phone")}
                      onBlur={formik.handleBlur("phone")}
                      value={formik.values.phone}
                    />
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">
                          Địa chỉ cụ thể
                        </label>
                        <p className="text-red-600 text-lg">*</p>
                      </div>
                      <div className="error text-red-500 text-sm p-0 m-0 font-medium">
                        {formik.touched.address && formik.errors.address ? (
                          <div>{formik.errors.address}</div>
                        ) : null}
                      </div>
                    </div>
                    <CustomInput
                      className="w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your Address"
                      type="text"
                      name="address"
                      onChange={formik.handleChange("address")}
                      onBlur={formik.handleBlur("address")}
                      value={formik.values.address}
                    />
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between">
                      <label className="font-semibold text-sm text-gray-600 pb-1 block">
                        Ghi chú
                      </label>
                      <div className="error text-red-500 text-sm p-0 m-0 font-medium">
                        {formik.touched.description &&
                        formik.errors.description ? (
                          <div>{formik.errors.description}</div>
                        ) : null}
                      </div>
                    </div>
                    <textarea
                      name="description"
                      onChange={formik.handleChange("description")}
                      onBlur={formik.handleBlur("description")}
                      value={formik.values.description}
                      className="bg-gray-100 w-full text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150"
                      placeholder="Ghi chú"
                    ></textarea>
                  </div>

                  {/* state */}
                  <div className="mb-4">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div className="flex gap-3 items-center">
                          <label
                            className="font-semibold text-sm text-gray-600 pb-1 block"
                            htmlFor="checkOut"
                          >
                            State
                          </label>
                          <p className="text-red-600 text-lg">*</p>
                        </div>
                        <div className="error text-red-500 text-sm p-0 m-0 font-medium">
                          {!selectedState ? (
                            <div>{formik.errors.state}</div>
                          ) : null}
                        </div>
                      </div>
                      <select
                        name="state"
                        onChange={handleStateChange}
                        onBlur={formik.handleBlur("state")}
                        value={selectedState}
                        className="block w-full px-4 py-2 text-gray-500 mb-2 bg-gray-100 outline-none border rounded"
                      >
                        <option value="">Phương thức thanh toán</option>
                        <option value="money">Thanh toán khi nhận hàng</option>
                        <option value="momo">Thanh toán qua MoMo</option>
                        <option value="banking">
                          Thanh toán Internet Banking
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Link
                      to="/"
                      className="flex items-center duration-300 hover:gap-2 hover:-translate-x-3 justify-center gap-2 tracking-widest p-3 opacity-80 
                    border-2 text-gray-900 hover:opacity-100 hover:border-red-500 px-4 bg-white rounded-lg font-medium"
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
                      <p>Quay lại</p>
                    </Link>
                    <button
                      onClick={() => {
                        setTimeout(() => {
                          dispatch(getUserCart());
                          navigate("/my-orders");
                        }, 800);
                      }}
                      className="py-3 opacity-80 border-2 text-white hover:opacity-100 tracking-widest transition duration-300 px-4 bg-slate-900 rounded-lg font-medium"
                    >
                      Đặt hàng
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default CheckOut;
