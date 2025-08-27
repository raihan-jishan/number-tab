import { CiHome, CiViewList } from "react-icons/ci";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdContacts } from "react-icons/md";
import { RiAccountPinCircleLine, RiGroupLine } from "react-icons/ri";
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
