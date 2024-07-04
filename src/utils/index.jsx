import { NumberData } from "../Data/Data.jsx";
import AppLayout from "../Layout/Layout.jsx";
import Routes from "../Routes/Routes.jsx";
import LoginImage from "../assets/Login.svg";
import AddnumberImage from "../assets/addnumbers.svg";
import CreateAccountImage from "../assets/createaccount.svg";
import FaildImage from "../assets/faild.svg";
import HeroImage from "../assets/hero.svg";
import SuccessImage from "../assets/success.svg";
import { AddButton, Button } from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Features from '../components/Features.jsx';
import FeaturesCard from "../components/FeaturesCard.jsx";
import LabelFeild from '../components/LabelFeild.jsx';
import Brand from "../components/Navbar/Brand/Brand.jsx";
import NavLits from "../components/Navbar/NavLists/NavLits.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import ResultInfos from "../components/ResultInfos.jsx";
import ThemeSwitcher from "../components/ThemeSwitcher.jsx";
import Typography from "../components/Typography.jsx";
import AccountInfo from '../components/notifications/AcountInfos.jsx';
import Infos from '../components/notifications/Infos.jsx';
import { heroDetails, navbarListData } from "../constants/constants.jsx";
import NoteState from "../context/NoteState.jsx";
import Context from "../context/noteContext.jsx";
import About from "../pages/About.jsx";
import AddNumbers from "../pages/AddNumbers.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import NotFound from "../pages/NotFound.jsx";
import Numbers from "../pages/Numbers.jsx";
import Oldnumbers from "../pages/Oldnumbers.jsx";
import Signup from "../pages/Signup.jsx";
export {
    About, AccountInfo, AddButton, AddNumbers,
    AddnumberImage,
    AppLayout,
    Brand,
    Button,
    Card,
    Context,
    CreateAccountImage,
    FaildImage, Features, FeaturesCard,
    HeroImage,
    Home, Infos, LabelFeild, Login,
    LoginImage,
    NavLits,
    Navbar, NotFound, NoteState,
    NumberData,
    Numbers,
    Oldnumbers,
    ResultInfos,
    Routes,
    Signup, SuccessImage,
    ThemeSwitcher, Typography, heroDetails,
    navbarListData
};

