import { IoGridOutline } from "react-icons/io5";
import { RiMenuSearchLine } from "react-icons/ri";
import { TiChartAreaOutline } from "react-icons/ti";
import { ThemeSwitcher } from "../../utils/index";
import { useIsMobile } from "../../utils/useIsMobile.jsx";
import { Input } from "./input.jsx";
import { TagQuery } from "./query-options.jsx";

const TopBar = ({
  scrolled,
  activePanel,
  searchTerm,
  setSearchTerm,
  handlePanelOpen,
  label,
}) => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="mt-2 p-2 flex items-center justify-between flex-wrap gap-2">
        <h3 className="font-Raleway font-bold text-[2rem] max-lg:hidden block">
          {label}
        </h3>

        <div className="flex    p-2 gap-2 border border-black rounded-2xl  max-lg:border-none">
          <TagQuery icon={<TiChartAreaOutline />} label={"Home"} />
          {isMobile ? null : (
            <TagQuery
              icon={<IoGridOutline />}
              label={"Grid"}
              handelClick={() => handlePanelOpen("grid")}
            />
          )}

          <TagQuery
            icon={<RiMenuSearchLine />}
            label={"Filter"}
            handelClick={() => handlePanelOpen("filter")}
          />
          <div className="border border-black rounded-xl">
            <ThemeSwitcher />
          </div>
        </div>

        {activePanel === "filter" && (
          <div className="flex items-center gap-2 mt-2 max-lg:mt-0 w-full max-w-sm">
            <Input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-1 border border-gray-400 rounded-md w-full bg-white dark:bg-gray-800 dark:text-white"
            />
            <button
              onClick={() => {
                setSearchTerm("");
                handlePanelOpen(null); // Close filter/search
              }}
              className="text-gray-600 dark:text-white text-xl hover:text-red-500"
            >
              ❌
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
