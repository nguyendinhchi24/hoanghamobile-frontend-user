import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { IoHome } from "react-icons/io5";
import { FaHourglassHalf, FaPhoneVolume } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <Container>
        <div className="p-5">
          <div className="flex justify-center items-center p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390.8301581738778!2d106.11579591464387!3d21.26259751172961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135135423dfb6e3%3A0xe566471db56e5c55!2zVGjhur8gZ2nhu5tpIGRpIMSR4buZbmcgSG_DoG5nIEjDoA!5e0!3m2!1svi!2s!4v1716095503355!5m2!1svi!2s"
              width="900"
              height="450"
              className="border-0 rounded-lg shadow-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/*  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
            <div className="lg:col-span-1 flex flex-col items-center justify-center ">
              <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Contact
                </h2>

                <form className="flex flex-col space-y-4">
                  <CustomInput
                    type="text"
                    className="bg-gray-100 w-full text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                    placeholder="Name"
                  />
                  <CustomInput
                    type="email"
                    className="bg-gray-100 w-full text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                    placeholder="Email"
                  />
                  <CustomInput
                    type="text"
                    className="bg-gray-100 w-full text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                    placeholder="Phone Number"
                  />
                  <textarea
                    name="description"
                    className="bg-gray-100 w-full text-gray-900 border border-gray-300 rounded-md p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                    placeholder="Nhận xét"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-3 px-6 rounded-md mt-6 hover:from-indigo-600 hover:to-blue-600 transition duration-150"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            {/*  */}
            <div className="lg:col-span-1 flex flex-col items-center w-full ">
              <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Địa chỉ
                </h2>

                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row gap-6 opacity-80 items-center">
                    <IoHome className="w-6 h-6" />
                    <p className="text-sm font-medium">
                      Số nhà 12, Chợ đình trám, Hồng Thái, Việt Yên, Bắc Giang,
                      Việt Nam
                    </p>
                  </div>
                  <div className="flex flex-row gap-6 opacity-80 items-center">
                    <FaPhoneVolume className="w-6 h-6" />
                    <p className="text-sm font-medium">
                      Số nhà 12, Chợ đình trám, Hồng Thái, Việt Yên, Bắc Giang,
                      Việt Nam
                    </p>
                  </div>
                  <div className="flex flex-row gap-6 opacity-80 items-center">
                    <IoMdMail className="w-6 h-6" />
                    <p className="text-sm font-medium">
                      Số nhà 12, Chợ đình trám, Hồng Thái, Việt Yên, Bắc Giang,
                      Việt Nam
                    </p>
                  </div>
                  <div className="flex flex-row gap-6 opacity-80 items-center">
                    <FaHourglassHalf className="w-6 h-6" />
                    <p className="text-sm font-medium">
                      Số nhà 12, Chợ đình trám, Hồng Thái, Việt Yên, Bắc Giang,
                      Việt Nam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
