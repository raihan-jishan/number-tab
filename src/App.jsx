import { useLocation } from "react-router-dom";
import { Footer, Navbar, NoteState, Routes } from "./utils/index.jsx";

function App() {
  const location = useLocation();

  // ✅ Define known routes (that are NOT 404)
  const knownPaths = [
    "/",
    "/dashboard",
    "/addnumbers",
    "/successful-to-save-number",
    "/create-an-account",
    "/login-your-account",
    "/saved-numbers",
    "/success-to-create-an-account",
    "/faild-to-create-an-account",
    "/faild-to-login-your-account",
  ];

  // ✅ Check if current path is NOT a known route → treat as 404
  const is404Page = !knownPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  // ✅ Define routes where Navbar should be hidden
  const hideNavbarRoutes = [
    "/dashboard",
    "/addnumbers",
    "/successful-to-save-number",
    "/create-an-account",
    "/success-to-login-your-account",
    "/success-to-create-an-account",
    "/already-have-an-account",
    "/faild-to-create-an-account",
    "/faild-to-login-your-account",
    "/wrong-credentials",
    "/account-not-found",
    "/add-contact",
    "/saved-contacts",
    "/signup",
    "/login",
    "/login-your-account",
    "/testing",
  ];

  // ✅ Define routes where Footer should be hidden
  const hideFooterRoutes = [
    "/dashboard",
    "/saved-numbers",
    "/addnumbers",
    "/create-an-account",
    "/login-your-account",
    "/successful-to-save-number",
    "/success-to-create-an-account",
    "/faild-to-create-an-account",
    "/faild-to-login-your-account",
    "/oldnumbers",
  ];

  // ✅ Final check for visibility
  const hideNavbar =
    hideNavbarRoutes.some((path) => location.pathname.startsWith(path)) ||
    is404Page;

  const hideFooter =
    hideFooterRoutes.some((path) => location.pathname.startsWith(path)) ||
    is404Page;

  return (
    <div className="bg-Primary text-white">
      <NoteState>
        {!hideNavbar && <Navbar />}
        <Routes />
        {localStorage.getItem("token")
          ? console.log("token was found!")
          : console.log("please login!")}
        {!hideFooter && <Footer />}
      </NoteState>
    </div>
  );
}

export default App;
