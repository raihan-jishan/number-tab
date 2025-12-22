import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../assets/Login.svg";
import { AuthBtn, Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";
import { AppLayout } from "../../utils/index.jsx";
import { Home, LockKeyhole, Mail, User } from "lucide-react";

const Login = () => {
  const server = import.meta.env.VITE_SERVER_URL;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // ✅ loader state
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loader
    try {
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

      const json = await response.json();
      console.log(json);

      if (json.success) {
        // ✅ Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/success-to-login-your-account");
      } else {
        // ✅ Redirect based on backend error
        if (json.error?.toLowerCase().includes("not found")) {
          navigate("/account-not-found"); // user doesn’t exist
        } else if (json.error?.toLowerCase().includes("invalid")) {
          navigate("/wrong-credentials"); // wrong password
        } else {
          navigate("/faild-to-login-your-account"); // general failure
        }
      }
    } catch (error) {
      console.error("Server not responding:", error);
      navigate("/faild-to-login-your-account");
    } finally {
      setLoading(false); // stop loader
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
            Logging in... Please wait
          </p>
        </div>
      </AppLayout>
    );
  }

  // ✅ Normal Login Form
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gradient-to-l from-Primary from-0% via-green-900 via-20% to-green-900 to-90% flex items-center justify-center px-5 py-5 ">
        <div className="bg-Primary  rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]">
          <div className="md:flex w-full">
            <div className="hidden md:block bg-black/10 w-1/2  py-10 px-10">
              <img
                src={LoginImage}
                alt="signp image was not found!"
                className="w-[73%]"
              />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-left mb-10 flex items-center justify-between">
                <h1 className="font-bold text-[2.5rem] font-Raleway text-gray-50">
                  Wellcome! Back
                </h1>

                <Link to={"/"} className="-mt-5">
                  <Home
                    size={30}
                    className="text-gray-500 hover:scale-95 transition-all  cursor-pointer"
                  />
                </Link>
              </div>
              <form action="" onSubmit={handleSubmit}>
                <div className="flex -mx-3  ">
                  <Input
                    For={"email"}
                    icon={<Mail size={20} />}
                    placeholder={"Enter email address..."}
                    id={"email"}
                    label={"email"}
                    value={credentials.email}
                    name={"email"}
                    type={"email"}
                    onChange={onChange}
                  />
                </div>
                <div className="flex -mx-3 mt-5  ">
                  <Input
                    For={"password"}
                    value={credentials.password}
                    icon={<LockKeyhole size={20} />}
                    placeholder={"Enter password..."}
                    id={"password"}
                    name={"password"}
                    label={"password"}
                    type={"password"}
                    onChange={onChange}
                  />
                </div>

                <div className="flex items-end justify-end -mx-3">
                  <span className="text-gray-300 font-Comfortaa cursor-pointer">
                    forget password?
                  </span>
                </div>
                <div className="flex  -mx-3">
                  <div className="flex items-center justify-center w-full px-3 mt-8">
                    <AuthBtn label={"Login Now"} icon={<User />} mobileCustomPx={'px-16'} />
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

export default Login;
