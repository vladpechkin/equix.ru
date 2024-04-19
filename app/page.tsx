"use client";
import { HeroSection } from "@/equix/Landing/HeroSection";
import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { Card } from "@/equix/components/Card";
import { Row } from "@/equix/components";
import { H3 } from "@/equix/components/Heading";

const Page = () => {
  return (
    <LandingLayout
      sections={[
        {
          heading: "Наши преимущества",
          children: (
            <Row className="flex-wrap">
              <Card>
                <H3>Кроссплатформенность</H3>
                <p>
                  EQUIX позволяет создавать веб-приложения и ПО для любых
                  платформ (Android, IOS, Windows, Linux, MacOS, IpadOS).
                </p>
              </Card>
              <Card>
                <H3>Универсальность</H3>
                <div>
                  EQUIX включает в себя решения для всех основных типов
                  приложений - Сайт (Лендинг), Интернет-магазин, Новостной
                  портал (Блог), СУБД.
                </div>
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
        },
        {
          heading: "Наши ресурсы",
          children: (
            <Row>
              <Card>Figma</Card>
              <Card>NPM</Card>
              <Card>GitHub</Card>
            </Row>
          ),
        },
        {
          heading: "Наши продукты",
          children: (
            <Row className="flex-wrap">
              <Card>
                <H3>EQUIX/Лендинг</H3>
                <p>
                  Создайте информационное и интерактивное сайт или приложение
                </p>
              </Card>
              <Card>
                <H3>EQUIX/Данные</H3>
                <p>
                  Создайте файловый менеджер, админ-панель или систему
                  управления базами данных
                </p>
              </Card>
              <Card>
                <H3>EQUIX/Магазин</H3>
                <p>
                  Создайте интернет-магазин или приложение для оформления и
                  оплаты услуг
                </p>
              </Card>
              <Card>
                <H3>EQUIX/Блог</H3>
                <p>Создайте новостной портал, блог или форум</p>
              </Card>
            </Row>
          ),
        },
        {
          heading: "Реализованные проекты",
          children: (
            <Row>
              <Card>
                <img src="client-1.png" />
                <span className="px-2 py-1 rounded-full bg-accent text-light h-auto">
                  EQUIX/Лендинг
                </span>
              </Card>
              <Card>
                <img src="client-1.png" />
                <span className="px-2 py-1 rounded-full bg-accent text-light h-auto">
                  EQUIX/Лендинг
                </span>
              </Card>
              <Card>
                <img src="client-1.png" />
                <span className="px-2 py-1 rounded-full bg-accent text-light h-auto">
                  EQUIX/Лендинг
                </span>
              </Card>
              <Card>
                <img src="client-1.png" />
                <span className="px-2 py-1 rounded-full bg-accent text-light h-auto">
                  EQUIX/Лендинг
                </span>
              </Card>
            </Row>
          ),
        },
      ]}
    >
      <HeroSection />
    </LandingLayout>
  );
};

export default Page;
