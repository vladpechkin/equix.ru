"use client";

import { ReactNode } from "react";
import { Box } from "../components/Box";
import { Col } from "../components/Flex";
import { Input } from "../components/Input";
import { Switch } from "../components/Switch";

interface LandingConfig {
  title: string;
  heading: string;
  description: string;
  action?: ReactNode;
  logo: ReactNode;
  routes: {
    href: string;
    label: string;
  }[];
  hero: ReactNode;
  appName: string;
  appOwnerName: string;
  supportsDarkTheme: boolean;
}

const config: LandingConfig = {
  title: "EQUIX — Не утруждайтесь созданием интерфейсов приложений.",
  heading: "Не утруждайтесь созданием интерфейсов приложений.",
  description:
    "Дизайн-система для быстрого и легкого создания дизайна и превращения его в рабочий сайт, мобильное или десктопное приложение.",
  logo: (
    <Box className="text-accent font-thin leading-none tracking-[8px] text-4xl h-10 items-center">
      EQUIX
    </Box>
  ),
  // action: (
  //   <Box href="/components" className="bg-accent text-light h-auto">
  //     Попробовать
  //   </Box>
  // ),
  routes: [
    { href: "/", label: "Главная" },
    { href: "/components", label: "Компоненты" },
    { href: "/docs/", label: "Документация" },
    { href: "/about", label: "О нас" },
  ],
  hero: (
    <Col className="border rounded p">
      <Input
        type="search"
        value=""
        onChange={() => ""}
        placeholder="Что ищем?"
      />
      <Box className="bg-accent text-light" onClick={() => ""}>
        Скрыть опции
      </Box>
      <menu className="border rounded overflow-hidden">
        <Box onClick={() => ""}>Показать открытые папки</Box>
        <Box onClick={() => ""}>Закрыть все</Box>
        <Box onClick={() => ""}>Закрыть сохраненные файлы</Box>
      </menu>
      <Switch
        value={true}
        label="Соглашаюсь с политикой конфиденциальности"
        onChange={() => ""}
      />
    </Col>
  ),
  appName: "EQUIX",
  appOwnerName: "ООО Эквикс",
  supportsDarkTheme: true,
};

export default config;
