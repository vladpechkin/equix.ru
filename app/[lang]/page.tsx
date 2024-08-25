"use client";

import Image from "next/image";

import { LandingPage } from "@/equix/Landing/LandingPage";
import { Box, Card } from "@/equix/components/Box";
import { Col, Row } from "@/equix/components/Flex";
import { Icon } from "@/equix/components/Icon";
import templatesData from "./templates/data";
import { BannerSection } from "../components/BannerSection";

const features = [
  {
    name: "Кроссплатформенность",
    description:
      "Cоздавайте веб-приложения и ПО для любых платформ - Android, IOS, Windows, Linux, MacOS, IpadOS.",
    iconName: "windows",
    href: "/docs/platforms",
  },
  {
    name: "Универсальность",
    description:
      "Создавайте из заготовок приложения всех основных типов - лендинг, интернет-магазин, новостной портал, СУБД.",
    iconName: "window-stack",
    href: "/components",
  },
  {
    name: "Производительность",
    description:
      "Получите преимущества самых современных технологий - скорость, функциональность и отказоустойчивость.",
    iconName: "speedometer",
    href: "/docs/base",
  },
  {
    name: "Комфорт использования",
    description:
      "Пользуйтесь с комфортом - об опыте пользователей (UX) и разработчиков (DX) мы позаботились.",
    iconName: "emoji-smile",
    href: "/docs/ux",
  },
  {
    name: "Локализация",
    description:
      "Легко и быстро переводите приложения на разные языки, а как пользователь - переключайтесь между ними.",
    iconName: "translate",
    href: "/docs/localization",
  },
  {
    name: "Доступность",
    description:
      "Без усилий предоставляйте себе и другим людям с ограниченными возможностями качественные сервисы.",
    iconName: "universal-access-circle",
    href: "/docs/accessibility",
  },
  {
    name: "Поддержка печати",
    description:
      "Легко, качественно и без искажений печатайте текстовые страницы и документы, экономя при этом ресурсы принтера.",
    iconName: "printer",
    href: "/docs/printing",
  },
  {
    name: "Разработка без кода",
    description:
      "Создавайте и настраивайте страницы без знаний кода - редактируя текстовые файлы форматов Markdown и JSON.",
    iconName: "file-earmark-text",
    href: "/docs/markdown",
  },
  {
    name: "Поддержка на всех этапах",
    description:
      "Обращайтесь за помощью 24/7, или вовсе поручите всю разработку нам - на выгодных условиях.",
    iconName: "headset",
    href: "/support",
  },
];

const resources = [
  {
    href: "https://www.figma.com/file/npn6mOk53B6pBNRnTUgB7P/EQUIX?type=design&mode=design&t=JwiI541x0rVd0W9P-1",
    name: "Figma",
    src: "/figma.svg",
  },
  {
    href: "https://www.npmjs.com/package/equix",
    name: "Node Package Manager",
    src: "/npm.svg",
  },
  {
    href: "https://github.com/vladpechkin/equix.git",
    name: "GitHub",
    src: "/github.svg",
  },
];

const clients = [
  {
    imgSource: "/clients/ripo.png",
    description:
      "Главный сайт организации, использующий элементы EQUIX/Лендинг, EQUIX/Магазин и EQUIX/Данные",
  },
  {
    imgSource: "/clients/getvip.svg",
    description:
      "Админ-панель сервиса премиум-такси, целиком созданная с помощью EQUIX/Данные",
  },
  {
    imgSource: "/clients/ripo.png",
    description:
      "Сайт-визитка организации, целиком созданная с помощью EQUIX/Лендинг",
  },
];

const Page = () => (
  <LandingPage
    sections={[
      {
        heading: "Попробуйте наши решения",
        children: (
          <div className="w-full gap sm:grid grid-cols-2">
            {templatesData.map(({ id, name, description }, index) => (
              <Card
                href={`/templates/${id}`}
                key={index}
                className="w-full"
              >
                <Image
                  src={`/templates/${id}.jpg`}
                  width="320"
                  height="100"
                  className="rounded border-inherit w-full sm:h-[250px] object-cover"
                  alt=""
                />
                <p className="text-accent">{`EQUIX/${name}`}</p>
                <p>{description}</p>
              </Card>
            ))}
          </div>
        ),
      },
      {
        heading: "Наши преимущества",
        children: (
          <div className="w-full gap grid grid-cols-[repeat(auto-fill,minmax(304px,1fr))]">
            {features.map(({ name, description, iconName, href }, index) => (
              <Card
                className=""
                key={index}
                href={href}
              >
                <Row className="items-center text-accent">
                  <Icon name={iconName} className="text-2xl" />
                  {name}
                </Row>
                <p className="line-clamp-4">{description}</p>
              </Card>
            ))}
          </div>
        ),
      },
      {
        heading: "Наши компоненты",
        children: (
          <Col>
            Здесь пока ничего нет, но скоро все будет.
            <Box href="/components" className="border">
              Компоненты
            </Box>
          </Col>
        ),
      },
      {
        heading: "Наши ресурсы",
        children: (
          <Col className="w-full sm:flex-row">
            {resources.map(({ href, name, src: source }, index) => (
              <Box
                href={href}
                key={index}
                className="w-full border border-inherit items-center p-4"
              >
                <Image
                  alt=""
                  className="w-[40px] h-[40px]"
                  height={60}
                  src={source}
                  width={60}
                />
                <p className="text-accent">{name}</p>
              </Box>
            ))}
          </Col>
        ),
      },
      {
        heading: "Реализованные проекты",
        children: (
          <Col className="w-full sm:flex-row">
            {clients.map(({ description, imgSource }, index) => (
              <Card key={index} className="w-full items-start h-full">
                <img alt="" src={imgSource} className="h-8 w-auto" />
                <p>{description}</p>
              </Card>
            ))}
          </Col>
        ),
      },
      BannerSection
    ]}
  />
);

export default Page;
