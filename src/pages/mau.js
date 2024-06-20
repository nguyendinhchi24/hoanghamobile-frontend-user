// const handleProvinceChange = (e) => {
//   if (e.target.value === "null") {
//     setSelectedProvince("");
//   } else {
//     const provinceId = e.target.value;
//     setSelectedProvince(provinceId);
//     setDistricts(Districts[provinceId].data);
//     setSelectedDistrict("");
//   }
// };

// const handleDistrictChange = (e) => {
//   if (e.target.value === "null") {
//     setSelectedDistrict("");
//   } else {
//     const districtId = e.target.value;
//     setSelectedDistrict(districtId);
//   }
// };
// <div className="flex flex-col">
//   <div className="flex justify-between">
//     <div className="flex gap-3 items-center">
//       <label
//         className="font-semibold text-sm text-gray-600 pb-1 block"
//         htmlFor="checkOut"
//       >
//         Tỉnh/Thành phố
//       </label>
//       <p className="text-red-600 text-lg">*</p>
//     </div>
//     <div className="error text-red-500 text-sm p-0 m-0 font-medium">
//       {!selectedProvince ? (
//         <div>{formik.errors.province}</div>
//       ) : null}
//     </div>
//   </div>
//   <select
//     onBlur={formik.handleBlur("province")}
//     value={selectedProvince}
//     onChange={handleProvinceChange}
//     className="block w-full px-4 py-2 text-gray-500 mb-2 bg-gray-100 outline-none border rounded"
//     name="province" // Đặt name là "province"
//     placeholder="Tỉnh/Thành phố *"
//   >
//     <option value="0">Hà Nội</option>
//     <option value="1">Bắc Giang</option>
//     <option value="2">Bắc Ninh</option>
//   </select>
// </div>;

// <div className="flex flex-col">
//   <div className="flex justify-between">
//     <div className="flex gap-3 items-center">
//       <label
//         className="font-semibold text-sm text-gray-600 pb-1 block"
//         htmlFor="checkOut"
//       >
//         Quận/Huyện
//       </label>
//       <p className="text-red-600 text-lg">*</p>
//     </div>
//     <div className="error text-red-500 text-sm p-0 m-0 font-medium">
//       {!selectedDistrict ? (
//         <div>{formik.errors.district}</div>
//       ) : null}
//     </div>
//   </div>
//   <select
//     className="block w-full px-4 py-2 text-gray-500 mb-2 bg-gray-100 outline-none border rounded"
//     name="district" // Đặt name là "district"
//     onBlur={formik.handleBlur("district")}
//     value={selectedDistrict}
//     onChange={handleDistrictChange}
//     disabled={!selectedProvince}
//   >
//     {districts.map((district) => (
//       <option key={district.value} value={district.value}>
//         {district.name}
//       </option>
//     ))}
//   </select>
// </div>;

// useEffect(() => {
//   axios
//     .get("https://vapi.vnappmob.com/api/province/")
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error("Lỗi khi lấy dữ liệu: ", error);
//     });
// }, []);
// const handleProvinceChange = (e) => {
//   if (e.target.value === "null") {
//     setSelectedProvince("");
//   } else {
//     const provinceId = e.target.value;
//     console.log(provinceId);
//     setSelectedProvince(provinceId);
//     axios
//       .get(`https://vapi.vnappmob.com/api/province/district/${provinceId}`)
//       .then((response) => setDistricts(response.data.results));
//     setWards([]);
//     setSelectedDistrict("");
//     setSelectedWard("");
//   }
// };
// const handleDistrictChange = (e) => {
//   if (e.target.value === "null") {
//     setSelectedDistrict("");
//   } else {
//     const districtId = e.target.value;
//     setSelectedDistrict(districtId);
//     axios
//       .get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
//       .then((response) => setWards(response.data.results));
//     setSelectedWard("");
//   }
// };

// const handleWardChange = (e) => {
//   if (e.target.value === "null") {
//     setSelectedWard("");
//   } else {
//     setSelectedWard(e.target.value);
//   }
// };
{
  /* <select
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
                    </select> */
}
{
  /* <select
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
                    </select> */
}
{
  /* ward */
}
{
  /* <div className="flex flex-col">
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
                  </div> */
}

const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const axios = require("axios");
const crypto = require("crypto");

const config = {
  accessKey: "F8BBA842ECF85",
  secretKey: "K951B6PE1waDMi640xX08PD3vg6EkVlz",
  orderInfo: "thanh toan bang momo",
  partnerCode: "MOMO",
  redirectUrl: "http://localhost:5000/views/home.html",
  ipnUrl: "https://28ea-171-224-28-242.ngrok-free.app/callback",
  requestType: "payWithMethod",
  extraData: "eyJ1c2VybmFtZSI6ICJtb21vIn0",
  autoCapture: true,
  lang: "vi",
};

app.use(express.json());
app.use(urlencoded({ extended: true }));

const checkout = async (req, res) => {
  console.log(
    "----------------------------------------------------------------"
  );
  console.log("reqbody", req.body);

  let { carts, userInfo } = req.body;
  let {
    accessKey,
    secretKey,
    orderInfo,
    partnerCode,
    redirectUrl,
    ipnUrl,
    requestType,
    extraData,
    autoCapture,
    lang,
  } = config;

  let amount = 0;
  let orderIdParts = [];

  carts.forEach((cart) => {
    amount += cart.totalPrice;
    cart.products.forEach((product) => {
      orderIdParts.push(product.id);
    });
  });

  let orderId = orderIdParts.join("-");
  let requestId = orderId;

  let rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;

  let signature = crypto
    .createHmac("sha256", secretKey)
    .update(rawSignature)
    .digest("hex");

  const requestBody = JSON.stringify({
    partnerCode: partnerCode,
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    redirectUrl: redirectUrl,
    ipnUrl: ipnUrl,
    requestType: requestType,
    extraData: extraData,
    lang: lang,
    signature: signature,
    partnerName: "chi",
    storeId: "chiteaesta",
    items: carts[0].products,
    userInfo: userInfo,
    autoCapture: autoCapture,
  });

  const options = {
    method: "POST",
    url: "https://test-payment.momo.vn/v2/gateway/api/create",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(requestBody),
    },
    data: requestBody,
  };

  try {
    const result = await axios(options);
    console.log(result.data.payUrl);
    return res.status(200).json(result.data);
  } catch (error) {
    console.error(
      "Error occurred:",
      error.response ? error.response.data : error.message
    );
    return res.status(500).json({
      statusCode: 500,
      message: error.message,
      details: error.response ? error.response.data : null,
    });
  }
};

module.exports = { checkout };

{
  /* color */
}
{
  /* <div className="px-4 py-2">
                    <h3 className="text-base font-medium">Color</h3>
                    <div className="px-4">
                      <FormControl>
                        <RadioGroup row>
                          <FormControlLabel
                            value="black"
                            control={
                              <Checkbox
                                name="black"
                                checked={checkedColor.black}
                                onChange={handleChangeColor}
                                style={{
                                  color: checkedColor.black
                                    ? "black"
                                    : "default",
                                }}
                                size="big"
                              />
                            }
                            label="Đen"
                          />
                          <FormControlLabel
                            value="white"
                            control={
                              <Checkbox
                                name="white"
                                checked={checkedColor.white}
                                onChange={handleChangeColor}
                                style={{
                                  color: checkedColor.white
                                    ? "gray"
                                    : "default",
                                }}
                                size="big"
                              />
                            }
                            label="Trắng"
                          />
                          <FormControlLabel
                            value="red"
                            control={
                              <Checkbox
                                name="red"
                                checked={checkedColor.red}
                                onChange={handleChangeColor}
                                style={{
                                  color: checkedColor.red ? "red" : "default",
                                }}
                                size="big"
                              />
                            }
                            label="Đỏ"
                          />
                          <FormControlLabel
                            value="blue"
                            control={
                              <Checkbox
                                name="blue"
                                checked={checkedColor.blue}
                                onChange={handleChangeColor}
                                style={{
                                  color: checkedColor.blue ? "blue" : "default",
                                }}
                                size="big"
                              />
                            }
                            label="Xanh dương"
                          />
                          <FormControlLabel
                            value="pink"
                            control={
                              <Checkbox
                                name="pink"
                                checked={checkedColor.pink}
                                onChange={handleChangeColor}
                                style={{
                                  color: checkedColor.pink ? "pink" : "default",
                                }}
                                size="big"
                              />
                            }
                            label="Hồng"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div> */
}
{
  /* Ram */
}
{
  /* <div className="px-4 py-2">
                    <h3 className="text-base font-medium">Ram</h3>
                    <div className="px-4">
                      <FormControl>
                        <RadioGroup row>
                          <FormControlLabel
                            value="ram4gb"
                            control={
                              <Checkbox
                                checked={checkedRam.ram4gb}
                                onChange={handleChangeRam}
                                name="ram4gb"
                                size="big"
                                color="default"
                              />
                            }
                            label="RAM 4GB"
                          />
                          <FormControlLabel
                            value="ram6gb"
                            control={
                              <Checkbox
                                checked={checkedRam.ram6gb}
                                onChange={handleChangeRam}
                                name="ram6gb"
                                size="big"
                              />
                            }
                            label="RAM 6GB"
                          />
                          <FormControlLabel
                            value="ram8gb"
                            control={
                              <Checkbox
                                checked={checkedRam.ram8gb}
                                onChange={handleChangeRam}
                                name="ram8gb"
                                size="big"
                                color="default"
                              />
                            }
                            label="RAM 8GB"
                          />
                          <FormControlLabel
                            value="ram12gbb"
                            control={
                              <Checkbox
                                checked={checkedRam.ram12gb}
                                onChange={handleChangeRam}
                                name="ram12gb"
                                size="big"
                                color="default"
                              />
                            }
                            label="RAM 12GB"
                          />
                          <FormControlLabel
                            value="ram16gb"
                            control={
                              <Checkbox
                                checked={checkedRam.ram16gb}
                                onChange={handleChangeRam}
                                name="ram16gb"
                                size="big"
                                color="default"
                              />
                            }
                            label="RAM 16GB"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div> */
}
{
  /* pin */
}
{
  /* <div className="px-4 py-2">
                    <h3 className="text-base font-medium">Pin</h3>
                    <FormGroup className="px-4">
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }}
                            color="default"
                          />
                        }
                        label="6000 mAh (6)"
                        className="focus:outline-none"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }}
                            color="default"
                          />
                        }
                        label="5000 mAh (6)"
                        className="focus:outline-none"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }}
                            color="default"
                          />
                        }
                        label="4000 mAh (6)"
                        className="focus:outline-none"
                      />
                    </FormGroup>
                  </div> */
}
{
  /* <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <CustomInput
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form> */
}
