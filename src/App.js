import Home from "./pages/Home.jsx";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Nav.jsx";
import Footer from "./components/Footer";
import Docspage from "./components/docs/docs.js";
import Numbers from "./pages/Numbers.jsx";
import AddNumber from "./pages/AddNumber.jsx";
import Account from "./pages/Account.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import NoteState from "./context/NoteState.js";
import OldnumberList from "./components/OldnumberList/OldnumberList.jsx";
function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/numbers" exact element={<Numbers />} />
          <Route path="/addnumber" exact element={<AddNumber />} />
          <Route path="/account" exact element={<Account />} />
          <Route path="/oldnumbers" exact element={<OldnumberList />} />
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/docs/number-user-e4470374091274092"
            element={<Docspage />}
          />
        </Routes>
      </Router>
      <Footer />
    </NoteState>
  );
}

export default App; 
