"use client"
import type { Metadata } from "next";
import { FC, ReactNode, useState } from "react";
import { Landing } from "./equix/Landing";
import { Box, Col, Row } from "./equix/components";
import { TextInput } from "./equix/components";

const metadata: Metadata = {
  title: "EQUIX — новое слово в мире пользовательских интерфейсов",
  description:
    "Программное обеспечение для быстрого создания креативных, современных и функциональных графических интерфейсов",
};

const Card: FC<{ children: ReactNode }> = (props) => (
  <Box
    as="p"
    css="background: hsla(260, 100%, 50%, 5%); gap: 2.5vw; display: flex; flex-direction: column; max-width: 640px; padding: 2.5vw; border-radius: 8px; width: 100%; flex-shrink: 0;"
    {...props}
  >
    {props.children}
  </Box>
);

const Logo = <Box css="color: #5500FF; font-weight: 100; letter-spacing: 8px; font-size: 40px;">
  EQUIX
</Box>

const Page = () => {
  const [previewTitle, setPreviewTitle] = useState("EQUIX — новое слово в мире пользовательских интерфейсов")
  const [previewDescription, setPreviewDescription] = useState("Программное обеспечение для быстрого создания креативных, современных и функциональных графических интерфейсов")
  const [previewSectionHeading, setPreviewSectionHeading] = useState("Секция 1")
  const [previewSectionText, setPreviewSectionText] = useState("Описание секции")
  const [previewBackgroundColor, setPreviewBackgroundColor] = useState("#ccddff")
  return (
    <Landing
      title={metadata.title as string}
      description={metadata.description as string}
      logo={Logo}
      heroImageSrc="/intro.png"
      siteName="ООО Эквикс"
      sections={[
        {
          heading: "О нас",
          content: (
            <Card>
              Мы создаем ПО, существенно упрощающее креативную работу дизайнерам и
              монотонную разработчикам, тем самым позволяющее максимально просто и
              быстро создавать высококачественные решения в области цифровых
              приложений, ускоряя и удешевляя процесс.
            </Card>
          ),
        },
        {
          heading: "Решаемая проблема",
          content: (
            <Card>
              <p>
                Поскольку существует риск ухода зарубежных компаний из России и
                наложения ими запрета на использование в России их продуктов, при
                разработке графических интерфейсов опираться приходится на
                {" "}
                <Box
                  as="a"
                  css="display: inline;"
                  href="http://designsystemsclub.ru/"
                >
                  отечественные наработки
                </Box>
                , но ни одна из них не предлагает решения, покрывающего все этапы
                разработки от продумывания внешнего вида до разворачивания
                продукта в пользовательский доступ; а также позволяющего создавать
                интерфейсы для всех платформ - веб-приложений, мобильных
                приложений и программ для ПК.
              </p>
            </Card>
          ),
        },
        {
          heading: "Продукты",
          content: (
            <Card>
              Дизайн-система EQUIX включает в себя семью продуктов (EQUIX/Данные,
              EQUIX/Магазин, EQUIX/Блог, EQUIX/Лендинг) с открытым исходным кодом,
              чем могут пользоваться дизайнеры и разработчики, а случае отсутствия
              на их местах работы полноценной команды разработчиков - они могут
              воспользоваться нашими услугами по созданию ПО на основе EQUIX
            </Card>
          ),
        },
        {
          heading: "Почему мы?",
          content: (
            <Card>
              <ul>
                <li>
                  EQUIX позволяет создавать веб-приложения и ПО для любых платформ
                  (Android, IOS, Windows, Linux, MacOS, IpadOS);
                </li>
                <li>
                  EQUIX включает в себя решения для всех основных типов приложений
                  - Сайт (Лендинг), Интернет-магазин, Новостной портал (Блог),
                  СУБД.
                </li>
                <li>
                  EQUIX использует самые современные технологии, обеспечивающие
                  высокую скорость работы, функциональности и отказоустойчивости
                  приложений;
                </li>
                <li>
                  EQUIX заботится о пользовательском опыте (UX) и опыте
                  разработчиков (DX), поэтому предоставляет наиболее оптимальные
                  решения типовых задач и документацию по ним для вторых, что
                  увеличивает скорость разработки; а также тщательно проработанные
                  на основе исследований в области использования цифровых
                  устройств подходы для первых, что увеличивает комфорт
                  эксплуатации сервисов.
                </li>
              </ul>
            </Card>
          ),
        },
        {
          heading: "Попробовать",
          content: (
            <Card>Ниже находятся интерактивные редактор кода и маленькое превью лендинга, который создается этим кодом, который вы можете изменять и в режиме реального времени видеть, компоненты EQUIX создают страницы!</Card>
          )
        },
        {
          content: (
            <Box css="display: flex; flex-direction: column; width: 100%; border-radius: 8px; overflow: hidden;">
              <Box css="background: hsl(260, 100%, 20%); color: white; padding: 2.5vw; font-family: monospace;">
                &lt;Landing<br/>&nbsp;&nbsp;заголовок={'{"'}
                <TextInput value={previewTitle} onChange={setPreviewTitle} />{'"}'}<br/>&nbsp;&nbsp;описание={'{"'}
                <TextInput value={previewDescription} onChange={setPreviewDescription} />{'"}'}
                <br/>&nbsp;&nbsp;фоновыйЦвет={'{"'}
                <TextInput value={previewBackgroundColor} onChange={setPreviewBackgroundColor} />{'"}'} <br/>&nbsp;&nbsp;секции={"{[{"}<br/>&nbsp;&nbsp;&nbsp;&nbsp;заголовокСекции: <TextInput value={previewSectionHeading} onChange={setPreviewSectionHeading} />,<br/>&nbsp;&nbsp;&nbsp;&nbsp;текстСекции: <TextInput value={previewSectionText} onChange={setPreviewSectionText} />,
                <br/>&nbsp;&nbsp;{"}]}"}
                <br/>/&gt;
              </Box>
              <Box css={`border: 1px solid hsla(260, 100%, 50%, 5%); background-color: ${previewBackgroundColor}`}>
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
                      content: <Card>
                        {previewSectionText}
                      </Card>
                    }
                  ]}
                />
              </Box>
            </Box>

          )
        }
        // {
        //   heading: "Текущий статус",
        //   content: (
        //     <Card>
        //       ПО EQUIX появилось в формате идеи в 2021 году. На данный момент
        //       EQUIX и семья продуктов на его основе разработана примерно на 50%.
        //       Учитывая незавершенное состояние ПО EQUIX, команда способна
        //       оказывать один полный цикл услуг по созданию ограниченного круга ПО
        //       малого и среднего размера в месяц. Средняя стоимость цикла услуг -
        //       40000руб.
        //       В первый год функционирования планируется завершение разработки ПО EQUIX, что существенно повысит эффективность команды и позволит увеличить число одновременно оказываемых услуг по созданию ПО в несколько раз, а также вложение большей части доходов в увеличение количества заказчиков за счет рекламы. Во второй и последующие годы функционирования планируется продолжение увеличения количества заказчиков, расширение команды для обеспечения наибольшего числа одновременно оказываемых услуг и совершенствование технологий разработки.
        //     </Card>
        //   ),
        // },
      ]}
    />
  )
};

export default Page;
