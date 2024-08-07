"use client";

import { LandingPage } from "@/equix/Landing/LandingPage";
import { LandingSection } from "@/equix/Landing/LandingSection";
import { Box, Card } from "@/equix/components/Box";
import { Col, Row } from "@/equix/components/Flex";
import { Input } from "@/equix/components/Input";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [previewTitle, setPreviewTitle] = useState(
    "EQUIX — Не утруждайтесь созданием визуальной части программного обеспечения."
  );
  const [previewDescription, setPreviewDescription] = useState(
    "Дизайн-система для быстрого и легкого создания дизайна и превращения его в рабочий сайт, мобильное или десктопное приложение."
  );
  const [previewSectionHeading, setPreviewSectionHeading] =
    useState("Секция 1");
  const [previewSectionText, setPreviewSectionText] =
    useState("Описание секции");
  const [previewBackgroundColor, setPreviewBackgroundColor] =
    useState("#ccddff");

  return [
    {
      heading: "Попробовать",
      children: (
        <Col className="w-full">
          <p>
            Ниже находятся интерактивные редактор кода и маленькая копия этого
            сайта, созданная этим кодом, который вы можете редактировать и в
            режиме реального времени видеть, как в EQUIX/Лендинг вносятся
            изменения.
          </p>
          <Col className="w-full rounded bg-black text-white p font-mono items-stretch">
            {"<LandingPage config={{"}
            <Row className="items-center">
              {'заголовок: "'}
              <Input
                value={previewTitle}
                onChange={setPreviewTitle}
                className="text-initial bg-transparent border-transparent inline-flex"
              />
              {'",'}
            </Row>
            <Row className="items-center">
              {'описание: "'}
              <Input
                value={previewDescription}
                onChange={setPreviewDescription}
                className="text-initial bg-transparent border-transparent"
              />
              {'",'}
            </Row>
            <Row className="items-center">
              {'фоновыйЦвет: "'}
              <Input
                value={previewBackgroundColor}
                onChange={setPreviewBackgroundColor}
                className="text-initial bg-transparent border-transparent"
              />
              {'",'}
            </Row>
            {"секции={[{"}
            <Row className="items-center">
              {'заголовокСекции: "'}
              <Input
                value={previewSectionHeading}
                onChange={setPreviewSectionHeading}
                className="text-initial bg-transparent border-transparent"
              />
              {'",'}
            </Row>
            <Row className="items-center">
              {'текстСекции: "'}
              <Input
                value={previewSectionText}
                onChange={setPreviewSectionText}
                className="text-initial bg-transparent border-transparent"
              />
              {'",'}
            </Row>
            {"}]} />"}
          </Col>
          <Box
            className={`
                  border-accent border w-full h-[50vh] overflow-hidden
                `}
          >
            <LandingPage
              className={`scale-75 w-screen p-0 my-[-100px] bg-[${previewBackgroundColor}]`}
              config={{
                heading: previewTitle,
                description: previewDescription,
                appName: "EQUIX",
                appOwnerName: "ООО Эквикс",
                hero: (
                  <Image src="/intro.png" alt="" height={300} width={300} />
                ),
                logo: (
                  <Box className="text-accent font-thin tracking-[8px] text-4xl">
                    EQUIX
                  </Box>
                ),
              }}
              sections={[
                {
                  heading: previewSectionHeading,
                  children: <Card>{previewSectionText}</Card>,
                },
              ]}
            />
          </Box>
        </Col>
      ),
    },
  ].map((section, index) => <LandingSection key={index} {...section} />);
};

export default Page;
