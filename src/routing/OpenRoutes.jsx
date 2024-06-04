import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export const OpenRoutes = ({ children }) => {
  const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"));

  return getTokenFromLocalStorage?.token === undefined ? (
    children
  ) : (
    <Navigate to="/" replace={true} />
  );
};

OpenRoutes.propTypes = {
  children: PropTypes.any.isRequired,
};
