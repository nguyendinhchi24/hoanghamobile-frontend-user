import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateProfile } from "../features/user/userSlice";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import images from "../assets";
let registerSchema = Yup.object({
  name: Yup.string().required("Name Không được để trống"),
  email: Yup.string()
    .required("Email Không được để trống")
    .email("Email Không đúng"),
  phone: Yup.number().required("Phone Không được để trống"),
  image: Yup.string(),
});

const Profile = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth.user);

  const [imagePreview, setImagePreview] = useState(null);
  const [edit, setEdit] = useState(true);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    formik.setFieldValue("image", selectedFile);

    const imageUrl = URL.createObjectURL(selectedFile);
    setImagePreview(imageUrl);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: userState?.name,
      email: userState?.email,
      phone: userState?.phone,
      image: userState?.image,
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(updateProfile(values));
      setEdit(true);
    },
  });
  return (
    <Container>
      <Meta title={"Profile"} />
      <BreadCrumb title="Profile" />
      <div className="mx-auto max-w-screen-xl px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Profile</h1>
        </div>
        <div
          onClick={() => setEdit(false)}
          className="mx-auto flex gap-2 justify-end items-center my-4 max-w-md cursor-pointer hover:text-red-600 text-right"
        >
          <h3>Edit</h3>
          <EditNoteRoundedIcon fontSize="medium" />
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="mx-auto mb-0  max-w-md space-y-4"
          action="#"
        >
          <div>
            <div className="flex justify-between">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="name"
              >
                Name
              </label>
              <div className="error text-red-500 text-sm p-0 m-0 font-medium">
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
              </div>
            </div>
            <div className="relative">
              <CustomInput
                disabled={edit}
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                name="name"
                type="text"
                onChange={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
                value={formik.values.name}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="email"
              >
                Email
              </label>
              <div className="error text-red-500 text-sm p-0 m-0 font-medium">
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className="relative">
              <CustomInput
                disabled={edit}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                id="email"
                type="email"
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                value={formik.values.email}
              />
            </div>
          </div>
          {/*  */}
          <div>
            <div className="flex justify-between">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="phone"
              >
                Phone
              </label>
              <div className="error text-red-500 text-sm p-0 m-0 font-medium">
                {formik.touched.phone && formik.errors.phone ? (
                  <div>{formik.errors.phone}</div>
                ) : null}
              </div>
            </div>
            <div className="relative">
              <CustomInput
                disabled={edit}
                placeholder="Enter your phone"
                className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                name="phone"
                type="tel"
                onChange={formik.handleChange("phone")}
                onBlur={formik.handleBlur("phone")}
                value={formik.values.phone}
              />
            </div>
          </div>
          {/*  */}
          <div>
            <div className="flex justify-between">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="image"
              >
                Image
              </label>
            </div>
            <div className="relative flex gap-5">
              <img
                src={
                  imagePreview ? imagePreview : images.noImage.noImageProduct
                }
                className="w-14 h-14 border-2 border-gray-500 mt-2 rounded-full max-w-xs"
              />
              <CustomInput
                id="image"
                name="image"
                type="file"
                className="w-full rounded-lg border-2 bg-gray-100 border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                onChange={handleImageChange}
                onBlur={formik.handleBlur("image")}
                value={formik.values?.image}
              />
            </div>
          </div>

          {edit === false && (
            <div className="w-full text-right px-10">
              <button className="text-right rounded-lg bg-purple-600 px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </Container>
  );
};
export default Profile;
