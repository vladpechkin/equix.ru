import { useRouter } from "next/router";
import { FC, ReactNode, useCallback, useEffect } from "react";
import { Box } from "./Box";

interface Props {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  close: () => void;
  className?: string;
}

export const Dialog: FC<Props> = ({
  title,
  children,
  close,
  isOpen,
  className,
}) => {
  const router = useRouter();

  useEffect(() => {
    // @ts-ignore
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        window.history.pushState(null, "", router.asPath);
        close();
      }
    });
  }, [router, close, isOpen]);

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
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
        className={`bg-white p-2 flex flex-col gap-4 min-w-[320px] w-full max-w-screen-sm overflow-y-auto rounded-lg ${
          className || ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex gap-4 justify-between items-center">
          <Box className="font-semibold">{title}</Box>
          <Box onClick={() => close()}>
            <i className="text-xl bi bi-x-lg"></i>
          </Box>
        </header>
        {children}
      </dialog>
    </div>
  ) : null;
};
