"use client";

import { Bar } from "@/equix/components/Bar";
import { Box } from "@/equix/components/Box";
import {
  DarkThemeProvider,
  DarkThemeToggle,
} from "@/equix/components/DarkThemeProvider";
import { Data } from "@/equix/components/Data";
import { Details } from "@/equix/components/Details";
import { Dialog } from "@/equix/components/Dialog";
import { ConfirmationDialog } from "@/equix/components/Dialog/ConfirmDialog";
import { Dropzone } from "@/equix/components/Dropzone";
import { Col, Row } from "@/equix/components/Flex";
import { GeoMap } from "@/equix/components/GeoMap";
import { Header } from "@/equix/components/Header";
import { Heading, Region } from "@/equix/components/Heading";
import { Icon } from "@/equix/components/Icon";
import { Input } from "@/equix/components/Input";
import { ComponentsData } from "@/equix/types";
import { useState } from "react";
import part1 from "./part1";

const componentsData: ComponentsData = {
  Dialog: {
    description: `Dialog - всплывающее диалоговое окно, стандартный способ получения ответа от пользователя. Оно всегда имеет заголовок и может иметь любое
    наполнение. Также диалог может быть закрываемым (пользователь может в
    любой момент отменить взаимодействие, выйти из диалога и вернуться назад
    по нажатию в на кнопку выхода или клавишу <code>Escape</code> на
    клавиатуре), или не быть таковым, заставляя пользователя принять решение
    и выбрать одно из действий.`,
    ExampleComponent: () => {
      const [isDialogOpen, setIsDialogOpen] = useState(false);

      return (
        <>
          <Box onClick={() => setIsDialogOpen(true)}>
            Нажми на меня чтобы открыть диалог
          </Box>
          <Dialog
            isOpen={isDialogOpen}
            title="Тестовый диалог"
            close={() => setIsDialogOpen(false)}
          >
            Текст диалога
          </Dialog>
        </>
      );
    },
    usage: `<Dialog
    isOpen={isOpen}
    title="Тестовый диалог"
    close={() => setIsOpen(false)}
  >
    Текст диалога
  </Dialog>`,
  },
  ConfirmationDialog: {
    description: `ConfirmationDialog - диалог подтверждения действия. Является разновидностью обычного компонента Dialog. Он предназначен для более простых действий, поэтому не имеет отдельного от основного текста заголовка, а также не принимает дочерние компоненты. Внутренний текст - просто строка. Диалог подтверждения можно закрыть только выбрав на одно из двух действий - одно подтверждающее, второе - закрывающее диалог и откатывающее пользователя на предыдущий этап.`,
    ExampleComponent: () => {
      const [isDialogOpen, setIsDialogOpen] = useState(false);

      return (
        <>
          <Box onClick={() => setIsDialogOpen(true)}>
            Нажми на меня чтобы открыть диалог
          </Box>
          <ConfirmationDialog
            isOpen={isDialogOpen}
            description="Вы уверены, что хотите читать этот текст?"
            close={() => setIsDialogOpen(false)}
            confirmAction={() => setIsDialogOpen(false)}
          />
        </>
      );
    },
    usage: `<ConfirmationDialog
    isOpen={isDialogOpen}
    description="Вы уверены, что хотите читать этот текст?"
    close={() => setIsDialogOpen(false)}
    confirmAction={() => setIsDialogOpen(false)}
  />`,
  },
  Dropzone: {
    description: `Dropzone - поле ввода для загрузки файлов. Осуществляется оно перетаскиванием файла/файлов на поле или выбором файла/файлов с помощью файлового менеджера устройства.`,
    ExampleComponent: () => {
      const [, setVideo] = useState("");

      return (
        <Dropzone
          url="google.com"
          label="Clip"
          isRequired
          filetype="video"
          value="test.mp4"
          onChange={(value) => setVideo(value)}
        />
      );
    },
    usage: `<Dropzone
          url="google.com"
          label="Clip"
          isRequired
          filetype="video"
          value="test.mp4"
          onChange={(value) => setVideo(value)}
        />`,
  },
  Input: {
    description: `&lt;input&gt; - инпут, поле ввода - основной интерактивный элемент в
    HTML помимо &lt;a&gt; и &lt;button&gt;. В зависимости от аттрибута{" "}
    <code>type</code> он используется для редактирования текста, даты,
    выбора одного или нескольких значений из списка, переключения между
    опциями и так далее. Реализация Input в EQUIX лишь стилизует его и
    добавляет дополнительные аргументы для более простого взаимодействия.`,
    ExampleComponent: () => {
      const [value, setValue] = useState("");

      return <Input label="Тестовое поле" value={value} onChange={setValue} />;
    },
    usage: `<Input label="Тестовое поле" value={value} onChange={setValue} />`,
  },
  Bar: {
    description: `Bar - полоса, доска, панель - ограниченный размерами и отделенный от
    основного содержимого страницы контейнер для однотипного контента
    (например, кнопок или ссылок), который может быть либо горизонтальным,
    либо вертикальным. От View панель отличается тем, что, как правило,
    отделена бордером или другой границей, занимает небольшую часть экрана,
    имеет фиксированную высоту (в случае горизонтальной) или ширину (в
    случае вертикальной) и не подразумевает возможность скроллинга
    (прокручивания страницы). Самые частые применения панели - хедер вверху
    сайта, сайдбар сбоку для навигации и зона для ввода и отправки сообщения
    в мессенджерах.`,
    ExampleComponent: () => {
      const [messageText, setMessageText] = useState("");

      return (
        <Bar position="bottom">
          <Input
            placeholder="Введите текст сообщения"
            value={messageText}
            onChange={setMessageText}
          />
          <Box onClick={() => setMessageText("")}>Отправить</Box>
        </Bar>
      );
    },
    usage: `<Bar position="bottom">
    <Input
      placeholder="Введите текст сообщения"
      value={messageText}
      onChange={setMessageText}
    />
    <Box onClick={() => setMessageText("")}>Отправить</Box>
  </Bar>`,
  },
  Box: {
    description: `Ядро EQUIX - &quot;умный&rdquo; компонент Box, коробка. Он предназначен
    для упрощения написания HTML/JSX разметки, чтобы это могли делать даже
    люди, почти не знающие HTML. Box автоматически функционирует как
    интерактивные элементы <code>a</code>, <code>button</code> или статичные
    элементы div, p и любые другие, и все это в зависимости от входных данных.
    Достаточно просто написать &lt;Box&gt;, и в зависимости от наличия
    атрибутов onClick, href, текста, иконки внутри, компонент примет
    необходимую форму - станет кнопкой, ссылкой, параграфом, секцией и так
    далее, сохраняя при этом отступы и прочие стили.`,
    ExampleComponent: () => <Box onClick={() => "test"}>Кнопка</Box>,
    usage: `<Box onClick={() => "test"}>Кнопка</Box>`,
  },
  DarkThemeProvider: {
    description: `Провайдер темной темы - компонент-обертка, в который должен быть завернут layout, если вы хотите, чтобы в нем была реализована поддержка светлой и тёмной тем. При использовании данной обертки по умолчанию темная тема включается тогда, когда в операционной системе или браузере пользователя выбран темный режим, и наоборот - при светлом режиме активна только светлая тема. Помимо самой обертки <code>DarkThemeProvider</code> файл экспортирует <code>DarkThemeToggle</code> - кнопку для ручного переключения тем, которая позволяет игнорировать настройки операционной системы или браузера.`,
    ExampleComponent: () => (
      <DarkThemeProvider>
        <DarkThemeToggle />
      </DarkThemeProvider>
    ),
    usage: `<DarkThemeProvider>
    <DarkThemeToggle />
  </DarkThemeProvider>`,
  },
  Data: {
    description: `Data - компонент для отображения единицы данных. Например, на экране статистики, где есть десяток разных величин, каждая из них, в случае, если не должна быть интерактивно и/или редактируемой, должна быть отображена с помощью этого компонента.`,
    ExampleComponent: () => (
      <Data label="Количество сделанных заказов" value={10} />
    ),
    usage: `<Data label="Количество сделанных заказов" value={10} />`,
  },
  Details: {
    description: `Details - т.н. "аккордеон", "деталка", - элемент интерфейса, раскрывающийся и скрывающийся назад по нажатию на заголовок. Заголовок является текстом, а содержание - чем угодно. По умолчанию аккордеон свернут, но это поведение можно изменить аттрибутом open.`,
    ExampleComponent: () => (
      <Details summary="Тестовый аккордеон">Текст внутри него</Details>
    ),
    usage: `<Details summary="Тестовый аккордеон">Текст внутри него</Details>`,
  },
  // DragNDrop: {
  //   description: `TODO`,
  //   ExampleComponent: () => <></>,
  //   usage: ``,
  // },
  ErrorPage: {
    description: `ErrorPage - страница, возникающая перед пользователем в случае ошибки в работе сайта или при переходе на несуществующий адрес. Может быть использована вручную, например, как заглушка для временно недоделанной страницы.`,
    ExampleComponent: () => (
      <Box href="/nonexistant">
        Нажмите чтобы перейти на несуществующую страницу
      </Box>
    ),
    usage: `<ErrorPage />`,
  },
  ErrorPageProvider: {
    description: `ErrorPageProvider - компонент-обертка, в который должен быть завернут layout, чтобы качественнее ловить и обрабатывать ошибки. Является неотъемлемой частью любого приложения на EQUIX. Если страница ломается, то пользователя перенаправляют на страницу ошибки - ErrorPage, а не на белый экран или сообщение об ошибке от браузера.`,
    ExampleComponent: () => (
      <Box href="/nonexistant">Нажмите чтобы увидеть ошибку</Box>
    ),
    usage: `<ErrorPageProvider></ErrorPageProvider>`,
  },
  Flex: {
    description: `Flex - общее название для двух компонентов со схожими функциями и использующими в своей основе свойство CSS flexbox. Row - горизонтальный контейнер для любого содержимого, Col - вертикальный. Эти компоненты должны использоваться повсемество, т.к. интерфейсы в EQUIX основаны на четких Flex-контейнерах.`,
    ExampleComponent: () => (
      <Row>
        <Col>Колонка 1</Col>
        <Col>Колонка 2</Col>
      </Row>
    ),
    usage: `<Row>
    <Col>Колонка 1</Col>
    <Col>Колонка 2</Col>
  </Row>`,
  },
  GeoMap: {
    description: `GeoMap - компонент для вставки географической карты на страницу. На данный момент поддерживается только
    сервис Google Maps. Чтобы карта работала, требуется текстовый ключ apiKey,
    который можно получить по инструкции{" "}
    <Box
      isInline
      href="https://developers.google.com/maps/documentation/javascript/get-api-key"
    >
      на сайте Google
    </Box>
    . Map поддерживает отображение маркеров, каждый из которых имеет свойства
    onClick (действие по нажатию), coordinates (позицию, широту и долготу в
    числовой форме), title (название) и iconSrc (изображение для маркера, если
    стандартное не устраивает).`,
    ExampleComponent: () => (
      <GeoMap
        apiKey={process.env["API_KEY"] || ""}
        center={{ lat: 50, lng: 50 }}
        zoom={10}
      />
    ),
    usage: `<GeoMap
    apiKey={process.env["API_KEY"] || ""}
    center={{ lat: 50, lng: 50 }}
    zoom={10}
  />`,
  },
  Header: {
    description: `Header - верхняя навигационная панель, присутствующая практически на любой странице и содержащая в себе список ссылок, кнопок, полей ввода и других элементов. Используется для брендинга и основной навигации пользователя между большими разделами приложения или секциями одной страницы. В случае, если страниц и/или кнопок требуется больше, чем умещается, нужно использовать компонент <code>Sidebar</code>.`,
    ExampleComponent: () => (
      <Header
        appName={"Github"}
        logo={<img src="/github.svg" alt="" />}
        routes={[{ href: "/", label: "Главная" }]}
      />
    ),
    usage: `<Header
        appName={"Github"}
        logo={<img src="/github.svg" alt=""/>}
        routes={[{ href: "/", label: "Главная" }]}
      />`,
  },
  Heading: {
    description: `Heading - заголовок. На данный момент файл компонента включает в себя компоненты <code>Heading<code> и <code>Region</code>. Первый из них - т.н. "умный компонент" - заголовок, сам понимающий, какого уровня вложенности он должен быть (h1, h2, ..., h5 и т.д.). Правильная иерархия вложенных заголовков необходима для понятно пользователю навигации по страницам, а также для людей с ограниченными возможностями. Второй компонент, регион, - контейнер, в котором заголовок и работает. Для исправной работы все секции страницы с любым уровнем вложенности должны использовать компонент региона. Также, для обратной совместимости, компонент экспортирует обычные заголовки - H1, H2, H3. Более трех уровней не рекомендуется, поэтому их нет. Если ваша страница требует больше, то дробите ее на несколько.`,
    ExampleComponent: () => (
      <Region>
        <Heading>Заголовок</Heading>
      </Region>
    ),
    usage: `<Region>
    <Heading>Заголовок</Heading>
  </Region>`,
  },
  Icon: {
    description: `Icon, иконка, - компонент-прослойка для получения иконок из взаимодействия
    с библиотекой Bootstrap Icons, на которой по умолчанию завязан EQUIX.
    Достаточно найти{" "}
    <Box isInline href="https://icons.getbootstrap.com/">
      на сайте библиотеки
    </Box>{" "}
    нужное изображение и прописать его название (например, search) в аттрибут{" "}
    <code>name</code>.`,
    ExampleComponent: () => <Icon name="search" />,
    usage: `<Icon name="search" />`,
  },
  ...part1,
};

export default componentsData;
