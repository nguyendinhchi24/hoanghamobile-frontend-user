import Meta from "../components/Meta";
import Container from "./../components/Container";
import BreadCrumb from "./../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "./../features/user/userSlice";
import { Fragment } from "react";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.auth.getOrderProduct);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <>
      <Meta title={"Đơn hàng của tôi"} />
      <BreadCrumb title="Đơn hàng của tôi" />
      <Container className="">
        <div className="mx-auto px-8 pt-8 pb-16">
          <h1 className="text-2xl font-bold mb-4 text-center">Order History</h1>
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
                    Discounted Amount
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200">Status</th>
                  <th className="py-2 px-4 border-b border-gray-200">Action</th>
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
                        {order.totalQuantity}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        ${order.totalAmount}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        ${order.totalDiscountedAmount}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        {order.status}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        <button className="text-blue-500 hover:underline">
                          View Details
                        </button>
                      </td>
                    </tr>
                    {order.orderItems.map((item, itemIndex) => (
                      <tr key={itemIndex} className="bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 pl-8 text-left">
                          <div className="flex items-center justify-center">
                            <img
                              src={item.product.images[0].url}
                              alt={item.product.title}
                              className="w-12 h-12 mr-4"
                            />
                            <span>{item.product.title}</span>
                          </div>
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {item.quantity}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          ${item.price}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200"></td>
                        <td className="py-2 px-4 border-b border-gray-200"></td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {item.color.title}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
};
{
  /* {orderState ? (
            
          ) : (
            <span className="text-center w-full justify-center flex p-8 text-2xl font-semibold text-gray-400">
              Không có đơn hàng nào{" "}
            </span>
          )} */
}
export default Orders;
