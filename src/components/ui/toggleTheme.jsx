import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiSun } from "react-icons/ci";
import { FaDesktop, FaRegMoon } from "react-icons/fa";

const SwitchTheme = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoid hydration mismatch

  return (
    <div className="relative inline-block text-left">
      <div>
        <button className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none">
          {resolvedTheme === "dark" ? (
            <FaRegMoon className="h-5 w-5" />
          ) : resolvedTheme === "light" ? (
            <CiSun className="h-5 w-5" />
          ) : (
            <FaDesktop className="h-5 w-5" />
          )}
        </button>
        {/* Dropdown */}
        <div className="absolute z-10 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1 text-sm text-gray-700 dark:text-gray-100">
            <button
              onClick={() => setTheme("light")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              🌞 Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              🌙 Dark
            </button>
            <button
              onClick={() => setTheme("system")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              💻 System
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchTheme;
