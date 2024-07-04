import { Navbar, NoteState, Routes } from "./utils/index.jsx";
function App() {
  const originalString = "Hello World";
  const charToInsert = "a";
  const indexToInsertAt = 5;

  const newString =
    originalString.slice(0,indexToInsertAt) +
    "a" +
    originalString.slice(indexToInsertAt);

  console.log(newString); // Outputs: "Helloa World"
  return (
    <NoteState>
      <div className="text-black dark:bg-gray-950  dark:text-gray-50 p-[1rem]">
        <Navbar />
        <Routes />
        {localStorage.getItem("token")
          ? console.log("token was founded!")
          : console.log("please login!")}
      </div>
    </NoteState>
  );
}
export default App;
