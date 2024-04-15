"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handleChange() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  return (
    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" onClick={handleChange.bind(this)}>{theme}</Button>
  );
};

export default ThemeSwitch;
