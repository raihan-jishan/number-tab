import { useEffect, useRef, useState } from "react";
import { CiDesktop } from "react-icons/ci";
import { GoSun } from "react-icons/go";
import { TiWeatherPartlySunny } from "react-icons/ti";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const applyTheme = (theme) => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      systemPrefersDark
        ? root.classList.add("dark")
        : root.classList.remove("dark");
    }
  };

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
      >
        {theme === "dark" ? (
          <TiWeatherPartlySunny className="h-5 w-5" />
        ) : theme === "light" ? (
          <GoSun className="h-5 w-5" />
        ) : (
          <CiDesktop className="h-5 w-5" />
        )}
        <span className="ml-2 capitalize">{theme}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1 text-sm text-gray-700 dark:text-gray-100">
            <button
              onClick={() => {
                setTheme("light");
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              🌞 Light
            </button>
            <button
              onClick={() => {
                setTheme("dark");
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              🌙 Dark
            </button>
            <button
              onClick={() => {
                setTheme("system");
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              💻 System
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
