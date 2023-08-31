/*
    title: "App.js file"
    desc: "Main file for whole applications to manege all important applicational works " 
    date: 31 - 8 - 2023.
*/
// import all important files and modules
import Home from "./pages/Home.jsx";
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
import "./App.css"; // css file
import NotFound from "./pages/NotFound.jsx";
function App() {
  return (
    // wrapp whole application using NoteSate  and router from react-router-dom .
    <NoteState>
      <Router>
        {/* application nvabar */}
        <Navbar />
        {/* routes  */}
        <Routes>
          {/* home router */}
          <Route path="/" exact element={<Home />} />
          {/* about route */}
          <Route path="/about" exact element={<About />} />
          {/* numbers route */}
          <Route path="/numbers" exact element={<Numbers />} />
          {/* addnumber route */}
          <Route path="/addnumber" exact element={<AddNumber />} />
          {/* account route */}
          <Route path="/account" exact element={<Account />} />
          {/* old numbers route */}
          <Route path="/oldnumbers" exact element={<OldnumberList />} />
          {/* login route */}
          <Route path="/login" exact element={<Login />} />
          {/* 404 not found route  */}
          <Route path="*" exact element={<NotFound />} />
          {/* docs path */}
          <Route
            path="/docs/number-user-e4470374091274092"
            element={<Docspage />}
          />
        </Routes>
      </Router>
      {/* footer */}
      <Footer />
    </NoteState>
  );
}

export default App;
