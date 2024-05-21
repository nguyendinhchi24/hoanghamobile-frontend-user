import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import images from "../assets";
import { IoMdArrowRoundBack, IoMdMailUnread } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Blog"} />
      <BreadCrumb title="Blog" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5 ">
          {/*  */}
          <div className="lg:col-span-1 p-5 bg-white border shadow-xl rounded-lg">
            <div className="flex flex-col items-center justify-center ">
              <div className="w-full max-w-md bg-white rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Đánh giá của bạn
                </h2>

                <form className="flex flex-col space-y-4">
                  <CustomInput
                    type="text"
                    className="bg-gray-100 w-full text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                    placeholder="Name"
                  />
                  <CustomInput
                    type="email"
                    className="bg-gray-100 w-full text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                    placeholder="Email"
                  />
                  <CustomInput
                    type="number"
                    className="bg-gray-100 w-full text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                    placeholder="Phone Number"
                  />
                  <textarea
                    name="description"
                    className="bg-gray-100 w-full text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                    placeholder="Nhận xét"
                  ></textarea>
                  <CustomInput
                    type="file"
                    className="bg-gray-100 w-full text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-3 px-6 rounded-md mt-6 hover:from-indigo-600 hover:to-blue-600 transition duration-150"
                  >
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="lg:col-span-2 p-5 rounded-lg bg-white border shadow-xl flex flex-col gap-5">
            {/*  */}
            <div className="flex justify-between hover:shadow-xl transition-all duration-500 shadow-lg p-6 rounded-lg bg-slate-50">
              <Link
                to="/blog"
                className="flex items-center gap-2 hover:text-blue-900"
              >
                <IoMdArrowRoundBack className="h-6 w-6 " />
                <p>Back to blog</p>
              </Link>
              <Link to="/contact" className="flex items-center gap-2">
                <FaFacebookSquare className="h-6 w-6 hover:text-blue-800" />
                <SiZalo className="h-6 w-6 hover:bg-white hover:text-blue-800 p-1 rounded-lg hover:border" />
                <IoMdMailUnread className="h-6 w-6 hover:text-green-800" />
              </Link>
            </div>
            {/*  */}
            <div className="p-1 border-2 ring-black shadow-lg ring-1 rounded-lg bg-white">
              <div className="rounded-lg flex justify-center items-center ">
                <img
                  src={images.blog.card}
                  alt=""
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="px-5 py-3">
                <p className="text-sm indent-4 py-2 text-gray-500 font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.tempor incididunt ut labore et dolore magna aliqua.
                  tempor incididunt ut labore et dolore magna aliqua. tempor
                  incididunt ut labore et dolore magna aliqua. tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <div className="flex gap-20 py-2">
                  <p className="opacity-80 ">1 / 2024</p>
                  <p className="opacity-80 ">chibao</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
