"use client";

import Image from "next/image";

import { LandingPage } from "@/equix/Landing/LandingPage";
import { Card } from "@/equix/components/Box";
import { Row } from "@/equix/components/Flex";
import { H3 } from "@/equix/components/Heading";
import { Icon } from "@/equix/components/Icon";
import { Img } from "@/equix/components/Img";

const features = {
  Кроссплатформенность: {
    description:
      "EQUIX позволяет создавать веб-приложения и ПО для любых платформ (Android, IOS, Windows, Linux, MacOS, IpadOS).",
    iconName: "windows",
    href: "/docs/platforms"
  },
  Универсальность: {
    description:
      "EQUIX включает в себя решения для создания всех основных типов приложений - лендинг, интернет-магазин, новостной портал, система управления базами данных.",
    iconName: "window-stack",
    href: "/templates"
  },
  Производительность: {
    description:
      "EQUIX использует самые современные технологии, обеспечивающие высокую скорость работы, функциональности и отказоустойчивости приложений.",
    iconName: "speedometer",
    href: "/docs/base"
  },
  "Комфорт использования": {
    description:
      "EQUIX заботится о пользовательском опыте (UX) и опыте разработчиков (DX), поэтому увеличивает комфорт эксплуатации и скорость разработки сервисов.",
    iconName: "emoji-smile",
    href: "/components"
  },
  Локализация: {
    description:
      "EQUIX позволяет легко и быстро разработчикам переводить приложения на множество разных языков, а пользователям - переключаться между ними.",
    iconName: "translate",
    href: "/docs/localization"
  },
  Доступность: {
    description:
      "EQUIX продуман с точки зрения использования приложений людьми, плохо видящими и слепыми, использующие голосовое управление.",
    iconName: "universal-access-circle",
    href: "/docs/accessibility"
  },
  "Поддержка печати": {
    description:
      "Функция печати страниц предусмотрена в EQUIX. Все страницы при печати оптимизированы в цветах, чтобы экономить ресурсы принтера и избегать искажений цветов на бумаге.",
    iconName: "printer",
    href: "/docs/printing"
  },
};

const templates = [
  {
    id: "landing",
    name: "Лендинг",
    description: "Создайте информационное и интерактивное сайт или приложение",
  },
  {
    id: "blog",
    name: "Блог",
    description: "Создайте новостной портал, блог или форум",
  },
  {
    id: "data",
    name: "Данные",
    description:
      "Создайте файловый менеджер, админ-панель или систему управления базами данных",
  },
  {
    id: "shop",
    name: "Магазин",
    description:
      "Создайте интернет-магазин или приложение для оформления и оплаты услуг",
  },
];

const Page = () => (
  <LandingPage
    sections={[
      {
        children: (
          <Row className="flex-wrap">
            {templates.map((template, index) => (
              <Card
                href={`/templates/${template.id}`}
                heading={`EQUIX/${template.name}`}
                key={index}
              >
                <Img
                  src={`/templates/${template.id}.jpg`}
                  width="320"
                  height="100"
                  className="border-inherit"
                />
                <p>{template.description}</p>
              </Card>
            ))}
          </Row>
        ),

        heading: "Наши решения",
      },
      {
        children: (
          <Row className="flex-wrap">
            {Object.entries(features).map(
              ([key, { description, iconName, href }], index) => (
                <Card key={index} href={href}>
                  <Icon name={iconName} className="text-2xl" />
                  <H3>{key}</H3>
                  <p>{description}</p>
                </Card>
              )
            )}
          </Row>
        ),
        heading: "Наши преимущества",
      },
      {
        children: (
          <Row className="w-full sm:flex-row">
            {[
              {
                href: "https://www.figma.com/file/npn6mOk53B6pBNRnTUgB7P/EQUIX?type=design&mode=design&t=JwiI541x0rVd0W9P-1",
                label: "Figma",
                src: "/figma.svg",
              },
              {
                href: "https://www.npmjs.com/package/equix",
                label: "Node Package Manager",
                src: "/npm.svg",
              },
              {
                href: "https://github.com/vladpechkin/equix.git",
                label: "GitHub",
                src: "/github.png",
              },
            ].map(({ href, label, src: source }, index) => (
              <Card href={href} key={index}>
                <Image
                  alt=""
                  className="w-[60px] h-[60px]"
                  height={60}
                  src={source}
                  width={60}
                />
                {label}
              </Card>
            ))}
          </Row>
        ),

        heading: "Наши ресурсы",
      },
      {
        children: (
          <Row>
            <Card>
              <Image alt="" src="/client-1.png" height={100} width={100} />
              <span className="px-2 py-1 rounded-full bg-accent text-light h-auto">
                EQUIX/Лендинг
              </span>
            </Card>
          </Row>
        ),

        heading: "Реализованные проекты",
      },
    ]}
  />
);

export default Page;
