import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoutes = ({ children }) => {
  const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"));

  const token = getTokenFromLocalStorage
    ? getTokenFromLocalStorage.token
    : undefined;

  return token ? children : <Navigate to="/login" replace={true} />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.any.isRequired,
};
