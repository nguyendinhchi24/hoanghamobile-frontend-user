import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../features/products/productSlice";
import { PropTypes } from "prop-types";

const ProductList = ({ grid, number }) => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const productsToShow = Array.isArray(productState)
    ? productState.slice(0, number)
    : [];

  return (
    <>
      <ProductCard data={productsToShow} grid={grid} />
    </>
  );
};

ProductList.propTypes = {
  grid: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
};
export default ProductList;
