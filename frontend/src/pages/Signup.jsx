import { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link } from "react-router-dom";
import uploadImageToCloudinary from "../utils/uploadCloudinary";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "customer",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    // console.log(file)
    //used cloudinary to upload image
    const data = await uploadImageToCloudinary(file);
    console.log(data);
  };

  const submitHandler = async (event) => {
    console.log(formData);
    event.preventDefault();
  };

  return (
    <section className="px-5 xl:px-0">
      <br />
      <br /><br /><br /><br /><br />
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ================== Img box ================== */}
          <div className="hidden lg:block bg-blue-500 rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* ================== Sign up form ================== */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-[#32609f]"> account</span>
            </h3>

            <form action="" onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="name"
                  placeholder="Enter Your Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-500 text-[16px] leading-7
                  text-headingColor placeholder:text-black cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-500 text-[16px] leading-7
                  text-headingColor placeholder:text-black cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-500 text-[16px] leading-7
                  text-headingColor placeholder:text-black cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor="role-select"
                  className="text-[#424242] font-semibold text-[16px] leading-7"
                >
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    id="role-select"
                    className="text-[#424242] font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Customer</option>
                    <option value="doctor">Service Provider</option>
                  </select>
                </label>

                <label
                  htmlFor="gender-select"
                  className="text-[#424242] font-semibold text-[16px] leading-7"
                >
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    id="gender-select"
                    className="text-[#424242] font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-blue-600 flex items-center justify-center">
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png, .jpeg"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
                bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white leading-[30px] rounded-lg px-4 py-3"
                >
                  Sign Up
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link className="text-blue-600 font-medium ml-1" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
