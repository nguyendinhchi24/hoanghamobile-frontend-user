import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import images from "./../assets/index";
import { IoIosCloseCircle } from "react-icons/io";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Product"} />
      <BreadCrumb title="Compare Product" />
      <Container>
        <div className="grid lg:grid-cols-12 md:grid-cols-9 sm:grid-cols-6 gap-6 p-6">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="col-span-3 border rounded-lg shadow-lg p-4 relative bg-white"
            >
              <div className="absolute top-3 right-3 text-xl text-red-500 cursor-pointer">
                <IoIosCloseCircle />
              </div>
              <div className="flex justify-center mb-4">
                <img
                  src={images.product.anh2}
                  alt="Xiaomi Redmi Note 11 Pro 5G"
                  className="w-3/4 h-auto object-cover"
                />
              </div>
              <div className="text-center">
                <h5 className="text-xl font-semibold mb-2">
                  Xiaomi Redmi Note 11 Pro 5G
                </h5>
                <h6 className="text-lg font-medium text-red-500 mb-4">
                  Giá : 8.500.000 VNĐ
                </h6>
                <div className="text-left">
                  <table className="min-w-full text-left text-sm">
                    <tbody>
                      <tr className="border-b">
                        <th className="px-4 py-2 font-semibold">Brand</th>
                        <td className="px-4 py-2 text-gray-600">Havels</td>
                      </tr>
                      <tr className="border-b">
                        <th className="px-4 py-2 font-semibold">Type</th>
                        <td className="px-4 py-2 text-gray-600">Xiaomi</td>
                      </tr>
                      <tr className="border-b">
                        <th className="px-4 py-2 font-semibold">Model</th>
                        <td className="px-4 py-2 text-gray-600">
                          Redmi Note 11
                        </td>
                      </tr>
                      <tr className="border-b">
                        <th className="px-4 py-2 font-semibold">Network</th>
                        <td className="px-4 py-2 text-gray-600">5G</td>
                      </tr>
                      <tr className="border-b">
                        <th className="px-4 py-2 font-semibold">Color</th>
                        <td className="px-4 py-2 text-gray-600 flex items-center">
                          <span
                            className="inline-block w-4 h-4 rounded-full mr-2"
                            style={{ backgroundColor: "#ff0000" }} // example color
                          ></span>
                          Red
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
