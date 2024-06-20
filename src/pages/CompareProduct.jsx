import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import images from "./../assets/index";
import { IoIosCloseCircle } from "react-icons/io";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserProductCompareList } from "../features/user/userSlice";
import { addToCompareList } from "../features/products/productSlice";
import { toast } from "react-toastify";

const CompareProduct = () => {
  const dispatch = useDispatch();

  const compareListState =
    useSelector((state) => state?.auth?.comparelist?.comparelist) || [];
  console.log(compareListState);
  useEffect(() => {
    dispatch(getUserProductCompareList());
  }, [dispatch]);

  const removeFromCompareList = (id) => {
    dispatch(addToCompareList(id)).then(() => {
      dispatch(getUserProductCompareList());
    });
    toast.success("Xóa thành công");
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };
  return (
    <>
      <Meta title={"Compare Product"} />
      <BreadCrumb title="Compare Product" />
      <Container>
        <div className="grid lg:grid-cols-12 md:grid-cols-9 sm:grid-cols-6 gap-6 p-6">
          {compareListState && compareListState.length === 0 && (
            <div className="text-center text-2xl text-gray-500 font-bold col-span-1 md:col-span-10">
              No Data
            </div>
          )}
          {compareListState &&
            compareListState.map((item, index) => (
              <div
                key={index}
                className="col-span-3 border rounded-lg shadow-lg p-4 relative bg-white"
              >
                <div className="absolute top-3 right-3 text-xl text-red-500 cursor-pointer">
                  <IoIosCloseCircle
                    onClick={() => {
                      removeFromCompareList(item?._id);
                    }}
                  />
                </div>
                <div className="flex justify-center mb-4">
                  <img
                    src={
                      item?.images
                        ? "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2024/04/26/nubia-neo-2-5g.png"
                        : images.product.anh4
                    }
                    alt="Xiaomi Redmi Note 11 Pro 5G"
                    className="w-3/4 h-auto object-cover"
                  />
                </div>
                <div className="text-center">
                  <h5 className="text-xl font-semibold mb-2">{item?.title}</h5>
                  <h6 className="text-lg font-medium text-red-500 mb-4">
                    Giá : {formatCurrency(item?.price)}
                  </h6>
                  <div className="text-left">
                    <table className="min-w-full text-left text-sm">
                      <tbody>
                        <tr className="border-b">
                          <th className="px-4 py-2 font-semibold">Brand</th>
                          <td className="px-4 py-2 text-gray-600">
                            {item?.brand}
                          </td>
                        </tr>

                        <tr className="border-b">
                          <th className="px-4 py-2 font-semibold">Model</th>
                          <td className="px-4 py-2 text-gray-600">
                            {item?.title}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <th className="px-4 py-2 font-semibold">Network</th>
                          <td className="px-4 py-2 text-gray-600">5G</td>
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
