import React, { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { TiWeatherPartlySunny } from "react-icons/ti";
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);

  // dark & light mode
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button onClick={handleThemeSwitch}>
      {theme === "dark" ? (
        <h1>
          <GoSun
            size="28"
            className="text-zinc-50  dark:text-zinc-400 hover:scale-95 transition-all bg-zinc-900"
          />
        </h1>
      ) : (
        <h1>
          {" "}
          <TiWeatherPartlySunny size={28} />{" "}
        </h1>
      )}
    </button>
  );
};

export default ThemeSwitcher;
