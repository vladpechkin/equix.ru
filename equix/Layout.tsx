import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { ErrorPage } from "./components/ErrorPage";
import { Details } from "./components/Details";
import { NavItem } from "./components/NavItem";
import config from "./config.json";
import { Route } from "./types";
import Image from "next/image";

const routes: Route[] = config.routes;

interface Props {
  children: ReactNode;
  className?: string;
  heading?: string;
  isLoading?: boolean;
}

export const Layout: FC<Props> = ({
  children,
  className,
  heading,
  isLoading,
}) => {
  const router = useRouter();

  useEffect(() => {
    !localStorage.getItem("accessToken") && router.push("/auth");
    router.pathname === "/404" && router.push("/");
  }, [router]);

  return children ? (
    <div className="flex w-full h-screen overflow-hidden">
      <nav className="shrink-0 bg-gray-900 text-white p-4 overflow-y-auto">
        <Link href="/" className="w-full">
          <Image
            src="/logo.svg"
            className="p-2"
            width={240}
            height={82}
            alt=""
          />
        </Link>
      </nav>
      <main
        className={`bg-white flex flex-col overflow-y-auto min-h-full w-full gap-2 ${
          className || ""
        }`}
      >
        {isLoading ? (
          <i className="bi bi-arrow-clockwise absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin text-3xl"></i>
        ) : (
          children
        )}
      </main>
    </div>
  ) : (
    <ErrorPage />
  );
};
