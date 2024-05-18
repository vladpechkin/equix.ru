import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { FC, ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <html lang="ru">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
      </head>
      <body className={String(inter.className)}>{children}</body>
    </html>
  );
};

export const metadata: Metadata = {
  title: "EQUIX — Не утруждайтесь созданием интерфейсов приложений.",
  description:
    "Дизайн-система для быстрого и легкого создания дизайна и превращения его в рабочий сайт, мобильное или десктопное приложение.",
};

export default RootLayout;
