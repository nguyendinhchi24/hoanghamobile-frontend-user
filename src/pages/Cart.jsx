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
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Cart = () => {
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
                  <TableCell align="right">Số lượng</TableCell>
                  <TableCell align="right">Đơn giá</TableCell>
                  <TableCell align="right">Tổng tiền</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* render */}
                <TableRow>
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
                        <h5 className="text-sm font-medium">
                          Iphone 12 pro max
                        </h5>
                        <p className="text-xs text-gray-500">Description 1</p>
                        <p className="text-xs text-gray-500">Description 2</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell align="right">100.000 VNĐ</TableCell>

                  <TableCell align="right">
                    <div className="flex items-center justify-end">
                      <CustomInput
                        type="number"
                        defaultValue={2}
                        className="w-12 text-center bg-gray-100 rounded-md p-1 text-sm border"
                      />
                      <button className="ml-4 text-red-600 hover:text-red-800 transition duration-300">
                        <DeleteForeverRoundedIcon />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell align="right">200.000 VNĐ</TableCell>
                </TableRow>
                {/* render */}
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell rowSpan={4} />
                  <TableCell>Tổng tiền hàng </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">200.000 VNĐ</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Phí vận chuyển</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">30.000 VNĐ</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={2}>Thành tiền</TableCell>
                  <TableCell align="right">230.000 VNĐ</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={2}>
                    <Link
                      to="/"
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
                    </Link>
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
