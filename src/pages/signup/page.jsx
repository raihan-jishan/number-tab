import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupImage from "../../assets/signup.svg";
import { AuthBtn, Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";
import {
  FilePenLine,
  Home,
  LockKeyhole,
  Mail,
  User,
  UserRound,
} from "lucide-react";

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
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="flex flex-col items-center gap-6 p-6 rounded-lg bg-white shadow-lg transform transition-all hover:scale-105">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-4 border-t-indigo-500 rounded-full animate-spin-slow"></div>
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-100 tracking-wide">
            Waking up server... Please wait
          </p>
        </div>
      </div>
    );
  }

  // ✅ Normal Signup Form
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gradient-to-l from-Primary from-0% via-green-900 via-20% to-green-900 to-90% flex items-center justify-center px-5 py-5 ">
        <div className="bg-Primary  rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]">
          <div className="md:flex w-full">
            <div className="hidden md:block bg-black/10 w-1/2  py-10 px-10">
              <img
                src={SignupImage}
                alt="signp image was not found!"
                className="w-[73%]"
              />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-left mb-10 flex items-center justify-between">
                <h1 className="font-bold text-[2.5rem] font-Raleway text-gray-50">
                  SignUp
                </h1>

                <Link to={"/"} className="-mt-5">
                  <Home
                    size={30}
                    className="text-gray-500 hover:scale-95 transition-all  cursor-pointer"
                  />
                </Link>
              </div>
              <form action="" onSubmit={handleSubmit}>
                <div className="flex -mx-3">
                  <Input
                    For={"name"}
                    icon={<FilePenLine size={20} />}
                    placeholder={"Enter your full name..."}
                    label={"name"}
                    id={"name"}
                    name={"name"}
                    type={"text"}
                    onChange={onChange}
                  />
                </div>
                <div className="flex -mx-3">
                  <Input
                    For={"email"}
                    icon={<Mail size={20} />}
                    placeholder={"Enter email address..."}
                    id={"email"}
                    label={"email"}
                    name={"email"}
                    type={"email"}
                    onChange={onChange}
                  />
                </div>
                <div className="flex -mx-3">
                  <Input
                    For={"password"}
                    icon={<LockKeyhole size={20} />}
                    placeholder={"Enter password..."}
                    id={"password"}
                    name={"password"}
                    label={"password"}
                    type={"password"}
                    onChange={onChange}
                  />
                </div>
                <div className="flex  -mx-3">
                  <div className="flex items-center justify-center w-full px-3 mt-8">
                    <AuthBtn
                      icon={<User scale={20} />}
                      label={"Register Now"}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
