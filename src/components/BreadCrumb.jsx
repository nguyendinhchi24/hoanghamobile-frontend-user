import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { SiConvertio } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";

const MyComponent = ({ title }) => (
  <div
    className="flex flex-col justify-center items-center px-5 py-2 border border-gray-100
  lg:flex-row lg:justify-between lg:items-center 
  md:flex-row md:justify-between md:items-center"
  >
    <div role="presentation">
      <Breadcrumbs maxItems={2} className="px-5" aria-label="breadcrumb">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
    </div>
    <div className="flex items-center gap-3 mt-5 lg:mt-0">
      <Link
        to="/comparelist"
        className="flex items-center text-sm font-medium opacity-85 hover:opacity-100 transition duration-300 gap-2 px-6 py-2 rounded-lg text-white bg-slate-800"
      >
        <SiConvertio className="h-4 w-4" />
        <p className="">So sánh</p>
      </Link>
      <Link
        to="/wishlist"
        className="flex items-center text-sm font-medium opacity-85 hover:opacity-100 transition duration-300 gap-2 px-6 py-2 rounded-lg text-white bg-slate-800"
      >
        <FaRegHeart className="h-4 w-4" />
        <p className="">Yêu thích</p>
      </Link>
    </div>
  </div>
);

MyComponent.propTypes = {
  title: PropTypes.string,
};

export default MyComponent;
