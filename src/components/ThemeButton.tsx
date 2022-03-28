import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

export const ThemeButton = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  const { resolvedTheme, setTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      {mounted && (
        <button
          aria-label="toggle-dark-mode"
          type="button"
          className="md:relative inline-block px-2 py-2 text-slate-500 dark:text-slate-300 rounded-md focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700 cursor-pointer"
          onClick={toggle}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      )}
    </div>
  );
};
