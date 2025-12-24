import { UsersRound } from "lucide-react";
import { ChartArea } from "lucide-react";
import { CircleUser } from "lucide-react";
import { UserPlus } from "lucide-react";
import { House } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const links = [
    { icon: <House strokeWidth={2.2} />, label: "Home", path: "/" },
    { icon: <UsersRound />, label: "Contacts", path: "/saved-contacts" },
    { icon: <UserPlus />, label: "Add", path: "/add-contact" },
    { icon: <CircleUser />, label: "Profile", path: "/dashboard" },
  ];
  return (
    <div className="bg-Primary hidden max-lg:block fixed bottom-0 left-0 z-50 w-full h-16 bg-neutral-primary-soft border-t border-default">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {links.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              // className=""
              className={({ isActive }) =>
                isActive
                  ? "inline-flex text-green-400 font-bold font-Lato flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group"
                  : "inline-flex font-Lato flex-col items-center justify-center px-5 hover:bg-neutral-secondary-medium group"
              }
            >
              {item.icon}
              <span className="text-sm text-body group-hover:text-fg-brand">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
