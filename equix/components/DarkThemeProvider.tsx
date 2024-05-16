import { useRouter } from "next/navigation";
import { FC, ReactNode, useEffect, useState } from "react";
import { Box } from "./Box";

interface Props {
  children: ReactNode;
}

export const DarkThemeProvider: FC<Props> = (props) => {
  const { children } = props;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isDarkThemeSelected = localStorage.getItem("dark-theme");
    if (
      isDarkThemeSelected === "true" ||
      (isDarkThemeSelected === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("dark");
    }
    if (isDarkThemeSelected === "false") {
      document.body.classList.remove("dark");
    }
    setIsLoading(false);
  }, []);
  
  return !isLoading ? children : null;
};

export const DarkThemeToggle = () => {
  const storedValue = localStorage.getItem("dark-theme");
  const [isDarkThemeSelected, setIsDarkThemeSelected] = useState(
    storedValue === "true"
  );

  return (
    <Box
      onClick={() => {
        if (isDarkThemeSelected) {
          document.body.classList.remove("dark");
        } else {
          document.body.classList.add("dark");
        }
        localStorage.setItem("dark-theme", `${!isDarkThemeSelected}`);
        setIsDarkThemeSelected(!isDarkThemeSelected);
      }}
    >
      {isDarkThemeSelected ? "Светлая тема" : "Темная тема"}
    </Box>
  );
};
