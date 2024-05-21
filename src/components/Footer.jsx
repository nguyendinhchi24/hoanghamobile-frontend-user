// import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaMailBulk,
  FaPhoneAlt,
  FaRegPaperPlane,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomInput from "./CustomInput";

const FooterComponent = () => {
  return (
    <>
      {/* header */}
      <footer className="bg-slate-200 pb-4 pt-3 border-t  border-slate-400 ">
        <div
          className="container lg:px-32 mx-auto flex flex-wrap justify-between items-center space-y-4 
        max-sm:space-y-5 max-sm:flex-col max-sm:justify-center"
        >
          <div className="flex items-center space-x-6 ">
            <FaRegPaperPlane className="h-8 w-8" />
            <h2 className="text-xl font-medium text-slate-900 ">
              Sign Up For Newsletter
            </h2>
          </div>
          <div className="flex flex-row max-sm:flex-col items-center space-y-0 space-x-2 max-sm:space-y-4 max-sm:space-x-2">
            <CustomInput
              className="focus:outline-none h-10 w-full max-sm:w-[260px] md:w-auto lg:w-[280px] placeholder:text-zinc-900 placeholder:opacity-50 font-mono rounded-md border border-gray-500 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:ring-1 focus:ring-slate-900 focus:border-transparent"
              type="search"
              placeholder="hoanghamobile@gmail.com"
            />
            <button className="bg-slate-900 opacity-80 font-mono hover:opacity-100 text-white font-medium py-2 px-5 rounded-md shadow-md transition-color duration-500 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
      {/* main */}
      <footer className="py-4 bg-slate-200 border-b border-slate-400">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-sm:px-4">
            <div className="flex flex-col">
              <h4 className="mb-4 font-medium text-lg">
                Thông tin về cửa hàng
              </h4>
              <div className="flex flex-col text-sm">
                <address className="transition duration-300 opacity-70 font-medium hover:opacity-100">
                  Địa chỉ: Chợ Đình Trám, Việt Yên, Bắc Giang, Vietnam
                </address>
                <a
                  href="tel:0333151203"
                  className="mt-4 block transition duration-300 opacity-70 font-medium hover:opacity-100"
                >
                  Phone: <strong>0333151203</strong>
                </a>
                <a
                  href="zalo:0333151203"
                  className="mt-4 block transition duration-300 opacity-70 font-medium hover:opacity-100"
                >
                  Zalo: <strong>0333151203</strong>
                </a>
                <a
                  href="mailto:nguyenchi240702@gmai.com"
                  className="mt-4 mb-3 block transition duration-300 opacity-70 font-medium hover:opacity-100"
                >
                  Mail: <strong>nguyenchi240702@gmai.com</strong>
                </a>
                <div className="flex gap-4 py-2">
                  <a href="#">
                    <FaTiktok className="h-6 w-6 opacity-80 hover:opacity-100 hover:text-black" />
                  </a>
                  <a href="#">
                    <FaFacebookSquare className="h-6 w-6 opacity-80 hover:opacity-100 hover:text-blue-900" />
                  </a>
                  <a href="#">
                    <FaPhoneAlt className="h-6 w-6 opacity-80 hover:opacity-100 hover:text-blue-900" />
                  </a>
                  <a href="#">
                    <FaMailBulk className="h-6 w-6 opacity-80 hover:opacity-100 hover:text-green-900" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="mb-4 font-medium text-lg">Thông tin</h4>
              <div className="flex flex-col text-sm">
                <Link
                  to="/privacy-policy"
                  className="py-2 mb-1 transition duration-300 opacity-70 font-medium hover:opacity-100"
                >
                  Chính sách bảo mật
                </Link>
                <Link
                  to="/refund-policy"
                  className="py-2 mb-1 transition duration-300 opacity-70 font-medium hover:opacity-100"
                >
                  Chính sách hoàn tiền
                </Link>
                <Link
                  to="/shipping-policy"
                  className="py-2 mb-1 transition duration-300 opacity-70 font-medium hover:opacity-100"
                >
                  Chính sách vận chuyển
                </Link>
                <Link
                  to="/term-policy"
                  className="py-2 mb-1 transition duration-300 opacity-70 font-medium hover:opacity-100"
                >
                  Điều khoản và điều kiện
                </Link>
                <Link
                  to="/blog"
                  className="py-2 mb-1 transition duration-300 opacity-70 font-medium hover:opacity-100"
                >
                  Blogs
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="mb-4 font-medium text-lg">Tài khoản</h4>
              <div className="flex flex-col text-sm">
                <Link className="py-2 mb-1 transition duration-300 opacity-70 font-medium hover:opacity-100">
                  About Us
                </Link>
                <Link className="py-2 mb-1 transition duration-300 opacity-70 font-medium hover:opacity-100">
                  Liên hệ
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="mb-4 font-medium text-lg">Quick Links</h4>
              <div className="flex flex-col text-sm">
                <Link className="py-2 mb-1 transition duration-300 opacity-70 font-medium hover:opacity-100">
                  Hãng Iphone
                </Link>
                <Link className="py-2 mb-1 transition duration-300 opacity-70 font-medium hover:opacity-100">
                  Hãng Android
                </Link>
                <Link className="py-2 mb-1 transition duration-300 opacity-70 font-medium hover:opacity-100">
                  Sửa chữa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* footer */}
      <footer className="py-1 bg-slate-200">
        <div className="py-1 rounded-t-lg   flex justify-center items-center">
          <span className="text-sm text-gray-700 sm:text-center">
            © 2024 HoangHaMobile™. Nguyen Dinh Chi.
          </span>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
