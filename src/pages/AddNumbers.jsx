import React, { useState, useRef, useEffect } from "react";

const AddNumbers = () => {
  const cameraRef = useRef(null); // Reference to the video element
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const [step, setStep] = useState(1); // State to manage steps

  const startCamera = async () => {
    try {
      // Check if getUserMedia is supported
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Your browser does not support camera access.");
      }

      // Request access to the camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      // Check if cameraRef.current is available
      if (cameraRef.current) {
        cameraRef.current.srcObject = stream; // Assign the camera stream to the video element
        cameraRef.current.play();
        cameraRef.current.onloadedmetadata = () => {
          cameraRef.current.width = 640;
          cameraRef.current.height = 480;
        };
      } else {
        throw new Error("Video element not found.");
      }

      console.log("Camera access granted.");
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Error accessing the camera: " + error.message);
    }
  };

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

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    // Only call startCamera when the component mounts
    startCamera();
  }, []);

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-l from-green-400 via-green-900 to-green-900 flex items-center justify-center px-5 py-5">
      <div className="bg-Primary -mt-16 rounded-3xl shadow-xl w-full overflow-hidden max-w-[1000px]">
        <div className="md:flex w-full">
          {/* Left content: Image */}
          <div className="md:block bg-black/10 w-1/2 py-10 px-10">
            <img
              src="your-image-path"
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

            {/* Camera Stream (hidden from view) */}
            <div className="hidden">
              <video ref={cameraRef}></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNumbers;
