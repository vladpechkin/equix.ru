import { Box } from "../components/Box";

export default {
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
  hero: <img className="object-cover" src="intro.png" alt="" />,
  siteName: "ООО Эквикс",
};
