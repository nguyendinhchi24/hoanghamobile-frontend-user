import axios from "axios";
import { base_url, config } from "./../../utils/axiosConfig";

const getProducts = async (data) => {
  const response = await axios.get(
    `${base_url}product?${data?.brand ? `brand=${data?.brand}&` : ""}${
      data?.tag ? `tags=${data?.tag}&` : ""
    }${data?.minPrice ? `price[gte]=${data?.minPrice}&` : ""}${
      data?.maxPrice ? `price[lte]=${data?.maxPrice}&` : ""
    }${data?.sort ? `sort=${data?.sort}` : ""}`
  );
  if (response.data) {
    return response.data;
  }
};

const getSearchProducts = async (keyword) => {
  const response = await axios.get(`${base_url}product/search/${keyword}`);
  if (response.data) {
    return response.data;
  }
};

const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    return response.data;
  }
};

const addToWishListService = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};

const addToCompareListService = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/comparelist`,
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};

const rateProduct = async (data) => {
  const response = await axios.put(`${base_url}product/rating`, data, config);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishListService,
  getSingleProduct,
  getSearchProducts,
  rateProduct,
  addToCompareListService,
};
