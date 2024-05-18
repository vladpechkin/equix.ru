import { FC, ReactNode, useCallback, useEffect } from "react";
import { Box } from "./Box";

interface Props {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  close?: () => void;
  className?: string;
}

export const Dialog: FC<Props> = ({
  title,
  children,
  close,
  isOpen,
  className,
}) => {
  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (close && event.key === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return isOpen ? (
    <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-50 flex overflow-y-auto z-20 items-center justify-center">
      <dialog
        className={`dark:bg-dark dark:text-light bg-light text-dark p-2 flex flex-col gap-4 min-w-[320px] w-full max-w-screen-sm overflow-y-auto rounded-lg ${
          className || ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex gap-4 justify-between items-center">
          <Box className="font-semibold">{title}</Box>
          <Box onClick={() => close && close()}>
            <i className="text-xl bi bi-x-lg"></i>
          </Box>
        </header>
        {children}
      </dialog>
    </div>
  ) : null;
};
