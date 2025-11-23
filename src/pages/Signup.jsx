import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupImage from "../assets/createaccount.svg";
import { AuthBtn } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { Label } from "../components/ui/label.jsx";
import { AppLayout } from "../utils/index.jsx";
import { LockKeyhole, Mail, UserRound } from "lucide-react";
import { MdPassword } from "react-icons/md";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // ✅ loader state
  const server = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { name, email, password } = credentials;
      const response = await fetch(`${server}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        // ✅ account created
        localStorage.setItem("token", json.authtoken);
        navigate("/success-to-create-an-account");
      } else if (
        json.error &&
        json.error.toLowerCase().includes("already exist") // ✅ fixed check
      ) {
        // ✅ redirect to "already have account"
        navigate("/already-have-an-account");
      } else {
        // ❌ general failure
        navigate("/faild-to-create-an-account");
      }
    } catch (error) {
      console.error("Server not responding:", error);
      navigate("/faild-to-create-an-account");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // ✅ Loader Screen
  if (loading) {
    return (
      <AppLayout className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Waking up server... Please wait
          </p>
        </div>
      </AppLayout>
    );
  }

  // ✅ Normal Signup Form
  return (
    <AppLayout className="mt-40 max-lg:mt-2">
      <div className="flex items-start justify-start ml-28 max-lg:ml-0">
        <h1 className="text-black dark:text-gray-300 text-4xl max-lg:text-3xl font-OpenSans flex gap-2 ">
          SignUp
        </h1>
      </div>

      <div className="flex w-full items-center justify-around m-5 max-lg:m-0  max-lg:flex-col-reverse gap-10 mt-2">
        {/* left content */}
        <form
          action=""
          className="mt-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          {/* name */}
          <div className="relative mb-6">
            <Label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-400"
            >
              name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              onChange={onChange}
              placeholder="Enter your name"
              className="mt-2 w-full"
              icon={<UserRound className="w-6 h-6" />}
            />
          </div>

          {/* email */}
          <div className="relative mb-6">
            <Label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-400"
            >
              email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={onChange}
              placeholder="Enter your email"
              className="mt-2 w-full"
              icon={<Mail className="w-6 h-6" />}
            />
          </div>

          {/* password */}
          <div className="relative mb-6">
            <Label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-400"
            >
              password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={onChange}
              placeholder="Enter your password"
              className="mt-2 w-full"
              icon={<LockKeyhole className="w-6 h-6" />}
            />

            <div className="mt-5 w-full flex justify-center">
              <AuthBtn variant="account-btn" label="Create Account" />
            </div>

            <div className="mt-4 flex items-center gap-1">
              <Label label={"Already have an account?"} />
              <Link
                to={"/login-your-account"}
                className="text-[1.1rem] text-blue-600 underline hover:text-blue-600/80"
              >
                Login
              </Link>
            </div>
          </div>
        </form>

        {/* right content */}
        <div className="m-5 flex justify-center">
          <img
            src={SignupImage}
            alt="Signup"
            className="w-[25rem] max-w-full h-auto"
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default Signup;
