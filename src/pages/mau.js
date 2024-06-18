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
