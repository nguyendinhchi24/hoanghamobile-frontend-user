import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Checkbox } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import images from "../assets";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getUserCart } from "../features/user/userSlice";

let checkOutSchema = Yup.object({
  province: Yup.string().required("Tình/Thành phố không được để trống"),
  district: Yup.string().required("Quận/Huyện không được để trống"),
  ward: Yup.string().required("Xã/Phường/Thị trấn không được để trống"),
  state: Yup.string().required("State không được để trống"),
  name: Yup.string().required("Name không được để trống"),
  address: Yup.string().required("Địa chỉ không được để trống"),
  description: Yup.string(),
});

const CheckOut = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [total, setTotal] = useState(0);
  const [shippingInfo, setShippingInfo] = useState(null);
  const shippingFee = 30000;
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.auth.cartProducts) || [];

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

  useEffect(() => {
    axios
      .get("https://vapi.vnappmob.com/api/province/")
      .then((response) => setProvinces(response.data.results));
  }, []);

  const handleProvinceChange = (e) => {
    if (e.target.value === "null") {
      setSelectedProvince("");
    } else {
      const provinceId = e.target.value;
      setSelectedProvince(provinceId);
      axios
        .get(`https://vapi.vnappmob.com/api/province/district/${provinceId}`)
        .then((response) => setDistricts(response.data.results));
      setWards([]);
      setSelectedDistrict("");
      setSelectedWard("");
    }
  };

  const handleDistrictChange = (e) => {
    if (e.target.value === "null") {
      setSelectedDistrict("");
    } else {
      const districtId = e.target.value;
      setSelectedDistrict(districtId);
      axios
        .get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
        .then((response) => setWards(response.data.results));
      setSelectedWard("");
    }
  };

  const handleWardChange = (e) => {
    if (e.target.value === "null") {
      setSelectedWard("");
    } else {
      setSelectedWard(e.target.value);
    }
  };

  const handleStateChange = (e) => {
    if (e.target.value === "null") {
      setSelectedState("");
    } else {
      setSelectedState(e.target.value);
    }
  };

  const formik = useFormik({
    initialValues: {
      province: "",
      district: "",
      ward: "",
      state: "",
      name: "",
      address: "",
      description: "",
    },
    validationSchema: checkOutSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
    },
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <>
      <Meta title={"Hóa đơn"} />
      <BreadCrumb title="Hóa đơn" />
      <Container>
        <section>
          <div className="grid lg:grid-cols-12 p-5 gap-6">
            {/*  */}
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
            {/*  */}
            <div className="col-span-6 p-8 bg-white rounded-lg">
              <div className="border-b ">
                <h3 className="text-center font-medium text-lg text-gray-900">
                  Thôn tin liên hệ
                </h3>
                <p className="py-2 text-gray-800">
                  Tiếp tục với (nguyenchi240702@gmail.com)
                </p>
                <button className="p-1 px-2 hover:underline text-gray-800 hover:text-black">
                  Log out
                </button>
                <div className="flex items-center text-gray-800 gap-3 py-4">
                  <Checkbox size="small" />
                  <p>Gửi các ưu đãi cho tôi</p>
                </div>
              </div>
              <div className="">
                <h3 className="text-center mt-2 mb-1 font-medium text-lg text-gray-900">
                  Thông tin đặt hàng
                </h3>
                <p className="text-sm mb-4 mt-4 text-center text-gray-700">
                  Bạn cẩn phải điền đầy đủ thông tin có dấu *
                </p>

                <form onSubmit={formik.handleSubmit}>
                  {/* province */}
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        <label
                          className="font-semibold text-sm text-gray-600 pb-1 block"
                          htmlFor="checkOut"
                        >
                          Tỉnh/Thành phố
                        </label>
                        <p className="text-red-600 text-lg">*</p>
                      </div>
                      <div className="error text-red-500 text-sm p-0 m-0 font-medium">
                        {!selectedProvince ? (
                          <div>{formik.errors.province}</div>
                        ) : null}
                      </div>
                    </div>
                    <select
                      className="block w-full px-4 py-2 text-gray-500 mb-2 bg-gray-100 outline-none border rounded"
                      name="province"
                      onBlur={formik.handleBlur("province")}
                      value={selectedProvince}
                      onChange={handleProvinceChange}
                    >
                      <option value="null">Tỉnh/Thành phố *</option>
                      {provinces.map((province) => (
                        <option
                          key={province.province_id}
                          value={province.province_id}
                        >
                          {province.province_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* district */}
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        <label
                          className="font-semibold text-sm text-gray-600 pb-1 block"
                          htmlFor="checkOut"
                        >
                          Quận/Huyện
                        </label>
                        <p className="text-red-600 text-lg">*</p>
                      </div>
                      <div className="error text-red-500 text-sm p-0 m-0 font-medium">
                        {!selectedDistrict ? (
                          <div>{formik.errors.district}</div>
                        ) : null}
                      </div>
                    </div>
                    <select
                      className="block w-full px-4 py-2 text-gray-500 mb-2 bg-gray-100 outline-none border rounded"
                      name="district"
                      onBlur={formik.handleBlur("district")}
                      value={selectedDistrict}
                      onChange={handleDistrictChange}
                      disabled={!selectedProvince}
                    >
                      <option value="null">Quận/Huyện</option>
                      {districts.map((district) => (
                        <option
                          key={district.district_id}
                          value={district.district_id}
                        >
                          {district.district_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* ward */}
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        <label
                          className="font-semibold text-sm text-gray-600 pb-1 block"
                          htmlFor="checkOut"
                        >
                          Xã/Phường/Thị trấn
                        </label>
                        <p className="text-red-600 text-lg">*</p>
                      </div>
                      <div className="error text-red-500 text-sm p-0 m-0 font-medium">
                        {!selectedWard ? <div>{formik.errors.ward}</div> : null}
                      </div>
                    </div>
                    <select
                      className="block w-full px-4 py-2 text-gray-500 mb-2 bg-gray-100 outline-none border rounded"
                      name="word"
                      onBlur={formik.handleBlur("word")}
                      value={selectedWard}
                      onChange={handleWardChange}
                      disabled={!selectedDistrict}
                    >
                      <option value="null">Xã/Phường/Thị trấn</option>
                      {selectedDistrict &&
                        wards.map((ward) => (
                          <option key={ward.ward_id} value={ward.ward_id}>
                            {ward.ward_name}
                          </option>
                        ))}
                    </select>
                  </div>
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
                      <option value="null">State</option>
                      <option value="State2">State1</option>
                      <option value="State2">State2</option>
                      <option value="State2">State3</option>
                      <option value="State2">State4</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        <label
                          className="font-semibold text-sm text-gray-600 pb-1 block"
                          htmlFor="checkOut"
                        >
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
                      type="text"
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                      className="w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        <label
                          className="font-semibold text-sm text-gray-600 pb-1 block"
                          htmlFor="checkOut"
                        >
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
                      type="text"
                      name="address"
                      onChange={formik.handleChange("address")}
                      onBlur={formik.handleBlur("address")}
                      value={formik.values.address}
                      className="w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between">
                      <div className="flex gap-3 items-center">
                        <label
                          className="font-semibold text-sm text-gray-600 pb-1 block"
                          htmlFor="checkOut"
                        >
                          Ghi chú
                        </label>
                        <p className="text-red-600 text-lg">*</p>
                      </div>
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
                      placeholder="Nhận xét"
                    ></textarea>
                  </div>
                </form>
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
                  <Link
                    to="/checkout"
                    className="py-3 opacity-80 border-2 text-white hover:opacity-100 tracking-widest transition duration-300 px-4 bg-slate-900 rounded-lg font-medium"
                  >
                    Đặt hàng
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default CheckOut;
