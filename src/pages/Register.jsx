import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { Link } from "react-router-dom";

let registerSchema = Yup.object({
  name: Yup.string().required("Name Không được để trống"),
  email: Yup.string()
    .required("Email Không được để trống")
    .email("Email Không đúng"),
  phone: Yup.number().required("Phone Không được để trống"),
  password: Yup.string().required("Mật khẩu Không được để trống"),
});

const Register = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  return (
    <>
      <Meta title={"Register List"} />
      <BreadCrumb title="Register List" />
      <Container>
        <div className="mx-auto max-w-screen-xl px-4 pb-16 pt-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Register</h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nulla
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            action="#"
          >
            <div>
              <div className="flex justify-between">
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                  htmlFor="register"
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
                  placeholder="Enter your name"
                  className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  name="name"
                  type="text"
                  onChange={formik.handleChange("name")}
                  onBlur={formik.handleBlur("name")}
                  value={formik.values.name}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                  htmlFor="register"
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
                  placeholder="Enter your email"
                  className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  id="email"
                  type="email"
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            {/*  */}
            <div>
              <div className="flex justify-between">
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                  htmlFor="register"
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
                  placeholder="Enter your phone"
                  className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  name="phone"
                  type="tel"
                  onChange={formik.handleChange("phone")}
                  onBlur={formik.handleBlur("phone")}
                  value={formik.values.phone}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            {/*  */}
            <div>
              <div className="flex justify-between">
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                  htmlFor="register"
                >
                  Password
                </label>
                <div className="error text-red-500 text-sm p-0 m-0 font-medium">
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>
              </div>
              <div className="relative">
                <CustomInput
                  placeholder="Enter your password"
                  className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  name="password"
                  type="password"
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-gray-600 hover:underline"
                href="#"
              >
                Forgot your password?
              </Link>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Do you already have an account&nbsp;
                <Link to="/login" className="underline">
                  Login
                </Link>
              </p>
              <button className="inline-block rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Register
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Register;
