import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Checkbox } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import images from "../assets";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CheckOut = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  useEffect(() => {
    axios
      .get("https://vapi.vnappmob.com/api/province/")
      .then((response) => setProvinces(response.data.results));
  }, []);

  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);
    axios
      .get(`https://vapi.vnappmob.com/api/province/district/${provinceId}`)
      .then((response) => setDistricts(response.data.results));
    setWards([]);
    setSelectedDistrict("");
    setSelectedWard("");
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    axios
      .get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
      .then((response) => setWards(response.data.results));
    setSelectedWard("");
  };

  const handleWardChange = (e) => {
    setSelectedWard(e.target.value);
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
                  <div className="flex justify-between my-4 items-center p-4 bg-slate-50 shadow-md rounded-lg">
                    <div className=" flex items-center">
                      <div className="relative border-2 w-20 h-20 bg-white flex-shrink-0 mr-4">
                        <img
                          src={images.product.anh2}
                          alt="Iphone 12 pro max"
                          className="h-full rounded-lg object-cover"
                        />
                        <div className="absolute -top-2 -right-2 text-gray-800 font-semibold flex">
                          <p className="h-6 w-6 text-sm flex items-center justify-center rounded-full bg-gray-200">
                            10
                          </p>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">
                          Iphone 12 pro max
                        </h5>
                        <p className="text-xs text-gray-500">Description 1</p>
                        <p className="text-xs text-gray-500">Description 2</p>
                      </div>
                    </div>

                    <div className="text-gray-800 font-semibold ">
                      <p>100.000 VNĐ</p>
                    </div>
                  </div>

                  {/*  */}
                </div>
                <div className="">
                  <div className="flex justify-between p-2 bg-white border-b rounded-lg my-4">
                    <h3>Tổng tiền hàng</h3>
                    <p>200.000 VNĐ</p>
                  </div>
                  <div className="flex justify-between p-2 bg-white border-b rounded-lg my-4">
                    <h3>Phí vận chuyển</h3>
                    <p>20.000 VNĐ</p>
                  </div>
                </div>
                <div className="">
                  <div className="text-black font-semibold text-xl flex justify-between p-2 bg-white border-b rounded-lg my-4">
                    <h3>Tổng thanh toán</h3>
                    <p>220.000 VNĐ</p>
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
                  <Checkbox {...label} size="small" />
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
                <form>
                  {/*  */}
                  <div className="flex flex-col">
                    <label htmlFor="tinh" className="py-1 -ml-2 text-gray-500">
                      TỈnh Hoặc Thành Phố
                    </label>
                    <select
                      className="block w-full px-4 py-2 text-gray-500 mb-2 bg-gray-100 outline-none border rounded"
                      value={selectedProvince}
                      onChange={handleProvinceChange}
                    >
                      <option value="">Tỉnh/Thành phố *</option>
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
                  {/*  */}
                  <div className="flex flex-col">
                    <label htmlFor="tinh" className="py-1 -ml-2 text-gray-500">
                      Quận hoặc Huyện
                    </label>
                    <select
                      className="block w-full px-4 py-2 text-gray-500 mb-2 bg-gray-100 outline-none border rounded"
                      value={selectedDistrict}
                      onChange={handleDistrictChange}
                      disabled={!selectedProvince}
                    >
                      <option value="Quận/Huyện *">Quận/Huyện *</option>
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
                  {/*  */}
                  <div className="flex flex-col">
                    <label htmlFor="tinh" className="py-1 -ml-2 text-gray-500">
                      Xã, Phường, Thị trấn
                    </label>
                    <select
                      className="block w-full px-4 py-2 text-gray-500 mb-2 bg-gray-100 outline-none border rounded"
                      value={selectedWard}
                      onChange={handleWardChange}
                      disabled={!selectedDistrict}
                    >
                      <option value="">Xã/Phường/Thị trấn</option>
                      {wards.map((ward) => (
                        <option key={ward.ward_id} value={ward.ward_id}>
                          {ward.ward_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Name
                    </label>
                    <CustomInput
                      type="text"
                      name="name"
                      id="name"
                      className="w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Address
                    </label>
                    <CustomInput
                      type="text"
                      name="address"
                      id="address"
                      className="w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="note"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Ghi chú
                    </label>
                    <textarea
                      name="description"
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
