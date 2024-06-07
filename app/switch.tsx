"use client";
import { useTheme } from "next-themes";
import { use, useEffect } from "react";

export default function Switch() {
  const { theme, setTheme } = useTheme();

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  useEffect(() => {
    if ((new Date()).getHours() >= 18 || (new Date()).getHours() < 6) {
      setTheme("dark");
    }
    else {
      setTheme("light");
    }
  }, []);
  
  return (
    <div className="switch-wrapper">
      <div className="sun"></div>
      <div className="toggle-wrapper">
        <input id="switch" type="checkbox" onChange={changeTheme} checked={theme == "dark"} />
        <label className="flex cursor-pointer gap-2" id="toggle" htmlFor="switch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <div className="moon"></div>
    </div>
  );
}