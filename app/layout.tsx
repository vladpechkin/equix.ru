import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { FC, ReactNode } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import config from "@/equix/Landing/config";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <html lang="ru">
      <head><link rel="icon" href="/favicon.svg" sizes="any" /></head>
      <body className={String(inter.className)}>{children}</body>
    </html>
  );
};

export async function generateMetadata() {
  return {
    title: config.heading,
    description: "bbb",
  };
}

export default Layout;
