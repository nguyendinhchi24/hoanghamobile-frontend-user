import PropTypes from "prop-types";

const ColorComponent = ({ data, setColor }) => {
  return (
    <>
      <ul className="flex items-center space-x-2">
        {data &&
          data.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setColor(item?._id)}
                className={`w-6 h-6 border border-gray-500 bg-${
                  item?.title.toLowerCase() === "black" ||
                  item?.title.toLowerCase() === "white"
                    ? item?.title.toLowerCase()
                    : item?.title.toLowerCase() + "-600"
                } rounded-full`}
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
