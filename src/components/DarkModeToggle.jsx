"use client";
import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== "undefined") {
      const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
      if (storedDarkMode !== null) {
        setDarkMode(storedDarkMode);
      } else {
        setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  return (
    <button
      className="absolute right-5 md:right-36 focus:outline-none transform hover:scale-110 anim"
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <FiSun
          className="text-yellow-500 transition-colors duration-500"
          size={24}
        />
      ) : (
        <FiMoon
          className="text-gray-900 dark:text-gray-100 transition-colors duration-500"
          size={24}
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
