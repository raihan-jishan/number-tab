import React, { useState, useContext } from "react";
import { Input } from "../components/ui/Input.jsx";
import { Label } from "../components/ui/label.jsx";
import { AddBtn } from "../components/ui/button.jsx";
import Tesseract from "tesseract.js";
import AddNumberImage from "../assets/addnumbers.svg";
import { User, PhoneOutgoing, BookA } from "lucide-react";
import { Context } from "../utils/index.jsx"; // Correctly importing context
import { CopyMinus } from "lucide-react";

const AddNumbers = () => {
  const context = useContext(Context); // Accessing context
  if (!context) {
    console.error("Context not available");
    return null;
  }
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const [imageUrl, setImageUrl] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [ocrProcessing, setOcrProcessing] = useState(false);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
        setIsImageUploaded(true);
        extractTextFromImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image.");
    }
  };

  const extractTextFromImage = (image) => {
    setOcrProcessing(true);

    Tesseract.recognize(image, "eng+ben", {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        setNote({ ...note, title: text.trim() });
        setOcrProcessing(false);
      })
      .catch((err) => {
        console.error("Error during OCR:", err);
        setOcrProcessing(false);
      });
  };

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-l from-green-400 via-green-900 to-green-900 flex items-center justify-center px-5 py-5">
      <div className="bg-Primary rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]">
        <div className="md:flex w-full">
          <div className="md:block bg-black/10 w-1/2 py-10 px-10">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Uploaded"
                className="w-[73%] rounded-lg"
              />
            ) : (
              <div className="text-center text-gray-500">
                <img
                  src={AddNumberImage}
                  alt="Uploaded"
                  className="w-full rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <h1 className="font-bold text-[2.5rem] font-Raleway text-gray-50">
              Add a New Contact
            </h1>

            <form className="w-full max-w-lg space-y-6 mt-5" onSubmit={handleSubmit}>
              <div>
                <Label label="Name" htmlFor="name" />
                <Input
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
                <Input
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
                <Input
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

              <div className="mt-6">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl cursor-pointer"
                />
              </div>

              {ocrProcessing && (
                <div className="mt-4 text-center text-yellow-500">
                  Processing image... Please wait.
                </div>
              )}

              <div className="flex justify-center items-center mt-6">
                <AddBtn
                  label={"Add Contact"}
                  onClick={handleSubmit}
                  icon={<CopyMinus size={20} />}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNumbers;
