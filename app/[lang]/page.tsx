"use client";

import Image from "next/image";

import { LandingPage } from "@/equix/Landing/LandingPage";
import { Box, Card } from "@/equix/components/Box";
import { Col, Row } from "@/equix/components/Flex";
import { Icon } from "@/equix/components/Icon";
import templatesData from "./templates/data";
import { BannerSection } from "../components/BannerSection";
import data from "./data.json";
import componentsData from "./components/data";

const Page = () => {
  const { clients, features, resources } = data;

  return (
    <LandingPage
      sections={[
        {
          heading: "Попробуйте наши решения",
          children: (
            <div className="w-full gap sm:grid grid-cols-2">
              {templatesData.map(({ id, name, description }, index) => (
                <Card href={`/templates/${id}`} key={index} className="w-full">
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
          heading: "Не знаете, с чего начать?",
          children: (
            <Col className="items-center">
              <Box
                href="/templates/landing"
                className="justify-center w-full border"
              >
                Попробуйте любой шаблон
              </Box>
              <Row className="gap-4">
                <Col className="items-center">
                  <Icon name="arrow-down" />
                  <Box className="justify-center border w-full">
                    Понравилось?
                  </Box>
                  <Icon name="arrow-down" />
                  <Box href="/profile" className="justify-center w-full border">
                    Зарегистрируйтесь и выберите роль
                  </Box>
                  <Row className="gap-4">
                    <Col className="items-center">
                      <Icon name="arrow-down" />
                      <Box className="justify-center border w-full">
                        Вы программист или дизайнер?
                      </Box>
                      <Row className="gap-4">
                        <Col className="items-center">
                          <Icon name="arrow-down" />
                          <Box href="/profile/guide" className="w-48 border">
                            Получите инструкции по использованию бесплатной
                            версии...
                          </Box>
                        </Col>
                        <Col className="items-center">
                          <Icon name="arrow-down" />
                          <Box href="/" className="w-56 border">
                            ...или приобретите пожизненную лицензию и получите
                            полный доступ к системе, а также техподдержку!
                          </Box>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="items-center">
                      <Icon name="arrow-down" />
                      <Box className="justify-center border w-full">
                        Вы иной сотрудник?
                      </Box>
                      <Icon name="arrow-down" />
                      <Box href="mailto:bot@equix.ru" className="border w-56">
                        Свяжитесь с нами - мы быстро и недорого создадим для вас
                        любое приложение
                      </Box>
                    </Col>
                  </Row>
                </Col>
                <Col className="items-center">
                  <Icon name="arrow-down" />
                  <Box className="justify-center border w-full">
                    Не подходит?
                  </Box>
                  <Icon name="arrow-down" />
                  <Box
                    href="/templates/landing"
                    className="border w-56 justify-center"
                  >
                    Попробуйте еще!
                  </Box>
                </Col>
              </Row>
            </Col>
          ),
        },
        {
          heading: "Наши преимущества",
          children: (
            <div className="w-full gap grid grid-cols-[repeat(auto-fill,minmax(304px,1fr))]">
              {features.map(({ name, description, iconName, href }, index) => (
                <Card key={index} href={href}>
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
            <Row className="flex-wrap">
              {Object.keys(componentsData).map((componentName, index) => (
                <Box
                  key={index}
                  className="border border-inherit"
                  href={`/components/${componentName}`}
                >
                  {componentName}
                </Box>
              ))}
            </Row>
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
            <div className="w-full gap grid grid-cols-[repeat(auto-fill,minmax(304px,1fr))]">
              {clients.map(({ description, imgSource }, index) => (
                <Card key={index} className="w-full items-start h-full">
                  <img alt="" src={imgSource} className="h-8 w-auto" />
                  <p>{description}</p>
                </Card>
              ))}
            </div>
          ),
        },
        BannerSection,
      ]}
    />
  );
};

export default Page;
