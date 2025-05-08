import React, { useContext, useState } from "react";
import { LuBookMarked } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoveToAddSvg from "../assets/undraw_love-it_8pc0.svg";
import { AuthBtn } from "../components/ui/button.jsx";
import { DashHeading, Heading } from "../components/ui/heading.jsx";
import { Input } from "../components/ui/input.jsx";
import { Label } from "../components/ui/label.jsx";
import { AddnumberImage, AppLayout, Context, Login } from "../utils/index.jsx";
const AddNumbers = () => {
  const location = useLocation();
  const hideWhenDash = location.pathname.startsWith("/dashboard");
  const context = useContext(Context);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    toast("number added successfull!");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      {localStorage.getItem("token") ? (
        <AppLayout>
          {hideWhenDash ? (
            <DashHeading label={"Add contact"} textCenterize fontDefault />
          ) : (
            <Heading
              textSmall
              borderSide
              description={"Add contact"}
              MobilewidthFull
              widthFull
            />
          )}
          {/* forms */}
          <div className="flex w-full items-center justify-around m-5 max-lg:flex-col-reverse gap-10  mt-5 max-lg:m-2 ">
            {/* left content */}
            <form action="" className="mt-4">
              {/* 2 */}
              <div className="relative mb-6">
                <Label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-400"
                >
                  person name
                </Label>
                <Input
                  type="text"
                  name="title"
                  id="text"
                  variant={"addnumber"}
                  value={note.title}
                  onChange={onChange}
                  placeholder="Enter person name "
                  required
                />
              </div>
              <div className="relative mb-6">
                <Label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-400"
                >
                  contact number
                </Label>
                <Input
                  className="mt-2"
                  type="text"
                  name="description"
                  value={note.description}
                  onChange={onChange}
                  id="exampleFormControlInput3"
                  placeholder="  enter your contact number"
                  required
                />
              </div>
              {/* 3 */}
              <div className="relative mb-6">
                <Label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-400"
                >
                  person description
                </Label>
                <Input
                  type="text"
                  name="tag"
                  value={note.tag}
                  onChange={onChange}
                  id="exampleFormControlInput3"
                  placeholder="enter person description"
                  required
                  className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex items-center justify-center mt-5">
                  <AuthBtn
                    variant={"account-btn"}
                    label={"Save contact"}
                    onClick={handleClick}
                    iconLeft={<LuBookMarked size={25} />}
                  />
                </div>
              </div>
            </form>
            {/* close */}
            {/* right content */}
            <div className="m-5 ">
              <img
                src={hideWhenDash ? LoveToAddSvg : AddnumberImage}
                alt=""
                className={hideWhenDash ? "w-[14rem]" : "w-[20rem]"}
              />
            </div>
            {/* close */}
          </div>
        </AppLayout>
      ) : (
        <>
          <Login /> 
        </>
      )}
    </>
  );
};

export default AddNumbers;
