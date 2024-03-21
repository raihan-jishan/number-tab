import React, { useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdFileDownloadDone, MdLockOutline, MdMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  AccountInfo,
  AddButton,
  AppLayout,
  LoginImage,
  Typography,
} from "../modules/index.jsx";
const Login = () => {
  const server = import.meta.env.VITE_SERVER_URL;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${server}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    // response -> covert json
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/success-to-login-your-account");
    } else {
      navigate("/faild-to-login-your-account");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <AppLayout>
      <Typography
        name={"login your account"}
        icon={<CiBookmarkCheck size={40} />}
      />
      {/* forms */}
      <section className="flex items-center justify-between m-5 max-lg:flex-col-reverse  ">
        {/* left content */}
        <form action="" className="mt-4" onSubmit={handleSubmit}>
          {/* 2 */}
          <div className="relative mb-6">
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-gray-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-gray-950 dark:border-gray-400"
              id="email"
              placeholder="email"
            />
            <label
              htmlFor="email"
              className={
                "text-2xl  px-6 rounded-full pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-900 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-400 dark:peer-focus:text-primary flex gap-4  "
              }
            >
              <MdMail size={35} /> email
            </label>
          </div>
          {/* 3 */}
          <div className="relative mb-6">
            <input
              type="password"
              name="password"
              onChange={onChange}
              value={credentials.password}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-gray-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-gray-950 dark:border-gray-400"
              id="password"
              placeholder="password"
            />
            <label
              htmlFor="password"
              className="text-2xl  px-6 rounded-full pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-900 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-400 dark:peer-focus:text-primary flex gap-4 "
            >
              <MdLockOutline size={35} />
              password
            </label>
            <div className="flex items-center justify-center mt-5">
              <AddButton
                name={"login account"}
                icon={<MdFileDownloadDone size="35" />}
                fontSize="xl"
                fontWeight="semibold"
                bg="bg-gray-400"
                rounded="full"
                width="full"
                className={"dark:text-gray-950"}
              />
            </div>
          <AccountInfo 
          goFor={'Signup'}
          inform={" doesn't have an account?"}
          path={'/create-an-account'}
          />
          </div>
        </form>
        {/* close */}
        {/* right content */}
        <div className="m-5">
          <img src={LoginImage} alt="" className="w-80" />
        </div>
        {/* close */}
      </section>
    </AppLayout>
  );
};
export default Login;
