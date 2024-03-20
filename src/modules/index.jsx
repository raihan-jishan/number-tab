import { NumberData } from "../Data/Data.jsx";
import Routes from "../Routes/Routes.jsx";
import AddnumberImage from "../assets/addnumbers.svg";
import CreateAccountImage from "../assets/createaccount.svg";
import FaildImage from "../assets/faild.svg";
import HeroImage from "../assets/hero.svg";
import LoginImage from "../assets/login.svg";
import SuccessImage from "../assets/success.svg";
import AppLayout from "../components/AppLayout/AppLayout.jsx";
import { AddButton, Button } from "../components/Button/Button.jsx";
import Card from "../components/Card/Card.jsx";
import FeaturesCard from "../components/FeaturesCard/FeaturesCard.jsx";
import AccountInfo from '../components/Infos/AcountInfos.jsx';
import Infos from '../components/Infos/Infos.jsx';
import LabelFeild from '../components/LabelFeild/LabelFeild.jsx';
import Brand from "../components/Navbar/Brand/Brand.jsx";
import NavLits from "../components/Navbar/NavLists/NavLits.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import ResultInfos from "../components/ResultInfos/ResultInfos.jsx";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher.jsx";
import Typography from "../components/Typography/Typography.jsx";
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
    About, AccountInfo, AddButton,
    AddNumbers,
    AddnumberImage,
    AppLayout,
    Brand,
    Button,
    Card,
    Context,
    CreateAccountImage,
    FaildImage,
    FeaturesCard,
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

