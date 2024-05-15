import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { FC } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EQUIX — Не утруждайтесь созданием интерфейсов приложений.",
  description:
    "Дизайн-система для быстрого и легкого создания дизайна и превращения его в рабочий сайт, мобильное или десктопное приложение.",
};

interface Props {
  children: React.ReactNode;
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
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
