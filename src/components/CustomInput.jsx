import PropTypes from "prop-types";

const CustomInput = ({ type, name, placeholder, className, ...rest }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className={className}
        name={name}
        type={type}
        {...rest}
      />
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default CustomInput;
