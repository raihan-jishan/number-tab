import React, { useState, useRef } from "react";
import { Input } from "../components/ui/input.jsx";
import { Label } from "../components/ui/label.jsx";
import { AddBtn } from "../components/ui/button.jsx";
import AddNumberImage from "../assets/addnumbers.svg"; // Your image
import { NotebookTabs, UserRound, User, CircleArrowRight } from "lucide-react";
import Tesseract from "tesseract.js";

const AddNumbers = () => {
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const [step, setStep] = useState(1); // State to manage steps
  const [capturing, setCapturing] = useState(false);
  const [ocrResult, setOcrResult] = useState(""); // To store OCR result
  const cameraRef = useRef(null); // Camera reference for streaming

  // Handle input changes
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  // Handle next step
  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  // Handle previous step
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Handle form submission
  const handleClick = (e) => {
    e.preventDefault();
    if (!note.title.trim() || !note.description.trim() || !note.tag.trim()) {
      alert("Please complete all fields before submitting.");
      return;
    }
    // Add Note functionality (this would be your logic to add contact)
    console.log("Contact Added", note);

    setNote({ title: "", description: "", tag: "" });
    setTimeout(() => {
      alert("Successfully saved number!");
    }, 1000);
  };

  // Start camera capture to scan text
  const startCamera = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Camera access is not supported on this device or browser.");
      }

      setCapturing(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log("Camera stream:", stream); // Log the camera stream for debugging
      cameraRef.current.srcObject = stream;
      cameraRef.current.play();
      cameraRef.current.onloadedmetadata = () => {
        cameraRef.current.width = 640;
        cameraRef.current.height = 480;
      };
    } catch (error) {
      console.error("Camera error:", error); // Log any camera errors
      alert("Error accessing camera: " + error.message);
    }
  };

  // Stop camera capture
  const stopCamera = () => {
    const stream = cameraRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    cameraRef.current.srcObject = null;
    setCapturing(false);
  };

  // Capture an image from the camera
  const captureImage = async () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = cameraRef.current.videoWidth;
    canvas.height = cameraRef.current.videoHeight;
    ctx.drawImage(cameraRef.current, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL("image/png");

    // Use Tesseract to recognize text from the image
    Tesseract.recognize(image, "eng", {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        console.log("OCR Result:", text);
        setOcrResult(text); // Set the OCR result to the state
        setNote((prevState) => ({ ...prevState, title: text }));
        stopCamera(); // Stop the camera after capturing
      })
      .catch((err) => {
        console.error("OCR Error:", err);
        alert("Error capturing text");
        stopCamera(); // Stop the camera if an error occurs
      });
  };

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-l from-green-400 via-green-900 to-green-900 flex items-center justify-center px-5 py-5">
      <div className="bg-Primary -mt-16 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]">
        <div className="md:flex w-full">
          {/* Left content: Image */}
          <div className="md:block bg-black/10 w-1/2 py-10 px-10">
            <img
              src={AddNumberImage}
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
            {step === 1 && (
              <form className="w-full max-w-lg space-y-6">
                <div>
                  <Label label="Name" htmlFor="name" />
                  <Input
                    type="text"
                    name="title"
                    value={note.title}
                    onChange={onChange}
                    id="name"
                    placeholder="Enter name"
                    icon={<UserRound />}
                  />
                </div>

                {/* Button to trigger camera for text capture */}
                <div className="mt-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      startCamera();
                    }}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md transform transition-all duration-300 ease-in-out"
                  >
                    Use Camera to Capture Name
                  </button>
                </div>

                <div className="flex justify-center items-center mt-6">
                  <AddBtn
                    label={"Next"}
                    onClick={nextStep}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transform transition-all duration-300 ease-in-out"
                  />
                </div>
              </form>
            )}

            {/* Step 2: Phone Number Input */}
            {step === 2 && (
              <form className="w-full max-w-lg space-y-6">
                <div>
                  <Label label="Phone Number" htmlFor="phone" />
                  <Input
                    type="text"
                    name="description"
                    value={note.description}
                    onChange={onChange}
                    id="phone"
                    placeholder="+880-Enter number"
                    icon={<NotebookTabs />}
                  />
                </div>

                <div className="flex justify-between items-center mt-6">
                  <AddBtn
                    label={"Previous"}
                    onClick={prevStep}
                    className="w-full py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl shadow-md transform transition-all duration-300 ease-in-out"
                  />
                  <AddBtn
                    label={"Next"}
                    icon={<CircleArrowRight size={20} />}
                    onClick={nextStep}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transform transition-all duration-300 ease-in-out"
                  />
                </div>
              </form>
            )}

            {/* Step 3: Person Description Input */}
            {step === 3 && (
              <form onSubmit={handleClick} className="w-full max-w-lg space-y-6">
                <div>
                  <Label label="Person Description" htmlFor="tag" />
                  <Input
                    type="text"
                    name="tag"
                    value={note.tag}
                    onChange={onChange}
                    id="location"
                    placeholder="Enter person location or details"
                    required
                    icon={<User />}
                  />
                </div>

                <div className="flex justify-between items-center mt-6">
                  <AddBtn
                    label={"Previous"}
                    onClick={prevStep}
                    className="w-full py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl shadow-md transform transition-all duration-300 ease-in-out"
                  />
                  <AddBtn
                    label={"Add Contact"}
                    variant={"authenticate"}
                    onClick={handleClick}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transform transition-all duration-300 ease-in-out"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNumbers;
