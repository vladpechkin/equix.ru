"use client";

import { Col } from "../components";
import { Box } from "../components/Box";
import { Input } from "../components/Input";

const config = {
  title: "EQUIX — Не утруждайтесь созданием интерфейсов приложений.",
  heading: "Не утруждайтесь созданием интерфейсов приложений.",
  description:
    "Дизайн-система для быстрого и легкого создания дизайна и превращения его в рабочий сайт, мобильное или десктопное приложение.",
  logo: (
    <Box className="text-accent font-thin tracking-[8px] text-4xl">EQUIX</Box>
  ),
  action: (
    <Box href="/overview" className="bg-accent text-light h-auto">
      Узнать больше
    </Box>
  ),
  routes: [
    { href: "/", label: "Главная" },
    { href: "/overview", label: "Обзор" },
    { href: "/tryOut", label: "Попробовать" },
    { href: "/docs", label: "Документация" },
    { href: "/about", label: "О стартапе" },
  ],
  hero: (
    <Col className="bg-border rounded p">
      <Input
        type="search"
        value=""
        onChange={() => ""}
        placeholder="Что ищем?"
      />
      <Box className="bg-accent text-light" onClick={() => ""}>
        Скрыть опции
      </Box>
      <menu className="border border-border rounded overflow-hidden">
        <Box onClick={() => ""}>Показать открытые папки</Box>
        <Box onClick={() => ""}>Закрыть все</Box>
        <Box onClick={() => ""}>Закрыть сохраненные файлы</Box>
      </menu>
      <Input
        type="radio"
        options={[
          { id: "0", name: "Соглашаюсь с политикой конфиденциальности" },
        ]}
        value={{ id: "0", name: "Соглашаюсь с политикой конфиденциальности" }}
        onChange={() => ""}
      />
    </Col>
  ),
  siteName: "ООО Эквикс",
};

export default config;
