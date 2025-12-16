import {
  Cloud,
  FileSliders,
  MonitorSmartphone,
  PencilRuler,
  TextSearch,
  Users,
} from "lucide-react";
import {
  AccessAnytimeIllustration,
  SaveIllustration,
  SignupIllustration,
} from "../assets";

export const overviewCard_Data = [
  {
    id: 0,
    imageUrl: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/647/647857.png"
        alt="image was not found!"
      />
    ),
    text: "Total 12  ",
    status: "contacts",
  },
  {
    id: 0,
    imageUrl: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/12617/12617999.png"
        alt="image was not found!"
      />
    ),
    text: " Personal 150",
    status: "",
  },
  {
    id: 0,
    imageUrl: (
      <img
        src="https://cdn-icons-png.flaticon.com/128/1478/1478927.png"
        alt="image was not found!"
      />
    ),
    text: "Business 56",
    status: "",
  },
];

// review data
export const reviewData = [
  {
    name: "John Smith",
    point: "01",
    review:
      "This contact-saving website is a lifesaver! It’s so easy to import and organize my contacts. Highly recommend!",
    twitter_handle: "@techlover123",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZkSEm6tkwEyPiz1kmz9BMlcBsbjl8q__XQ&s",
    rating: 4.5,
  },
  {
    name: "Maria Gonzalez",
    point: "02",
    review:
      "I love how simple this platform is. Syncing across devices makes managing my contacts seamless. Definitely worth it!",
    twitter_handle: "@maria_2025",
    image:
      "https://digital-resources-gamma.vercel.app/_next/image?url=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1689977968861-9c91dbb16049%3Fw%3D500%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGF2YXRhcnxlbnwwfHwwfHx8MA%253D%253D&w=640&q=75",
    rating: 4.0,
  },
  {
    name: "John Doe",
    point: "03",
    review:
      "A great tool for both personal and professional contact management. The cloud backup feature is a must-have!",
    twitter_handle: "@john_doe_23",
    image:
      "https://digital-resources-gamma.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1438761681033-6461ffad8d80%3Fw%3D500%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&w=640&q=75",
    rating: 4.7,
  },
  {
    name: "Alex Smith",
    point: "04",
    review:
      "Amazing platform for keeping my contacts organized. The user interface is clean and intuitive!",
    twitter_handle: "@alex_smith",
    image:
      "https://digital-resources-gamma.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1701615004837-40d8573b6652%3Fw%3D500%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MzB8fGF2YXRhcnxlbnwwfHwwfHx8MA%253D%253D&w=640&q=75",
    rating: 4.2,
  },
  {
    name: "Susan Lee",
    point: "05",
    review:
      "I’ve tried many contact managers, but this one stands out. Easy to use, and the sync feature is fantastic.",
    twitter_handle: "@susan_writes",
    image:
      "https://digital-resources-gamma.vercel.app/_next/image?url=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1689568126014-06fea9d5d341%3Fw%3D500%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixlib%3Drb-4.1.0%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%253D%253D&w=640&q=75",
    rating: 4.6,
  },
  {
    name: "Jack Koi",
    point: "06",
    review:
      "that was a super cool conatact number sharing application, without any limits. It will provide a cool modern ui expreince",
    twitter_handle: "@susan_writes",
    image:
      "https://randomuser.me/api/portraits/men/48.jpg",
    rating: 4.6,
  },
];

export const pricingCardData = [
  {
    title: "Basic Plan",
    description: "Perfect for individuals just starting to save contacts",
    price: "19/m",
    duration: "",
    highlight: "Key features",
    buttonText: "Start saving now",
    features: ["Save up to 100 contacts", "1 User", "Basic contact management"],
    priceId: "",
  },
  {
    title: "Premium Plan",
    description: "For those needing unlimited contacts and advanced features",
    price: "49",
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
    description:
      "Ideal for businesses that need powerful contact management tools",
    price: "99",
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

export const features = [
  {
    icon: <PencilRuler size={30} strokeWidth={2} />,
    label: "Seamless Contact Management",
    description:
      "Effortlessly store, edit, and access your contacts' details—phone numbers, emails, and more—with just a few taps in a simple, organized interface.",
  },
  {
    icon: <TextSearch size={30} strokeWidth={2} />,
    label: "Advanced Search & Filter",
    description:
      "Instantly locate any contact with powerful search and filter options. Search by name, number, email, or tags, making it easy to find what you need without scrolling endlessly.",
  },
  {
    icon: <MonitorSmartphone size={30} strokeWidth={2} />,
    label: "Sync Across Devices",
    description:
      "Keep your contact list up-to-date across all devices—smartphone, tablet, or computer. With cloud syncing, your contacts are always accessible and consistent.",
  },
  {
    icon: <Cloud size={30} strokeWidth={2.2} />,
    label: "Backup and Restore",
    description:
      "Safeguard your contacts with automatic cloud backups. In case of data loss, quickly restore your information to any device without missing a beat.",
  },
  {
    icon: <Users size={30} strokeWidth={2} />,
    label: "Integrate Communication Tools",
    description:
      "Call, text, or email directly from the app without switching to another messaging platform. Streamline your communication with built-in contact action options.",
  },
  {
    icon: <FileSliders size={30} strokeWidth={2} />,
    label: "Merge Duplicate Contacts",
    description:
      "Automatically detect and merge duplicate contacts to maintain a clean, clutter-free contact list, ensuring you only have one entry for each person.",
  },
];

export const worksInfo = [
  {
    id: "1",
    image: SignupIllustration,
    label: "Simple Sign-Up",
    description:
      "Get started by creating an account with your email or social media login. Once signed up, you can easily start adding contacts and syncing them across your devices for seamless management.",
  },
  {
    id: "2",
    image: SaveIllustration,
    label: "Save & Organize Contacts",
    description:
      "Add new contacts with just a few taps—store phone numbers, email addresses, and other details. Categorize them into groups (e.g., family, work) for easy access and better organization.",
  },
  {
    id: "3",
    image: AccessAnytimeIllustration,
    label: "Access Anytime, Anywhere",
    description:
      "Add new contacts with just a few taps—store phone numbers, email addresses, and other details. Categorize them into groups (e.g., family, work) for easy access and better organization.",
  },
];
