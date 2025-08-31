import { ThemeProvider } from "next-themes";
import { useLocation } from "react-router-dom";
import { Footer, Navbar, NoteState, Routes } from "./utils/index.jsx";

function App() {
  const location = useLocation();

  // Hide navbar and footer on any "/dashboard" route

  const hideNavbar = ["/dashboard", "/addnumbers",'/successful-to-save-number'].some((path) =>
    location.pathname.startsWith(path)
  );
  const hideFooter = [
    "/dashboard",
    "/saved-numbers",
    "/addnumbers",
    "/create-an-account",
    "/login-your-account",
    '/successful-to-save-number'
  ].some((path) => location.pathname.startsWith(path));

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NoteState>
        <div className="bg-white dark:bg-bgColor">
          {!hideNavbar && <Navbar />}
          <Routes />
          {localStorage.getItem("token")
            ? console.log("token was found!")
            : console.log("please login!")}
        </div>
        {!hideFooter && <Footer />}
      </NoteState>
    </ThemeProvider>
  );
}

export default App;
