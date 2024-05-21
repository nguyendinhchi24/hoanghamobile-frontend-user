import images from "../assets";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <div className="col-span-2">
        <div className="p-1 border-2 ring-black shadow-lg ring-1 rounded-lg bg-white">
          <div className="rounded-lg flex justify-center items-center ">
            <img
              src={images.blog.card}
              alt=""
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="px-2 py-3">
            <p className="opacity-80 py-2 px-4">1 / 2024</p>
            <h5 className="font-semibold text-xl">Rất tuyệt vời hahahahahha</h5>
            <p className="text-sm py-2 indent-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="text-right py-1">
              <Link
                to="/blog/:id"
                className="bg-slate-900 py-2 px-6 rounded-md text-white text-sm opacity-80 hover:opacity-100 transition duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
