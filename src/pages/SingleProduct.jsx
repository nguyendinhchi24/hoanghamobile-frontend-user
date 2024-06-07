import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import images from "../assets";
import { useLocation, useNavigate } from "react-router-dom";
import { Checkbox, Rating } from "@mui/material";
import { useRef, useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { FaCodeCompare } from "react-icons/fa6";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import ProductList from "./../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAProduct } from "../features/products/productSlice";
import { toast } from "react-toastify";
import ColorComponent from "../components/ColorComponent";
import { addProdToCart } from "../features/user/userSlice";
import { getUserCart } from "../features/user/userSlice";
import LoadingComponent from "./LoadingComponent";

const slides = [
  {
    src: images.product.anh1,
  },
  {
    src: images.product.anh2,
  },
  {
    src: images.product.anh3,
  },
  {
    src: images.product.watch,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const SingleProduct = () => {
  const sliderRef = useRef();
  const dispatch = useDispatch();
  const location = useLocation();
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderedProduct, setOrderedProduct] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const productState = useSelector((state) => state.product.singleProduct);
  const cartState = useSelector((state) => state.auth.cartProducts);

  const handleShowComment = () => {
    if (orderedProduct === false) {
      setOrderedProduct(true);
    } else {
      setOrderedProduct(false);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch, getProductId]);

  useEffect(() => {
    if (cartState && getProductId) {
      for (let index = 0; index < cartState.length; index++) {
        if (getProductId === cartState[index]?.productId?._id) {
          setAlreadyAdded(true);
        }
      }
    }
  }, [cartState, getProductId]);

  const uploadCart = () => {
    if (color === null) {
      toast.error("Vui lòng chọn một màu!");
      return false;
    } else {
      dispatch(
        addProdToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  const handleThumbnailClick = (index) => {
    setSelectedSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const copyToClipboard = () => {
    var textField = document.createElement("textarea");
    textField.innerHTML = window.location.href;
    // textField.innerHTML = panel;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    toast.success("Copy thành công!");
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };
  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <Meta title={productState?.title ? productState?.title : "Product"} />
      <BreadCrumb
        title={productState?.title ? productState?.title : "Product"}
      />
      {/*  */}
      <Container>
        <section className="mx-auto p-5 space-y-8">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Slider  */}
            <div className="lg:col-span-6 pt-8 shadow-2xl ring-2 ring-gray-500 rounded-lg flex flex-col items-center justify-center ">
              <div className="lg:w-full w-80 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <Slider
                  {...sliderSettings}
                  ref={sliderRef}
                  initialSlide={selectedSlide}
                  beforeChange={(oldIndex, newIndex) =>
                    setSelectedSlide(newIndex)
                  }
                >
                  {slides.map((slide, index) => (
                    <div key={index}>
                      <figure className="flex items-center justify-center overflow-hidden">
                        <img
                          src={slide.src}
                          alt=""
                          className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 transform sm:w-48 md:w-64 lg:w-80 xl:w-96"
                        />
                      </figure>
                    </div>
                  ))}
                </Slider>
              </div>

              <div className="flex justify-start lg:py-11 lg:px-16 gap-5 py-10 rounded-lg">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.src}
                    alt={`Thumbnail ${index}`}
                    className={`w-12 h-auto object-cover hover:border-2 hover:border-blue-500 rounded-lg cursor-pointer ${
                      selectedSlide === index ? "border-2 border-blue-500" : ""
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details  */}
            <div className="lg:col-span-6  p-8 shadow-lg rounded-lg">
              {/*  */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold">{productState?.title}</h3>
                  <div className=" flex items-center gap-3 text-xl  font-bold pt-3 px-3 ">
                    <h3>Giá: </h3>
                    <h3 className="text-red-600 underline">
                      {formatCurrency(productState?.price)}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between text-gray-500 ">
                  <div className="flex items-center space-x-3">
                    <Rating
                      name="size-small"
                      readOnly
                      value={parseInt(productState?.totalrating)}
                      size="small"
                    />
                    <p className="text-sm font-medium">(20 reviews)</p>
                  </div>
                  <a
                    href="#review"
                    className="hover:underline text-sm font-medium hover:text-black"
                  >
                    Write a review
                  </a>
                </div>

                <div className="text-gray-700 space-y-2">
                  <div className="flex items-center">
                    <h3 className="w-28 font-medium">Type:</h3>
                    <p>Headsets</p>
                  </div>
                  <div className="flex items-center">
                    <h3 className="w-28 font-medium">Brand:</h3>
                    <p>{productState?.brand}</p>
                  </div>
                  <div className="flex items-center">
                    <h3 className="w-28 font-medium">Categories:</h3>
                    <p>{productState?.category}</p>
                  </div>
                  <div className="flex items-center">
                    <h3 className="w-28 font-medium">Tags:</h3>
                    <p>{productState?.tags}</p>
                  </div>
                  <div className="flex items-center">
                    <h3 className="w-28 font-medium">SKU:</h3>
                    <p>SKU0022</p>
                  </div>
                  <div className="flex items-center">
                    <h3 className="w-28 font-medium">Availability:</h3>
                    <p>In stock: 54</p>
                  </div>
                  {alreadyAdded === false && (
                    <>
                      <div className="flex items-center">
                        <h3 className="w-28 font-medium">Color:</h3>
                        <ColorComponent
                          setColor={setColor}
                          data={productState ? productState?.color : []}
                        />
                      </div>
                    </>
                  )}

                  <div className="flex items-center justify-between mt-4">
                    {/*  */}
                    {alreadyAdded === false && (
                      <>
                        <div className="flex items-center">
                          <h3 className="w-28 font-medium">Quantity:</h3>
                          <CustomInput
                            onChange={(e) => setQuantity(e.target.value)}
                            type="number"
                            value={quantity}
                            className="w-14 p-1 border rounded"
                          />
                        </div>
                      </>
                    )}

                    {/*  */}
                    <div className="flex space-x-4 items-center">
                      <button
                        onClick={() => {
                          alreadyAdded ? navigate("/cart") : uploadCart();
                        }}
                        className="bg-blue-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-600"
                      >
                        {alreadyAdded ? "Go To Cart" : "Add to Cart"}
                      </button>
                      {/* <Link
                        to="/cart"
                        className="bg-green-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-green-600"
                      >
                        Buy it Now
                      </Link> */}
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 py-3">
                    <button className="flex items-center space-x-2  hover:text-red-500 transition duration-300 ease-in-out">
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite className="text-red-500" />}
                      />
                      <p className="text-gray-500 hover:text-red-500 font-medium transition duration-300 ease-in-out">
                        Add to Wishlist
                      </p>
                    </button>
                    <button className="flex items-center space-x-2  hover:text-gray-700 transition duration-300 ease-in-out">
                      <FaCodeCompare className="text-gray-500" />
                      <p className="text-gray-500 hover:text-gray-700 font-medium transition duration-300 ease-in-out">
                        Add to Compare
                      </p>
                    </button>
                    <div className="flex items-center space-x-2  hover:text-gray-700 transition duration-300 ease-in-out">
                      <p className="text-gray-500 hover:text-gray-700 font-medium transition duration-300 ease-in-out">
                        Product Link:
                      </p>
                      <a
                        href="#"
                        onClick={() => {
                          copyToClipboard(window.location.href);
                        }}
                        className="text-gray-500 hover:text-gray-800 flex items-center gap-2"
                      >
                        <ContentCopyOutlinedIcon fontSize="small" />
                        <p>Copy Product Link</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* according */}
              <div>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ width: "10%", flexShrink: 0 }}>
                      <VerifiedUserIcon className="text-green-600" />
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Bảo hành
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="indent-6">
                      Bảo hành 1 đổi 1 trong vòng 2 tháng
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: "10%", flexShrink: 0 }}>
                      <MoneyOffIcon className="text-red-600" />
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Khuyến mãi
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="indent-6">
                      Trả góp tới 12 tháng không lãi suất, trả trước 0 đồng với
                      Samsung Finance+.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: "10%", flexShrink: 0 }}>
                      <ElectricRickshawIcon className="text-blue-800" />
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Shipping
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="indent-6">
                      Free Ship toàn quốc
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/*  */}
      <Container>
        <section className="">
          <div className="grid grid-cols-12 gap-4 p-4">
            <h4 className="text-xl font-semibold px-4 py-2 text-gray-900">
              Description
            </h4>
            <div className="col-span-12 rounded-lg shadow-lg">
              <div className="bg-white p-6 rounded-lg shadow-inner">
                <p
                  dangerouslySetInnerHTML={{
                    __html: productState?.description.substr(0, 70) + "...",
                  }}
                  className="text-gray-700 px-5 indent-5"
                ></p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      {/* comment */}
      <Container>
        <section className="">
          <div id="review" className="grid grid-cols-12 p-4">
            <h3 className="text-2xl font-semibold px-4 py-2 text-gray-900">
              Reviews
            </h3>
            <div className="col-span-12 rounded-lg shadow-inner">
              <div className=" bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">
                  Customer Reviews
                </h3>
                <div className="flex justify-between text-gray-500">
                  <div className="flex text-sm gap-3 items-center px-2 py-1">
                    <Rating disabled defaultValue={4} size="small" />
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      4 out of 5
                    </p>
                  </div>
                  <button
                    onClick={() => handleShowComment()}
                    className="hover:underline text-sm font-medium text-gray-500 "
                  >
                    Write a reviews
                  </button>
                </div>
                {orderedProduct && (
                  <div className="lg:px-10 py-5 bg-white ">
                    <div className="p-4 bg-gray-50 shadow-lg rounded-lg">
                      <h3 className="text-lg font-semibold mb-4 text-gray-600">
                        Write A Review
                      </h3>
                      {/* name */}
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-gray-500 font-medium mb-2 text-sm"
                        >
                          Name
                        </label>
                        <CustomInput
                          type="text"
                          className="w-full ml-1 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-gray-400 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block p-2.5 checked:bg-emerald-500"
                          placeholder="Enter your name..."
                        />
                      </div>
                      {/* mail */}
                      <div className="mb-4">
                        <label
                          htmlFor="mail"
                          className="block text-gray-500 font-medium mb-2 text-sm"
                        >
                          Mail
                        </label>
                        <CustomInput
                          type="mail"
                          className="w-full ml-1 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-gray-400 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block p-2.5 checked:bg-emerald-500"
                          placeholder="nguyenchi340702@gmail.com"
                        />
                      </div>
                      {/* rating */}
                      <div className="mb-4">
                        <label
                          htmlFor="ratting"
                          className="block text-gray-500 font-medium mb-2 text-sm"
                        >
                          Ratting
                        </label>
                        <Rating defaultValue={4} size="small" />
                      </div>
                      {/* review title */}
                      <div className="mb-4">
                        <label
                          htmlFor="review-title"
                          className="block text-gray-500 font-medium mb-2 text-sm"
                        >
                          Review Title
                        </label>
                        <CustomInput
                          type="text"
                          className="w-full ml-1 bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-gray-400 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block p-2.5 checked:bg-emerald-500"
                          placeholder="Give your review a title..."
                        />
                      </div>
                      {/* description */}
                      <div className="mb-4">
                        <label
                          htmlFor="description"
                          className="block text-gray-500 font-medium mb-2 text-sm"
                        >
                          Description
                        </label>
                        <textarea
                          name="description"
                          className="w-full ml-1 bg-gray-50 ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-gray-400 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block p-2.5 checked:bg-emerald-500 h-36"
                          placeholder="Write your comments here..."
                        ></textarea>
                      </div>
                      <div className="w-full flex justify-end px-5 py-3">
                        <button
                          className=" flex items-center duration-300 hover:gap-2 hover:-translate-x-3 justify-center gap-2 tracking-widest p-3 opacity-80 
                      border-2 text-gray-900 w-[230px] hover:opacity-100 hover:border-red-500 px-4 bg-white rounded-lg font-medium"
                        >
                          <svg
                            className="w-5 h-5 rotate-180"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                              strokeLinejoin="round"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                          <p>Submit Review</p>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/*  */}
            </div>
          </div>
        </section>
      </Container>
      {/*  */}
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
    </>
  );
};

export default SingleProduct;
