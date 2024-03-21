import React, { useState } from "react";
import { FaRegAddressCard, FaRegUser } from "react-icons/fa";
import { MdLockOutline, MdMail } from "react-icons/md";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
  AccountInfo,
  AddButton,
  AppLayout,
  CreateAccountImage,
  LabelFeild,
  Typography,
} from "../modules/index.jsx";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const server = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`${server}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    // response -> covert json
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/success-to-create-an-account");
    } else {
      navigate("/faild-to-create-an-account");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <AppLayout>
      <Typography
        name={"create an account"}
        fontSize={'max-lg:text-2xl'}
        icon={<FaRegAddressCard size={40} />}
      />
      {/* forms */}
      <section className="flex items-center justify-between m-5 max-lg:flex-col-reverse  ">
        {/* left content */}
        <form className="mt-2" onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <input
              type="text"
              name="name"
              onChange={onChange}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-gray-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-gray-950 dark:border-gray-400 "
              placeholder="person name"
            />
            <LabelFeild
              name={"name"}
              icon={<FaRegUser size={35} />}
              forPurpose={"name"}
            />
          </div>
          {/* 2 */}
          <div className="relative mb-6">
            <input
              type="email"
              name="email"
              onChange={onChange}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-gray-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-gray-950 dark:border-gray-400"
              placeholder="email...."
            />
            <LabelFeild
              name={"email"}
              icon={<MdMail size={35} />}
              forPurpose={"email"}
            />
          </div>
          {/* 3 */}
          <div className="relative mb-6">
            <input
              type="password"
              name="password"
              onChange={onChange}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-gray-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-gray-950 dark:border-gray-400"
              placeholder="enter your password..."
            />
            <LabelFeild
              name={"password"}
              icon={<MdLockOutline size={35} />}
              forPurpose={"password"}
            />{" "}
          </div>
          <div className="relative mb-6">
            <div className="flex items-center justify-center mt-5">
              <AddButton
                name={"create account"}
                icon={<RiAccountPinBoxLine size="35" />}
                fontSize="xl"
                fontWeight="semibold"
                bg="bg-gray-400"
                rounded="full"
                width="full"
                className={"dark:text-gray-950"}
              />
            </div>
            <AccountInfo
              goFor={"Login"}
              inform={"allready have an account?"}
              path={"/login-your-account"}
            />
          </div>
        </form>
        {/* close */}
        {/* right content */}
        <div className="m-5">
          <img src={CreateAccountImage} alt="" className="w-[27rem]" />
        </div>
        {/* close */}
      </section>
    </AppLayout>
  );
};

export default Signup;
