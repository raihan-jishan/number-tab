import React, { useContext, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi2";
import { IoIosAdd } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddButton,
  AddnumberImage,
  AppLayout,
  Context,
  Infos,
  LabelFeild,
  Login,
  Typography,
} from "../utils/index.jsx";
const AddNumbers = () => {
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {localStorage.getItem("token") ? (
        <AppLayout>
          <Typography
            name={"Add Numbers"}
            fontSize={"text-[2.7rem]"}
            marginTopMedium
          />
          {/* forms */}
          <section className="flex items-center justify-between m-5 max-lg:flex-col-reverse  ">
            {/* left content */}
            <form action="" className="mt-4">
              <div className="relative mb-6">
                <input
                  type="text"
                  name="title"
                  value={note.title}
                  onChange={onChange}
                  minLength={5}
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-gray-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-gray-950 dark:border-gray-400 "
                  id="exampleFormControlInput3"
                  placeholder="person name"
                  required
                />
                <LabelFeild
                  name={"name"}
                  forPurpose={"person name"}
                  icon={<FaRegUser size={28} />}
                />
              </div>
              {/* 2 */}
              <div className="relative mb-6">
                <input
                  type="text"
                  name="description"
                  value={note.description}
                  onChange={onChange}
                  minLength={5}
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-gray-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-gray-950 dark:border-gray-400"
                  id="exampleFormControlInput3"
                  placeholder="  number"
                  required
                />
                <LabelFeild
                  name={" number"}
                  forPurpose={"number"}
                  icon={<HiHashtag size={28} />}
                />
              </div>
              {/* 3 */}
              <div className="relative mb-6  ">
                <input
                  type="text"
                  name="tag"
                  value={note.tag}
                  onChange={onChange}
                  minLength={5}
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-gray-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-b-2 border-gray-950 dark:border-gray-400"
                  id="exampleFormControlInput3"
                  placeholder="person name"
                  required
                />
                <LabelFeild
                  name={" type"}
                  forPurpose={"person type"}
                  icon={<CiBookmark size={28} />}
                />
                <div className="flex items-center justify-center mt-5">
                  <AddButton
                    icon={<IoIosAdd size="35" />}
                    name={"Add number"}
                    fontSize="xl"
                    fontWeight="font-semibold"
                    roundedMedium
                    onClick={handleClick}
                  />
                </div>
              </div>
            </form>
            {/* close */}
            {/* right content */}
            <div className="m-5">
              <img src={AddnumberImage} alt="" className="w-[22rem]" />
            </div>
            {/* close */}
          </section>
        </AppLayout>
      ) : (
        <>
          <Login />
          <Infos name={"for add an number"} />
        </>
      )}
    </>
  );
};

export default AddNumbers;
