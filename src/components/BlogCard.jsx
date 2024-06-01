import images from "../assets";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const BlogCard = ({ id, title, description, image, date }) => {
  return (
    <div className="col-span-2">
      <div className="border rounded-lg overflow-hidden bg-slate-100 shadow-xl ring-1 ring-gray-800">
        <div className="rounded-lg">
          <img
            src={image ? image : images.blog.card}
            alt=""
            className="rounded-t-lg object-cover w-full h-48 md:h-64"
          />
        </div>
        <div className="p-4">
          <p className="text-gray-500 text-sm mb-2">{date}</p>
          <h3 className="text-xl font-semibold mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {title}
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: description.substr(0, 70) + "...",
            }}
            className="text-sm mb-4 overflow-hidden whitespace-nowrap overflow-ellipsis"
          ></p>
          <div className="text-right">
            <Link
              to={"/blog/" + id}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default BlogCard;
