import type { Metadata } from "next";
import { FC, ReactNode } from "react";
import { Landing } from "./equix/Landing";
import { Box, Col } from "./equix/components";

export const metadata: Metadata = {
  title: "EQUIX — новое слово в мире пользовательских интерфейсов",
  description:
    "Программное обеспечение для быстрого создания креативных, современных и функциональных графических интерфейсов",
};

const Card: FC<{ children: ReactNode }> = (props) => (
  <Box
    as="p"
    css="background:white; gap:8px; display: flex; flex-direction: column; padding: 8px; border-radius: 8px;"
    {...props}
  >
    {props.children}
  </Box>
);

const Page = () => (
  <Landing
    title={metadata.title as string}
    description={metadata.description as string}
    logoSrc="/logo.svg"
    heroImageSrc="/intro.png"
    links={[]}
    sections={[
      {
        heading: "Проблема",
        content: (
          <Card>
            <p>
              Поскольку существует риск ухода зарубежных компаний из России и
              наложения ими запрета на использование в России их продуктов, при
              разработке графических интерфейсов опираться приходится на
              отечественные наработки, основных из которых в данной области
              всего 21 (источник:{" "}
              <Box
                as="a"
                css="display: inline;"
                href="http://designsystemsclub.ru/"
              >
                каталог отечественных дизайн-систем
              </Box>
              ), но ни одна из них не предлагает решения, покрывающего все этапы
              разработки от продумывания внешнего вида до разворачивания
              продукта в пользовательский доступ; а также позволяющего создавать
              интерфейсы для всех платформ - веб-приложений, мобильных
              приложений и программ для ПК.
            </p>
          </Card>
        ),
      },
      {
        heading: "Существующие решения",
        content: [
          <Card key={1}>
            Среди ПО:
            <ul>
              <li>
                Дизайн-системы компаний B2B center, BSS, HSE, ISPSystem, IVI,
                Mail.ru Group, Semrush, Альфа-банк, Барс Груп, Вконтакте,
                Газпром Нефть, Госуслуги, Дизайн Государственных Систем,
                Контур,Райффайзенбанк, Рамблер, Росатом, Росстелеком, Тинькофф,
                Центр Финансовых Технологий, Яндекс, не предоставляют
                технических решений для минимизации необходимости в
                программировании;
              </li>
              <li>
                Шаблонизаторы и системы управления контентом (CMS), такие как
                Pug, Twig, Wordpress, Drupal, Joomla, не предоставляют решений
                для упрощения создания дизайна интерфейсов и используют в
                разработке морально устаревшие технологии, что приводит к плохой
                производительности и негативному пользовательскому опыту.
              </li>
            </ul>
          </Card>,
          <Card key={2}>
            Среди компаний:
            <ul>
              <li>
                Компании, предоставляющие услуги создания ПО на основе
                собственных разработок (т.н. конструкторов сайтов), такие как
                Squarespace, Tilda, InSales, Wix, Shopify, не занимаются
                созданием приложений широкого спектра функциональности для
                настольных ПК и мобильных устройств.
              </li>
              <li>
                Компании, предоставляющие общие услуги по разработке любого ПО,
                такие как Epam, Haulmont, имеют команды, состоящие из большого
                количества сотрудников и зачастую используют морально устаревшие
                технологии в разработке, что приводит к низкой скорости
                разработки и, как следствие, высокой ее стоимости для заказчика.
              </li>
              <li>
                Существующие индивидуальные дизайнеры и разработчики,
                предоставляющие услуги на фриланс-биржах, используют в создании
                ПО совершенно разные подходы и редко могут гарантировать высокое
                качество услуг, что может приводить к проблемам масштабирования
                и эксплуатации.
              </li>
            </ul>
          </Card>,
        ],
      },
      {
        heading: "Наше предложение",
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
        heading: "Конкурентное преимущество",
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
        heading: "Бизнес-модель",
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
        heading: "Текущий статус",
        content: (
          <Card>
            ПО EQUIX появилось в формате идеи в 2021 году. На данный момент
            EQUIX и семья продуктов на его основе разработана примерно на 50%.
            Учитывая незавершенное состояние ПО EQUIX, команда способна
            оказывать один полный цикл услуг по созданию ограниченного круга ПО
            малого и среднего размера в месяц. Средняя стоимость цикла услуг -
            40000руб.
            В первый год функционирования планируется завершение разработки ПО EQUIX, что существенно повысит эффективность команды и позволит увеличить число одновременно оказываемых услуг по созданию ПО в несколько раз, а также вложение большей части доходов в увеличение количества заказчиков за счет рекламы. Во второй и последующие годы функционирования планируется продолжение увеличения количества заказчиков, расширение команды для обеспечения наибольшего числа одновременно оказываемых услуг и совершенствование технологий разработки.
          </Card>
        ),
      },
    ]}
    siteName="ООО Эквикс"
  />
);

export default Page;
