import { AiOutlineNumber } from "react-icons/ai";
import {
  AdvancedSearch,
  Automatic_Syncing,
  Easy_Import_Export,
  Marge_Duplicate,
  Multi_Language_Support,
  Privacy_Security,
  Real_Time_Update,
  Secure_Backup,
} from "../constants/svg-icon";
export const LogoData = [
  {
    name: "numberTab",
    icon: <AiOutlineNumber size={30} className="text-green-400" />,
  },
];
export const serviceCardData = [
  {
    id: 0,
    imageUrl: <Automatic_Syncing />,
    status: "01",
    title: "Automatic Syncing",
    description:
      "Automatically update and access your contacts on all devices, anytime, without manual effort. Stay connected effortlessly!",
    percentage: "95%",
  },
  {
    id: 1,
    imageUrl: <Real_Time_Update />,
    status: "02",
    title: "Real-Time Updates",
    description: "Get immediate updates whenever a contact is added or edited.",
    percentage: "95%",
  },
  {
    id: 2,
    imageUrl: <Secure_Backup />,
    status: "03",
    title: "Secure Backup",
    description: "Safely back up your contacts in the cloud.",
    percentage: "95%",
  },
  {
    id: 3,
    imageUrl: <Marge_Duplicate />,
    status: "04",
    title: "Merge Duplicates",
    description: "Automatically detect and merge duplicate contacts.",
    percentage: "95%",
  },
  {
    id: 4,
    imageUrl: <Easy_Import_Export />,
    status: "05",
    title: "Easy Import/Export",
    description: "Automatically detect and merge duplicate contacts.",
    percentage: "95%",
  },
  {
    id: 5,
    imageUrl: <AdvancedSearch />,
    status: "06",
    title: " Advanced Search & Filters",
    description:
      "Find contacts quickly with powerful search, filters, and sorting options.",
    percentage: "95%",
  },
  {
    id: 6,
    imageUrl: <Privacy_Security />,
    status: "07",
    title: " Privacy & Security",
    description:
      "End-to-end encryption ensures your contact data stays safe and private.",
    percentage: "95%",
  },
  {
    id: 7,
    imageUrl: <Multi_Language_Support />,
    status: "08",
    title: "  Multi-Language Support",
    description:
      "Use the app in multiple languages for a seamless global experience.",
    percentage: "95%",
  },
];

export const overviewCard_Data = [
   {
    id:0,
    imageUrl: <img src="https://cdn-icons-png.flaticon.com/128/647/647857.png" alt="image was not found!" />,
    text:'Total 12  ',
    status:'contacts',
   },
   {
    id:0,
    imageUrl: <img src="https://cdn-icons-png.flaticon.com/128/12617/12617999.png" alt="image was not found!" />,
    text:' Personal 150',
    status:'',
   },
   {
    id:0,
    imageUrl: <img src="https://cdn-icons-png.flaticon.com/128/1478/1478927.png" alt="image was not found!" />,
    text:'Business 56',
    status:'',
   },
]

// review data
export const reviewData = [
  {
    name: "John Smith",
    point:'01',
    review: "This contact-saving website is a lifesaver! It’s so easy to import and organize my contacts. Highly recommend!",
    twitter_handle: "@techlover123",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZkSEm6tkwEyPiz1kmz9BMlcBsbjl8q__XQ&s",
    rating: 4.5
  },
  {
    name: "Maria Gonzalez",
    point:'02',
    review: "I love how simple this platform is. Syncing across devices makes managing my contacts seamless. Definitely worth it!",
    twitter_handle: "@maria_2025",
    image: " ",
    rating: 4.0
  },
  {
    name: "John Doe",
    point:'03',
    review: "A great tool for both personal and professional contact management. The cloud backup feature is a must-have!",
    twitter_handle: "@john_doe_23",
    image: " ",
    rating: 4.7
  },
  {
    name: "Alex Smith",
    point:'04',
    review: "Amazing platform for keeping my contacts organized. The user interface is clean and intuitive!",
    twitter_handle: "@alex_smith",
    image: " ",
    rating: 4.2
  },
  {
    name: "Susan Lee",
    point:'05',
    review: "I’ve tried many contact managers, but this one stands out. Easy to use, and the sync feature is fantastic.",
    twitter_handle: "@susan_writes",
    image: " ",
    rating: 4.6
  }
]

// pricing card data 
export const pricingCardData = [
  {
    title: "Basic Plan",
    description: "Perfect for individuals just starting to save contacts",
    price: "$19/m",
    duration: "",
    highlight: "Key features",
    buttonText: "Start saving now",
    features: ["Save up to 100 contacts", "1 User", "Basic contact management"],
    priceId: "",
  },
  {
    title: "Premium Plan",
    description: "For those needing unlimited contacts and advanced features",
    price: "$49",
    duration: "month",
    highlight: "Key features",
    buttonText: "Upgrade to Premium",
    features: [
      "Unlimited contacts",
      "5 Users",
      "Advanced filtering and sorting",
      "Priority customer support",
    ],
    priceId: "price_1OYxkqFj9oKEERu1KfJGWxgN",
  },
  {
    title: "Business Plan",
    description: "Ideal for businesses that need powerful contact management tools",
    price: "$99",
    duration: "month",
    highlight: "Everything in Premium, plus",
    buttonText: "Upgrade to Business",
    features: [
      "Unlimited contacts",
      "Unlimited Users",
      "Custom branding",
      "24/7 Premium support",
      "Team collaboration tools",
    ],
    priceId: "price_1OYxkqFj9oKEERu1NbKUxXxN",
  },
];

