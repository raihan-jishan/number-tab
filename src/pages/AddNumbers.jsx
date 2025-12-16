import React, { useState, useRef } from "react";
import { Input } from "../components/ui/Input.jsx";
import { Label } from "../components/ui/label.jsx";
import { AddBtn } from "../components/ui/button.jsx";
import Tesseract from "tesseract.js"; // Import Tesseract.js for OCR

const AddNumbers = () => {
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const [step, setStep] = useState(1);
  const [imageUrl, setImageUrl] = useState(null); // Holds the captured image URL
  const [isCameraOpen, setIsCameraOpen] = useState(false); // Track camera status
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Handle Input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  // Handle submit (for adding contact)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Added:", note);
    alert("Successfully saved number!");
    setNote({ title: "", description: "", tag: "" });
  };

  // Handle camera opening
  const openCamera = () => {
    setIsCameraOpen(true);
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        alert("Error accessing camera: " + err);
      });
  };

  // Capture image from the camera
  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    // Convert the captured image to a URL
    const image = canvas.toDataURL("image/png");
    setImageUrl(image);

    // Perform OCR to extract text
    Tesseract.recognize(image, "eng", {
      logger: (m) => console.log(m), // Optional: See OCR progress
    }).then(({ data: { text } }) => {
      setNote({
        ...note,
        title: text, // Auto-fill name field with detected text
      });
      setIsCameraOpen(false); // Close camera after capture
    });
  };

  // Stop the camera stream
  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
  };

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-l from-green-400 via-green-900 to-green-900 flex items-center justify-center px-5 py-5">
      <div className="bg-Primary rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]">
        <div className="md:flex w-full">
          {/* Left content: Image */}
          <div className="md:block bg-black/10 w-1/2 py-10 px-10">
            <img
              src={imageUrl || "your-image-path"}
              alt="Add number illustration"
              className="w-[73%]"
            />
          </div>

          {/* Right content: Form */}
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-left mb-10 flex items-center justify-between">
              <h1 className="font-bold text-[2.5rem] font-Raleway text-gray-50">
                Add a New Contact
              </h1>
            </div>

            {/* Step 1: Name Input */}
            <form className="w-full max-w-lg space-y-6">
              <div>
                <Label label="Name" htmlFor="name" />
                <Input
                  type="text"
                  name="title"
                  value={note.title}
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
                  onChange={handleChange}
                  id="tag"
                  placeholder="Enter location or details"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl"
                />
              </div>

              {/* Camera Button */}
              {!isCameraOpen && (
                <button
                  type="button"
                  onClick={openCamera}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md"
                >
                  Open Camera
                </button>
              )}

              {/* Capture Image Button */}
              {isCameraOpen && (
                <div>
                  <video ref={videoRef} width="100%" height="auto" autoPlay />
                  <button
                    onClick={captureImage}
                    className="mt-4 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md"
                  >
                    Capture Image
                  </button>
                  <button
                    onClick={stopCamera}
                    className="mt-4 w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md"
                  >
                    Stop Camera
                  </button>
                </div>
              )}

              <div className="flex justify-center items-center mt-6">
                <AddBtn
                  label="Add Contact"
                  onClick={handleSubmit}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md"
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
