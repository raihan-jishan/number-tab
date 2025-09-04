import { ThemeProvider } from "next-themes";
import { useLocation } from "react-router-dom";
import { Footer, Navbar, NoteState, Routes } from "./utils/index.jsx";

function App() {
  const location = useLocation();

  // Hide navbar and footer on any "/dashboard" route

  const hideNavbar = [
    "/dashboard",
    "/addnumbers",
    "/successful-to-save-number",
    "/create-an-account"
  ].some((path) => location.pathname.startsWith(path));
  const hideFooter = [
    "/dashboard",
    "/saved-numbers",
    "/addnumbers",
    "/create-an-account",
    "/login-your-account",
    "/successful-to-save-number",
    "/success-to-create-an-account",
    "/faild-to-create-an-account", 
    "/faild-to-login-your-account"
    
  ].some((path) => location.pathname.startsWith(path));

  return (
    <div
      className="bg-white dark:text-gray-50
dark:bg-bgColor"
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <NoteState>
          {!hideNavbar && <Navbar />}
          <Routes />
          {localStorage.getItem("token")
            ? console.log("token was found!")
            : console.log("please login!")}
          {!hideFooter && <Footer />}
        </NoteState>
      </ThemeProvider>
    </div>
  );
}

export default App;
