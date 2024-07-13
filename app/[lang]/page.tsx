"use client";

import Image from "next/image";

import { LandingPage } from "@/equix/Landing/LandingPage";
import { Box, Card } from "@/equix/components/Box";
import { Row } from "@/equix/components/Flex";
import { H3 } from "@/equix/components/Heading";
import { Icon } from "@/equix/components/Icon";

const features = {
  Кроссплатформенность: {
    description:
      "EQUIX работает на языке JavaScript, который позволяет создавать веб-приложения и ПО для любых платформ (Android, IOS, Windows, Linux, MacOS, IpadOS).",
    iconName: "windows",
  },
  Универсальность: {
    description:
      "EQUIX включает в себя решения для создания всех основных типов приложений - лендинг, интернет-магазин, новостной портал, система управления базами данных.",
    iconName: "window-stack",
  },
  Производительность: {
    description:
      "EQUIX использует самые современные технологии, обеспечивающие высокую скорость работы, функциональности и отказоустойчивости приложений.",
    iconName: "speedometer",
  },
  "Комфорт использования": {
    description:
      "EQUIX заботится о пользовательском опыте (UX) и опыте разработчиков (DX), поэтому предоставляет наиболее оптимальные решения типовых задач и документацию по ним, что увеличивает комфорт эксплуатации сервисов и скорость разработки.",
    iconName: "emoji-smile",
  },
  Локализация: {
    description:
      "EQUIX предлагает заранее настроенные алгоритмы локализации, позволяющие легко и быстро разработчикам переводить приложения на множество разных языков, а пользователям - переключаться между ними.",
    iconName: "translate",
  },
  Доступность: {
    description:
      "EQUIX автоматически добавляет к приложению режим повышенной контрастности для людей с плохим зрением на случай необходимости, а все компоненты дизайн-системы продуманы с точки зрения использования приложений людьми с ограниченными возможностями - в том числе слепыми, использующие голосовое управление.",
    iconName: "universal-access-circle",
  },
  "Поддержка печати": {
    description:
      "Даже такая нечасто используемая в приложениях функция, как печать, предусмотрена в EQUIX. Все страницы при печати оптимизированы в цветах, чтобы экономить ресурсы принтера и избегать искажений цветов на бумаге. Функция применяется в сайтах-визитках, сайтах газет, блогов, форумов, хранилищ документации и так далее.",
    iconName: "printer",
  },
};

const Page = () => (
  <LandingPage
    sections={[
      {
        children: (
          <Row className="flex-wrap">
            {Object.entries(features).map(
              ([key, { description, iconName }], index) => (
                <Card key={index}>
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
          <Row className="w-full flex-wrap">
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
              <Box
                className="p-4 border items-center font-semibold gap-4 w-full"
                href={href}
                key={index}
              >
                <Image
                  alt=""
                  className="w-[60px] h-[60px]"
                  height={60}
                  src={source}
                  width={60}
                />
                {label}
              </Box>
            ))}
          </Row>
        ),

        heading: "Наши ресурсы",
      },
      {
        children: (
          <Row className="flex-wrap">
            <Card>
              <H3>EQUIX/Лендинг</H3>
              <p>Создайте информационное и интерактивное сайт или приложение</p>
            </Card>
            <Card>
              <H3>EQUIX/Данные</H3>
              <p>
                Создайте файловый менеджер, админ-панель или систему управления
                базами данных
              </p>
            </Card>
            <Card>
              <H3>EQUIX/Магазин</H3>
              <p>
                Создайте интернет-магазин или приложение для оформления и оплаты
                услуг
              </p>
            </Card>
            <Card>
              <H3>EQUIX/Блог</H3>
              <p>Создайте новостной портал, блог или форум</p>
            </Card>
          </Row>
        ),

        heading: "Наши продукты",
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
