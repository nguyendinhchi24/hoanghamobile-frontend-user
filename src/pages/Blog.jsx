import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <>
      <Meta title={"Blog"} />
      <BreadCrumb title="Blog" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5 ">
        {/*  */}
        <div className="lg:col-span-1 p-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Đánh giá của bạn
              </h2>

              <form className="flex flex-col space-y-4">
                <input
                  type="email"
                  className="bg-gray-100 text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="bg-gray-100 text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                  placeholder="Phone Number"
                />
                <textarea
                  name="description"
                  className="bg-gray-100 text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                  placeholder="Nhận xét"
                ></textarea>
                <input
                  type="file"
                  className="bg-gray-100 text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-3 px-6 rounded-md mt-6 hover:from-indigo-600 hover:to-blue-600 transition duration-150"
                >
                  Đăng bài
                </button>
              </form>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="lg:col-span-2 p-5 rounded-lg bg-gradient-to-tr from-red-500 to-pink-500">
          <div
            className=" 
            grid grid-cols-2 md:grid-cols-4 
            lg:grid-cols-6 xl:grid-cols-6 gap-4 "
          >
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
