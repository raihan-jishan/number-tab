import SignupImage from "../../assets/createaccount.svg";
import { Button } from "../../components/ui/button.jsx";

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-5 bg-Primary">
      {/* Left Section: Text Content */}
      <div className="p-5">
        <h1 className="text-5xl font-Lato font-extrabold text-gray-300 max-w-xl capitalize tracking-tight p-3 ml-6">
          Save & Organize Your Contacts.
        </h1>

        {/* Signup Form */}
        <div className="mt-10 flex items-center justify-center flex-col space-y-4 w-[70%]">
          <Button
            label={"Continue with Google"}
            varient={"authenticate"}
            image={"https://cdn-icons-png.flaticon.com/128/2702/2702602.png"}
          />
          <Button
            label={"Continue with Apple"}
            varient={"authenticate"}
            image={"https://cdn-icons-png.flaticon.com/128/179/179309.png"}
          />

          {/* Create Account Button */}
          <Button varient={"authenticated"} label={"Create Account"} path={'/signup'} />

          {/* Terms of Service & Already have an account */}
          <div className="mt-5 text-center text-gray-300">
            <p className="text-sm">
              By signing up, you agree to our{" "}
              <a href="/terms" className="text-green-400 underline">
                Terms of Service
              </a>
              .
            </p>
            <div className="mt-10 flex flex-col">
              <div className="text-left">
                <p className="text-lg font-medium text-gray-400 tracking-tight">
                  Already have an account?
                </p>
              </div>
              <Button varient={"authenticate"} label={" Sign In"} path={'/login'} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex justify-center items-center lg:mt-0 mt-10 lg:ml-10">
        <img
          src={SignupImage}
          className="w-2/3 lg:w-[70%] object-contain"
          alt="Signup"
        />
      </div>
    </div>
  );
};

export default Signup;
