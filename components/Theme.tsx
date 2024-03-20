"use client";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Theme = () => {
  const { mode, setMode } = useTheme();

  const handleThemeMode = (mode: string) => () => {
    setMode(mode);
    localStorage.theme = mode;
  };

  return (
    <div className="flex-center">
      {mode !== "light" ? (
        <Button onClick={handleThemeMode("light")}>
          <Image src="/assets/icon-sun.svg" alt="moon" width={20} height={20} />
        </Button>
      ) : (
        <Button onClick={handleThemeMode("dark")}>
          <Image
            src="/assets/icon-moon.svg"
            alt="moon"
            width={20}
            height={20}
          />
        </Button>
      )}
    </div>
  );
};

export default Theme;
