import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { toast } from "sonner";
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

  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
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
            <BsMoon className="text-blue-900 text-xl sm:text-2xl" />
          )}
        </div>
      </div>
    </label>
  );
};

export default ThemeToogle;
