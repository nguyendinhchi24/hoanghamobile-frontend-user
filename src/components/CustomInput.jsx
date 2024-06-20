import PropTypes from "prop-types";

const CustomInput = ({
  type,
  name,
  placeholder,
  className,
  onChange,
  onBlur,
  value,
  disabled,
  ...rest
}) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        type={type}
        {...rest}
      />
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.any,
};

export default CustomInput;
