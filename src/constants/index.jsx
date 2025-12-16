import { CiHome, CiViewList } from "react-icons/ci";
import { FaRegHeart, FaUserLock } from "react-icons/fa";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdContacts } from "react-icons/md";
import { RiAccountPinCircleLine, RiGroupLine } from "react-icons/ri";
// ✅ First, import images at the top
import SuccessImage from "../assets/success.svg";
import FaildImage from "../assets/faild.svg";
import FaildLogin from "../assets/undraw_back-home_3dun.svg";
import WrongCredential from "../assets/undraw_page-eaten_b2rt.svg";
import SuccessToSave from "../assets/success-to-save.svg";
import {
  BookUser,
  ChartArea,
  CircleUser,
  House,
  IterationCw,
  LayoutDashboard,
  MessageCircleX,
  NotebookTabs,
  PhoneOutgoing,
  RotateCcw,
  User,
  UserPlus,
  UserRoundPlus,
  Webhook,
} from "lucide-react";
import { BsDash } from "react-icons/bs";
export const navLinkData = [
  { name: "Home", icon: <CiHome size={20} />, path: "#" },

  {
    name: "Features",

    path: "features",
    icon: <CiViewList size={20} />,
  },
  {
    name: "Pricing",

    path: "pricing",
    icon: <FaMoneyBillWheat size={20} />,
  },
  {
    name: "Reviews",

    path: "reviews",
    icon: <FaMoneyBillWheat size={20} />,
  },
];

// footer links
export const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "1on1 Coaching", href: "#" },
      { label: "Company Review", href: "#" },
      { label: "Accounts Review", href: "#" },
      { label: "HR Consulting", href: "#" },
      { label: "SEO Optimisation", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Meet the Team", href: "#" },
      { label: "Accounts Review", href: "#" },
    ],
  },
  {
    title: "Helpful Links",
    links: [
      { label: "Contact", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Live Chat", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Accessibility", href: "#" },
      { label: "Returns Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Hiring Statistics", href: "#" },
    ],
  },
];

// footer detail-links
export const footerDetailLinks = [
  { name: " Terms & Conditions" },
  { name: "Privacy Policy" },
  { name: "Cookies" },
];

// dashboard sidebar links
export const dashboardSidebarLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LuLayoutDashboard size={20} />,
  },
  {
    name: "All Contacts",
    path: "/saved-numbers",
    icon: <MdContacts size={20} />,
  },
  {
    name: "Add New Contact",
    path: "/dashboard/addnew-contact",
    icon: <IoPersonAddSharp size={20} />,
  },
  {
    name: "Favorite Contacts",
    path: "/dashboard/favourite_contact",
    icon: <FaRegHeart size={20} />,
  },
  {
    name: "Groups / Categories",
    path: "/dashboard/group&category",
    icon: <RiGroupLine size={20} />,
  },
  {
    name: "account settings",
    path: "/dashboard/account-settings",
    icon: <RiAccountPinCircleLine size={20} />,
    tag: "add-account",
  },
];

export const NotificationRoutes = [
  {
    id: 0,
    MessageName: "Success! to create your account!",
    MessageImage: SuccessImage,
    path: "/success-to-create-an-account",
    btnText: [
      {
        text: "Dashboard",
        icon: <ChartArea size={20} strokeWidth={3} />,
        path: "/dashboard",
      },
      {
        text: "Add Contact",
        icon: <UserRoundPlus strokeWidth={2.6} />,
        path: "/add-contact",
      },
    ],
  },
  {
    id: 1,
    MessageName: "Sorry! this account already exist ! please login",
    MessageImage: FaildImage,
    path: "/already-have-an-account",
    btnText: [
      {
        text: "Login",
        icon: <CircleUser size={20} strokeWidth={2} />,
        path: "/login",
      },
      {
        text: "Forget password",
        icon: <FaUserLock strokeWidth={2.6} />,
        path: "/forget-password",
      },
    ],
  },
  {
    id: 2,
    MessageName: "Sorry! your account is not exist ! please Signup",
    MessageImage: FaildLogin,
    path: "/account-not-found",
    btnText: [
      {
        text: "Signup",
        icon: <PhoneOutgoing size={20} strokeWidth={3} />,
        path: "/create-an-account",
      },
      { text: "Return", icon: <MessageCircleX strokeWidth={2.6} />, path: "/" },
    ],
  },
  {
    id: 3,
    MessageName: "Sorry! your input credentials are wrong",
    MessageImage: WrongCredential,
    path: "/wrong-credentials",
    btnText: [
      {
        text: "Try Again",
        icon: <PhoneOutgoing size={20} strokeWidth={3} />,
        path: "/login",
      },
      {
        text: "Signup",
        icon: <BookUser strokeWidth={2.6} />,
        path: "/create-an-account",
      },
    ],
  },
  {
    id: 4,
    MessageName: "Success! to login your account!",
    path: "/success-to-login-your-account",
    MessageImage: SuccessImage,
    btnText: [
      {
        text: "Dashboard",
        icon: <ChartArea size={20} strokeWidth={3} />,
        path: "/dashboard",
      },
      {
        text: "Add Contact",
        icon: <UserRoundPlus strokeWidth={2.6} />,
        path: "/add-contact",
      },
    ],
  },
  {
    id: 5,
    MessageName: "Sorry! to create an account!",
    MessageImage: FaildImage,
    path: "/faild-to-create-an-account",
    btnText: [
      {
        text: "Try Again",
        icon: <PhoneOutgoing size={20} strokeWidth={3} />,
        path: "/create-an-account",
      },
      { text: "Return", icon: <IterationCw strokeWidth={2.6} />, path: "/" },
    ],
  },
  {
    id: 6,
    MessageName: "Success! to save an number",
    MessageImage: SuccessToSave,
    path: "/successful-to-save-number",
    btnText: [
      {
        text: "Dashboard",
        icon: <ChartArea size={20} strokeWidth={3} />,
        path: "/dashboard",
      },
      {
        text: "Add Contact",
        icon: <UserRoundPlus strokeWidth={2.6} />,
        path: "/add-contact",
      },
    ],
  },
  {
    id: 7,
    MessageName: "Sorry! to login your account!",
    MessageImage: FaildImage,
    path: "/faild-to-login-your-account",
    btnText: [
      {
        text: "Try Again",
        icon: <PhoneOutgoing size={20} strokeWidth={3} />,
        path: "/login",
      },
      {
        text: "Signup",
        icon: <BookUser strokeWidth={2.6} />,
        path: "/create-an-account",
      },
    ],
  },
];
