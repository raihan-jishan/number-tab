import React, { useState, useContext } from "react";
import { Input } from "../components/ui/input.jsx";
import { Label } from "../components/ui/label.jsx";
import { AddBtn } from "../components/ui/button.jsx";
import AddNumberImage from "../assets/addnumbers.svg";
import { User, PhoneOutgoing, BookA } from "lucide-react";
import { Context } from "../utils/index.jsx";
import { CopyMinus } from "lucide-react";
import { Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextArea from "../components/ui/textarea.jsx";
import { BackpackIcon } from "lucide-react";
import { ArrowLeft } from "lucide-react";

const AddNumbers = () => {
  const context = useContext(Context); // Accessing context
  if (!context) {
    console.error("Context not available");
    return null;
  }
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note.title || !note.description || !note.tag) {
      alert("Please fill in all fields.");
      return;
    }

    // Save the note if all fields are filled
    addNote(note.title, note.description, note.tag);

    // Navigate to the success page after saving
    navigate("/successful-to-save-contact");

    // Clear the form after successful save
    setNote({ title: "", description: "", tag: "" });
  };

  return (
    <div
      className="min-w-screen min-h-screen max-lg:min-h-min max-lg:min-w-min
                bg-Primary 
                lg:bg-gradient-to-l lg:from-green-400 lg:via-green-900 lg:to-green-900
                flex items-center justify-center px-5 max-lg:-mt-5 py-5"
    >
      <div className="bg-Primary rounded-sm shadow-xl w-full overflow-hidden max-w-[1000px] max-lg:-mt-[3.5rem]  ">
        <div className="md:flex w-full">
          <div className="md:block bg-black/10 w-1/2 max-lg:w-[90%] py-10 px-10">
            <div className="text-center text-gray-500">
              <img
                src={AddNumberImage}
                alt="Uploaded"
                className="w-full rounded-lg max-lg:hidden"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 py-10 px-5 max-lg:px-0 max-lg:py-8 md:px-10 max-lg:-mt-12 ">
            <div className="max-lg:flex max-lg:items-center max-lg:gap-5">
              <Link to={"/saved-contacts"}>
                {" "}
                <ArrowLeft strokeWidth={2} className="hidden max-lg:block" />
              </Link>
              <h1 className="font-bold text-[2.5rem] max-lg:text-[1.5rem] font-Raleway text-gray-50">
                Add New Contact
              </h1>
            </div>

            <form
              className="w-full max-w-lg space-y-6 mt-5 max-lg:mt-14"
              onSubmit={handleSubmit}
            >
              <div>
                <Label label="Name" htmlFor="name" />
                <TextArea
                  type="text"
                  name="title"
                  value={note.title}
                  icon={<User size={22} strokeWidth={2.5} />}
                  onChange={handleChange}
                  id="name"
                  placeholder="Enter name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl"
                />
              </div>

              <div>
                <Label label="Phone Number" htmlFor="phone" />
                <TextArea
                  type="text"
                  name="description"
                  value={note.description}
                  icon={<PhoneOutgoing size={20} strokeWidth={2.5} />}
                  onChange={handleChange}
                  id="phone"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl"
                />
              </div>

              <div>
                <Label label="Person Description" htmlFor="tag" />
                <TextArea
                  type="text"
                  name="tag"
                  value={note.tag}
                  icon={<BookA size={20} strokeWidth={2.5} />}
                  onChange={handleChange}
                  id="tag"
                  placeholder="Enter location or details"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl"
                />
              </div>

              <div className="mt-6 p-2  w-[95%] text-gray-400  border text-center flex items-center justify-center mx-auto gap-2 font-medium">
                <Camera className="text-gray-400" />
                <a href="https://www.google.com/?olud">Open Scanner</a>
              </div>

              <div className="flex justify-center items-center mt-3  ">
                <AddBtn label={"Add Contact"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNumbers;
