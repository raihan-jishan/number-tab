import { AiOutlineNumber } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import { FaAddressBook } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
export const navbarListData = [
  { id: 1, name: "Home", path: "/", icon: <CiHome size={28} /> },
  { id: 2, name: "About", path: "/about", icon: <FaAddressBook size={27} /> },
  {
    id: 3,
    name: "Addnumbers",
    path: "/addnumbers",
    icon: <FaBookBookmark size={27} />,
  },

  {
    id: 4,
    name: "numbers",
    path: "/numbers",
    icon: <AiOutlineNumber size={27} />,
  },
];
export const heroDetails = [
  {
    id: 1,
    mainpageTitle: "Save your important number's",
    description:
      "  save your all important numbers in the our webpage that isend-to-end-encrypted . And find that any time, any situations.In your hand.",
    navigationTitle: "save your note number",
    secondNavigationTitle: "view numbers",
  },
];
