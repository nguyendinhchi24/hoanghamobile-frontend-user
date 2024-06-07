import PropTypes from "prop-types";
import { toast } from "react-toastify";

const ColorComponent = ({ data, setColor }) => {
  const bgColor = (title) => {
    if (title.toLowerCase() === "black") {
      return "bg-black";
    } else if (title.toLowerCase() === "white") {
      return "bg-white";
    } else {
      return `bg-${title.toLowerCase()}-600`;
    }
  };

  return (
    <>
      <ul className="flex items-center space-x-2">
        {data &&
          data.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setColor(item?._id);
                  toast.success(`Đã chọn màu ${item?.title}`);
                }}
                className={`w-6 h-6 border border-gray-500 ${bgColor(
                  item?.title
                )} rounded-full`}
              />
            );
          })}
      </ul>
    </>
  );
};

ColorComponent.propTypes = {
  data: PropTypes.array.isRequired,
  setColor: PropTypes.func.isRequired,
};
export default ColorComponent;
