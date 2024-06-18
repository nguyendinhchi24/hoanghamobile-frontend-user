import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import category from "./anh1.png";
import images from "../assets";
import SpecialProduct from "../components/SpecialProduct";
import ProductCardSlider from "../components/ProductCardSlider";
import { Rating } from "@mui/material";
import Container from "../components/Container";
import {
  FaShippingFast,
  FaHeadphones,
  FaUndo,
  FaMoneyBillWave,
} from "react-icons/fa";
import services from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";
import ProductList from "../components/ProductList";
import { getAllProducts } from "../features/products/productSlice";
import { getUserCart } from "../features/user/userSlice";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const iconMap = {
  FaShippingFast: FaShippingFast,
  FaHeadphones: FaHeadphones,
  FaUndo: FaUndo,
  FaMoneyBillWave: FaMoneyBillWave,
};

const Home = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.blog.blogs);
  const productState = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllBlogs());
    dispatch(getAllProducts());
    dispatch(getUserCart());
  }, [dispatch]);

  return (
    <>
      <Meta title={"Hoàng Hà Mobile"} />
      <BreadCrumb />

      {/* slider */}
      <Container>
        <section className="p-5 ">
          <div className="bg-white p-5 rounded-md grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="md:col-span-2 lg:col-span-2 xl:col-span-4">
              {/* slider */}
              <div className="group relative">
                <img
                  src="https://cdn.hoanghamobile.com/i/home/Uploads/2024/06/08/xiaomi-redmi-12-web.png"
                  className="w-full h-auto object-cover transition-opacity duration-300 rounded-lg max-h-full max-w-full"
                  alt="Xiaomi RedMi"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl flex flex-col justify-center items-center bg-opacity-80 w-full lg:w-2/4 p-6 transform translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300">
                    <div className="relative z-10 text-center">
                      <h1 className="text-black text-2xl lg:text-4xl font-semibold py-1 lg:py-4">
                        Xiaomi RedMi Note 11 Pro 5G
                      </h1>
                      <div className="flex items-center py-1 lg:py-4">
                        <strong className="text-lg text-red-500 mr-2 underline">
                          Giá: 5.500.000 VNĐ
                        </strong>
                        <p className="text-red-500 line-through text-lg mt-2">
                          8.500.000 đ
                        </p>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Giảm giá: 35%
                      </p>
                      <p className="text-sm text-gray-700 mb-4">
                        Khuyến mãi: Tặng kèm tai nghe Bluetooth
                      </p>
                      <button className="text-white bg-slate-900 hover:bg-red-500 hover:text-white py-2 px-6 rounded-full font-semibold transition duration-300">
                        Mua Ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* image small */}
            <div className="md:col-span-2 lg:col-span-1 xl:col-span-1 ">
              <div className="flex">
                <div className="flex gap-6 justify-center items-center">
                  {[...Array(4)].map((_, index) => (
                    <div
                      className="relative w-[330px] mx-auto border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                      key={index}
                    >
                      <img
                        src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/18/13-removebg-preview.png"
                        className="w-full h-72 object-contain bg-white"
                        alt=""
                      />
                      <div className="p-4">
                        <h4 className="text-sm text-gray-700 uppercase font-semibold tracking-wide">
                          Xiaomi RedMi
                        </h4>
                        <h1 className="text-lg text-gray-900 font-bold py-2">
                          Xiaomi RedMi Note 11 Pro 5G
                        </h1>
                        <div className="flex items-center justify-between py-2">
                          <strong className="text-xl text-red-500 underline">
                            5.500.000 VNĐ
                          </strong>
                          <p className="text-gray-500 line-through">
                            8.500.000 VNĐ
                          </p>
                        </div>
                        <Link
                          to="/product"
                          className="block w-full text-center py-3 mt-4 bg-red-500 text-white rounded-lg font-semibold transition duration-300 hover:bg-red-600"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* categories */}
      <Container>
        <section className="p-5">
          <div
            className="bg-white rounded-lg p-4 grid grid-cols-1 
          sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4"
          >
            {[...Array(8)].map((_, index) => (
              <div
                className="flex items-center rounded-lg border border-gray-300 justify-center p-4"
                key={index}
              >
                <div className="px-5">
                  <h6 className="font-medium text-xl mb-2">
                    Xiaomi Redmi Note 11 pro 5g
                  </h6>
                  <p className="text-sm opacity-80">Còn 5 sản phẩm</p>
                </div>
                <img src={category} alt="" className="object-cover w-28 h-28" />
              </div>
            ))}
          </div>
        </section>
      </Container>

      {/* special */}
      <Container>
        <section className="p-5">
          <h3 className="text-2xl p-4 text-slate-900 font-semibold">
            Sản phẩm giảm giá
          </h3>
          <div
            className="bg-white rounded-lg p-4
            grid grid-cols-1 
            sm:grid-cols-2 md:grid-cols-2 
            lg:grid-cols-2 xl:grid-cols-3 gap-4"
          >
            <SpecialProduct data={productState ? productState : []} />
          </div>
        </section>
      </Container>

      {/*  */}
      <Container>
        <section className="p-5">
          <h3 className="text-2xl p-4 text-slate-900 font-semibold">
            Sản phẩm
          </h3>
          <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Sản phẩm 1 */}
            {[...Array(4)].map((_, index) => (
              <button
                to="/product"
                key={index}
                className="relative bg-white hover:bg-slate-200 rounded-lg shadow-lg overflow-hidden lg:col-span-1"
              >
                <img
                  src={images.product.watch}
                  className="object-cover w-full h-40 lg:h-auto"
                  alt="Samsung Galaxy S24 Ultra"
                />
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-600">Giảm giá</p>
                  <h2 className="text-lg lg:text-2xl font-semibold transition duration-500 text-gray-800 py-3">
                    Galaxy S24 Ultra
                  </h2>
                  <Rating readOnly defaultValue={4} size="small" />

                  <p className="text-base font-semibold text-red-500">
                    Giá chỉ còn 14.000.000 <sup className="text-sm">đ</sup>
                  </p>
                  <p className="text-sm text-gray-600">
                    Giảm 10% cho học sinh - sinh viên
                  </p>
                </div>
                <div className="absolute top-3 right-2 animate-bounce bg-red-500 px-5 py-3 rounded-lg">
                  <p className="text-sm font-semibold text-white">Trả góp 0%</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </Container>

      {/* featured */}
      <Container>
        <section className="p-5">
          <h3 className="text-2xl p-4 text-slate-900 font-semibold">
            Bộ sửu tập
          </h3>
          <div
            className="bg-white rounded-lg p-4
            grid grid-cols-1 md:grid-cols-4
            lg:grid-cols-8 xl:grid-cols-12 gap-4"
          >
            <ProductList grid={2} number={6} />
          </div>
        </section>
      </Container>
      {/* pupup */}

      <Container>
        <section className="p-5">
          <h3 className="text-2xl p-4 text-slate-900 font-semibold">
            Tất cả sản phẩm
          </h3>
          <ProductCardSlider />
        </section>
      </Container>

      {/* shipping */}
      <Container>
        <section className="p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  className="flex items-center justify-center bg-white p-4 rounded-lg"
                  key={index}
                >
                  <IconComponent className="h-7 w-7" />
                  <div className="px-5">
                    <h6 className="font-medium text-lg">{service.title}</h6>
                    <p className="opacity-80 text-sm text-gray-600 indent-1">
                      {service.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Container>

      {/* blog */}
      <Container>
        <section className="p-5">
          <h3 className="text-2xl p-4 text-slate-900 font-semibold">
            Blog Mới Nhất
          </h3>
          <div
            className="
            bg-white rounded-lg p-4
            grid grid-cols-2 md:grid-cols-4 
            lg:grid-cols-6 xl:grid-cols-8 gap-4"
          >
            {blogState &&
              blogState?.map((item, index) => {
                if (index < 4) {
                  return (
                    <BlogCard
                      key={index}
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.created_at).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    />
                  );
                }
              })}
          </div>
        </section>
      </Container>
      {/* marque */}
      <Container>
        <section className="p-5">
          <Marquee className="flex bg-white rounded-lg p-0">
            <div className="mx-4 w-25 border">
              <img src={images.brand.brand01} alt="" />
            </div>
            <div className="mx-4 w-25">
              <img src={images.brand.brand02} alt="" />
            </div>
            <div className="mx-4 w-25">
              <img src={images.brand.brand03} alt="" />
            </div>
            <div className="mx-4 w-25">
              <img src={images.brand.brand04} alt="" />
            </div>
            <div className="mx-4 w-25">
              <img src={images.brand.brand05} alt="" />
            </div>
            <div className="mx-4 w-25">
              <img src={images.brand.brand06} alt="" />
            </div>
            <div className="mx-4 w-25">
              <img src={images.brand.brand07} alt="" />
            </div>
            <div className="mx-4 w-25">
              <img src={images.brand.brand08} alt="" />
            </div>
          </Marquee>
        </section>
      </Container>

      <div className="bg-slate-100"></div>
    </>
  );
};

export default Home;
