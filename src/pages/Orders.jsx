import Meta from "../components/Meta";
import Container from "./../components/Container";
import BreadCrumb from "./../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOrders, getUserCart } from "./../features/user/userSlice";
import { Fragment } from "react";
import images from "../assets";

const Orders = () => {
  const dispatch = useDispatch();
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const orderState = useSelector((state) => state.auth.getOrderIdProduct) || [];

  useEffect(() => {
    dispatch(getOrders());
    dispatch(getUserCart());
  }, [dispatch]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const toggleViewDetails = (orderId) => {
    if (selectedOrderId === orderId) {
      setSelectedOrderId(null);
    } else {
      setSelectedOrderId(orderId);
    }
  };

  return (
    <>
      <Meta title={"Đơn hàng của tôi"} />
      <BreadCrumb title="Đơn hàng của tôi" />
      <Container>
        {orderState.length === 0 ? (
          <div colSpan={5}>
            <span className="text-center w-full justify-center flex p-8 text-2xl font-semibold text-gray-400">
              Không có đơn hàng nào
            </span>
          </div>
        ) : (
          <>
            <div className=" px-8 pt-8 pb-16">
              <h1 className="text-2xl font-bold mb-4 text-center">
                Order History
              </h1>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full bg-white text-center">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200">
                        Order ID
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200">
                        Total Quantity
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200">
                        Total Amount
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200">
                        Status
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderState.map((order, index) => (
                      <Fragment key={index}>
                        <tr>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {order._id}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {order.orderItems.reduce(
                              (total, item) => total + item.quantity,
                              0
                            )}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {formatCurrency(order.totalPrice)}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            {order.orderStatus}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-200">
                            <button
                              className="text-blue-500 hover:underline"
                              onClick={() => toggleViewDetails(order._id)}
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                        {selectedOrderId === order._id && (
                          <tr>
                            <td colSpan={5}>
                              <div className="p-4">
                                <div className=" bg-gray-100 px-5 py-4 shadow-lg rounded-md">
                                  <div className="font-medium text-base text-left">
                                    Thông tin chi tiết
                                  </div>
                                  {order.orderItems.map((item, indexItem) => (
                                    <div key={indexItem} className="py-4">
                                      <div className="flex gap-2 items-center border border-gray-400 p-2 rounded-md shadow-md">
                                        <div className="flex items-center mr-3">
                                          {item.product && (
                                            <img
                                              className="w-12 h-12 mr-4 rounded-md"
                                              src={
                                                item.product.images[0]?.url
                                                  ? item.product.images[0]?.url
                                                  : images.noImage
                                                      .noImageProduct
                                              }
                                              alt={item.product.title}
                                            />
                                          )}
                                          <span className="font-medium text-sm">
                                            {item.product
                                              ? item.product.title
                                              : "Unknown Product"}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-2 py-2 px-4">
                                          <span className="font-medium text-sm">
                                            Color:
                                          </span>
                                          <p>
                                            {item.color
                                              ? item.color.title
                                              : "Unknown Color"}
                                          </p>
                                        </div>
                                        <div className="flex items-center gap-2 py-2 px-4">
                                          <span className="font-medium text-sm">
                                            Số lượng:
                                          </span>
                                          <p>{item.quantity}</p>
                                        </div>
                                        <div className="flex items-center gap-2 py-2 px-4">
                                          <span className="font-medium text-sm">
                                            Giá bán:
                                          </span>
                                          <p>{formatCurrency(item.price)}</p>
                                        </div>
                                        <div className="flex items-center gap-2 py-2 px-4">
                                          <span className="font-medium text-sm">
                                            Thành tiền:
                                          </span>
                                          <p>
                                            {formatCurrency(
                                              item.price * item.quantity
                                            )}
                                          </p>
                                        </div>
                                        <div className="flex items-center gap-2 py-2 px-4">
                                          <span className="font-medium text-sm">
                                            Địa chỉ:
                                          </span>
                                          <p className="text-sm">
                                            {order.shippingInfo
                                              ? order.shippingInfo.address
                                              : "Unknown Address"}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Orders;
