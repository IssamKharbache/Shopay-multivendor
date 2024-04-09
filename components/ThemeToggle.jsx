"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsMoon } from "react-icons/bs";
import { LuSun } from "react-icons/lu";

const ThemeToogle = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const changeTheme = () => {
    if (theme === "dark") {
      toast("You switched to light mood ", {
        duration: 4000,
        position: "bottom-center",
        // Styling
        style: {
          borderRadius: "10px",
          background: "#09081c",
          color: "#ffffff",
        },
        // Custom Icon
        icon: "☀️",
      });
    } else {
      toast("You switched to dark mode ", {
        duration: 4000,
        position: "bottom-center",
        // Styling
        style: {
          borderRadius: "10px",
          background: "#ffffff",
          color: "#000000",
        },
        // Custom Icon
        icon: "🌚",
      });
    }
  };
  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        onChange={changeTheme}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <div className="w-14 p-1">
        <div
          className={`p-0.5  rounded-full transition-all duration-300  ${
            theme === "dark" ? "-rotate-180 " : " translate-x-6 rotate-0"
          } `}
        >
          {theme === "dark" ? (
            <LuSun className="text-yellow-400 text-xl sm:text-2xl" />
          ) : (
            <BsMoon className="text-blue-400 text-xl sm:text-2xl" />
          )}
        </div>
      </div>
    </label>
  );
};

export default ThemeToogle;
