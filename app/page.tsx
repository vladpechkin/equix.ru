import Image from "next/image";

import { Row } from "@/equix/components";
import { Box, Card } from "@/equix/components/Box";
import { H3 } from "@/equix/components/Heading";
import { LandingPage } from "@/equix/Landing/LandingPage";

const Page = () => (
  <LandingPage
    sections={[
      {
        children: (
          <Row className="flex-wrap">
            <Card>
              <H3>Кроссплатформенность</H3>
              <p>
                EQUIX позволяет создавать веб-приложения и ПО для любых платформ
                (Android, IOS, Windows, Linux, MacOS, IpadOS).
              </p>
            </Card>
            <Card>
              <H3>Универсальность</H3>
              <p>
                EQUIX включает в себя решения для всех основных типов приложений
                - Сайт (Лендинг), Интернет-магазин, Новостной портал (Блог),
                СУБД.
              </p>
            </Card>
            <Card>
              <H3>Производительность</H3>
              <p>
                EQUIX использует самые современные технологии, обеспечивающие
                высокую скорость работы, функциональности и отказоустойчивости
                приложений.
              </p>
            </Card>
            <Card>
              <H3>Комфорт разработки</H3>
              <p>
                EQUIX заботится о пользовательском опыте (UX) и опыте
                разработчиков (DX), поэтому предоставляет наиболее оптимальные
                решения типовых задач и документацию по ним для вторых, что
                увеличивает скорость разработки; а также для первых, что
                увеличивает комфорт эксплуатации сервисов.
              </p>
            </Card>
          </Row>
        ),

        heading: "Наши преимущества",
      },
      {
        children: (
          <Row className="w-full">
            {[
              {
                href: "https://www.figma.com/file/npn6mOk53B6pBNRnTUgB7P/EQUIX?type=design&mode=design&t=JwiI541x0rVd0W9P-1",
                label: "Figma",
                src: "figma.svg",
              },
              {
                href: "https://www.npmjs.com/package/equix",
                label: "Node Package Manager",
                src: "npm.svg",
              },
              {
                href: "https://github.com/vladpechkin/equix.git",
                label: "GitHub",
                src: "/github.png",
              },
            ].map(({ href, label, src: source }, index) => (
              <Box
                className="p-4 border-border border items-center font-semibold gap-4 w-full"
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
              <Image alt="" src="client-1.png" height={100} width={100} />
              <span className="px-2 py-1 rounded-full bg-accent text-light h-auto">
                EQUIX/Лендинг
              </span>
            </Card>
            <Card>
              <Image alt="" src="client-1.png" height={100} width={100} />
              <span className="px-2 py-1 rounded-full bg-accent text-light h-auto">
                EQUIX/Лендинг
              </span>
            </Card>
            <Card>
              <Image alt="" src="client-1.png" height={100} width={100} />
              <span className="px-2 py-1 rounded-full bg-accent text-light h-auto">
                EQUIX/Лендинг
              </span>
            </Card>
            <Card>
              <Image alt="" src="client-1.png" height={100} width={100} />
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
