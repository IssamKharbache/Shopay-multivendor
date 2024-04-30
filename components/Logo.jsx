"use client";
import { useState, useEffect } from "react";
import darkLogo from "@/public/logoDark.svg";
import lightLogo from "@/public/logoLight.svg";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ className, linkClass }) => {
  //CHANGE THE LOGO DEPENDS ON THE THEME
  const { theme } = useTheme();
  const [isDarkLogo, setIsDarkLogo] = useState("");
  useEffect(() => {
    if (theme === "dark") {
      setIsDarkLogo(true);
    } else {
      setIsDarkLogo(false);
    }
  }, [theme]);

  return (
    <Link href="/" className={linkClass}>
      {isDarkLogo ? (
        <Image
          src={darkLogo}
          width={200}
          height={200}
          alt="Shopay logo"
          className={className}
        />
      ) : (
        <Image
          src={lightLogo}
          width={200}
          height={200}
          alt="Shopay logo"
          className={className}
        />
      )}
    </Link>
  );
};

export default Logo;
