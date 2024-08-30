import { Box } from "@/equix/components/Box";
import { Code } from "@/equix/components/Code";
import { LandingLayout } from "@/equix/Landing/LandingLayout";

const Page = () => (
  <LandingLayout
    sections={[
      {
        heading: "Дизайнерам",
        children: (
          <>
            EQUIX - полноценный UI-Kit. Чтобы увидеть все, что он в себя
            включает, ознакомьтесь со страницей{" "}
            <Box isInline href="/components">
              Компоненты
            </Box>
            . Чтобы использовать любой компонент или шаблон в своей работе,
            откройте{" "}
            <Box
              isInline
              href="https://www.figma.com/file/npn6mOk53B6pBNRnTUgB7P/EQUIX?type=design&mode=design&t=JwiI541x0rVd0W9P-1"
            >
              файл в онлайн-редакторе дизайнов Figma
            </Box>{" "}
            и сделайте копию файла (функция Duplicate), либо копируйте отдельные
            его части в другой свой файл Figma. Кроме того, настоятельно
            рекомендуется просмотреть последующие страницы этой документации,
            так как они содержат в себе много подходов, советов и объяснений по
            теме создания интерфейсов.
          </>
        ),
      },
      {
        heading: "Программистам",
        children: (
          <>
            EQUIX - библиотека на языке TypeScript (более продвинутая версия
            языка JavaScript). Для разработки на данной основе необходимо
            базовое понимание технологий:
            <ol>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
            </ol>
            О других технологиях, которые стоит понимать, можно прочитать на
            странице{" "}
            <Box isInline href="/docs/base">
              Устройство EQUIX
            </Box>
            . Чтобы использовать библиотеку для написания кода, потребуется
            установить движок (runtime) языка{" "}
            <Box href="https://nodejs.org/en">Node.js</Box>. Проект (папка),
            куда вы будете устанавливать EQUIX, должен использовать фреймворк
            <Box href="https://nextjs.org/">Next.js</Box>. Следовательно, нужно
            либо установить Next на уже существующий сайт по, например,{" "}
            <Box href="https://habr.com/ru/companies/ruvds/articles/442654/">
              данной инструкции
            </Box>
            , либо создать новый проект такой командой в терминале:
            <Code>$ npx create-next-app@latest</Code>
            Далее нужно перейти в папку созданного проекта и выполнить команду:
            <Code>$ npm i equix</Code>
            Готово! Теперь в любом <Code>.ts</Code> или <Code>.tsx</Code> файле
            проекта вы можете использовать шаблоны, компоненты или функции EQUIX
            таким образом:
            <Code>{`// CustomComponent.tsx
import Box from "equix"

export const CustomComponent => <Box>Текст</Box>
`}</Code>
            Список всех визуальных составляющих, предоставляемых EQUIX,
            находится на странице <Box href="/components">Компоненты</Box>.
            Информация по написанию кода, устройству, функциям, логике и прочем
            - во всех последующих страницах документации.
          </>
        ),
      },
    ]}
  />
);

export default Page;
