"use client";

import { useState } from "react";
import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { Col } from "@/equix/components";
import { Box } from "@/equix/components/Box";
import { Input } from "@/equix/components/Input";

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
  return (
    <LandingLayout
      sections={[
        {
          heading: "Попробовать",
          children: (
            <Col>
              <p>
                Ниже находятся интерактивные редактор кода и маленькая копия
                этого сайта, созданная этим кодом, который вы можете
                редактировать и в режиме реального времени видеть, как в
                EQUIX/Лендинг вносятся изменения.
              </p>
              <Box className="flex flex-col w-full rounded bg-black text-white p font-mono">
                &lt;Landing
                <br />
                &nbsp;&nbsp;заголовок={'{"'}
                <Input
                  value={previewTitle}
                  onChange={setPreviewTitle}
                  className="text-initial bg-transparent border-transparent"
                />
                {'"}'}
                <br />
                &nbsp;&nbsp;описание={'{"'}
                <Input
                  value={previewDescription}
                  onChange={setPreviewDescription}
                  className="text-initial bg-transparent border-transparent"
                />
                {'"}'}
                <br />
                &nbsp;&nbsp;фоновыйЦвет={'{"'}
                <Input
                  value={previewBackgroundColor}
                  onChange={setPreviewBackgroundColor}
                  className="text-initial bg-transparent border-transparent"
                />
                {'"}'} <br />
                &nbsp;&nbsp;секции={"{[{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;заголовокСекции:{" "}
                <Input
                  value={previewSectionHeading}
                  onChange={setPreviewSectionHeading}
                  className="text-initial bg-transparent border-transparent"
                />
                ,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;текстСекции:{" "}
                <Input
                  value={previewSectionText}
                  onChange={setPreviewSectionText}
                  className="text-initial bg-transparent border-transparent"
                />
                ,
                <br />
                &nbsp;&nbsp;{"}]}"}
                <br />
                /&gt;
              </Box>
              {/* <Box
          css={`
            border: 1px solid hsla(260, 100%, 50%, 5%);
            background-color: ${previewBackgroundColor};
          `}
        >
          <Landing
            css="background-color: inherit; scale: 0.8; width: 100vw; padding: 0; margin-left: -64px;"
            logo={Logo}
            title={previewTitle}
            description={previewDescription}
            siteName="ООО Эквикс"
            heroImageSrc="/intro.png"
            sections={[
              {
                heading: previewSectionHeading,
                content: <Card>{previewSectionText}</Card>,
              },
            ]}
          />
        </Box> */}
            </Col>
          ),
        },
      ]}
    ></LandingLayout>
  );
};

export default Page;
