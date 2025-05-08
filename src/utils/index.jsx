import { NumberData } from "../Data/Data.jsx";
import AppLayout from "../Layout/Layout.jsx";
import Routes from "../Routes/Routes.jsx";
import LoginImage from "../assets/Login.svg";
import AddnumberImage from "../assets/addnumbers.svg";
import FaildImage from "../assets/faild.svg";
import SuccessImage from "../assets/success.svg";
 
import Feature from "../components/Feature.jsx";
import FeaturesCard from "../components/FeaturesCard.jsx";
import LabelFeild from "../components/LabelFeild.jsx";
import Footer from '../components/shared/footer.jsx';

import ResultInfos from "../components/ResultInfos.jsx";
import ThemeSwitcher from "../components/ThemeSwitcher.jsx";
import Navbar from "../components/shared/navbar.jsx";
import { heroDetails, navbarListData } from "../constants/constants.jsx";
import NoteState from "../context/NoteState.jsx";
import Context from "../context/noteContext.jsx";
import AddNumbers from "../pages/AddNumbers.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import NotFound from "../pages/NotFound.jsx";
import Numbers from "../pages/Numbers.jsx";
import Oldnumbers from "../pages/Oldnumbers.jsx";
import Signup from "../pages/Signup.jsx";
export {
    AddnumberImage,
    AddNumbers,
    AppLayout,

    Context,
    FaildImage,
    Feature,
    FeaturesCard, Footer, heroDetails,

    Home,
    LabelFeild,
    Login,
    LoginImage,
    Navbar,
    navbarListData,
    NoteState,
    NotFound,
    NumberData,
    Numbers,
    Oldnumbers,
    ResultInfos,
    Routes,
    Signup,
    SuccessImage,
    ThemeSwitcher
};

