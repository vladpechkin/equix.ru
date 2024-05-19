"use client";

import { Bar } from "@/equix/components/Bar";
import { Box } from "@/equix/components/Box";
import { Dialog } from "@/equix/components/Dialog";
import { GeoMap } from "@/equix/components/GeoMap";
import { Icon } from "@/equix/components/Icon";
import { Img } from "@/equix/components/Img";
import { Input } from "@/equix/components/Input";
import { Textarea } from "@/equix/components/Textarea";
import { Video } from "@/equix/components/Video";
import { View } from "@/equix/components/View";
import { ReactNode, useState } from "react";

interface ComponentsData {
  [key: string]: {
    description: string;
    ExampleComponent: () => ReactNode;
    usage: string;
  };
}

const componentsData: ComponentsData = {
  Bar: {
    description: `Bar - полоса, доска, панель - ограниченный размерами и отделенный от
    основного содержимого страницы контейнер для однотипного контента
    (например, кнопок или ссылок), который может быть либо горизонтальным,
    либо вертикальным. От View панель отличается тем, что, как правило,
    отделен бордером или другой границей, занимает небольшую часть экрана,
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
  Dialog: {
    description: `Dialog - всплывающее диалоговое окно, стандартный способ получения ответа от пользователя. Оно всегда имеет заголовок и может иметь любое
    наполнение. Также диалог может быть закрываемым (пользователь может в
    любой момент отменить взаимодействие, выйти из диалога и вернуться назад
    по нажатию в на кнопку выхода или клавишу <code>Escape</code> на
    клавиатуре), или не быть таковым, заставляя пользователя принять решение
    и выбрать одно из действий.`,
    ExampleComponent: () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
          <Box onClick={() => setIsOpen(true)}>
            Нажми на меня чтобы открыть диалог
          </Box>
          <Dialog
            isOpen={isOpen}
            title="Тестовый диалог"
            close={() => setIsOpen(false)}
          >
            Текст диалога
          </Dialog>
        </>
      );
    },
    usage: `<Box onClick={() => setIsOpen(true)}>
    Нажми на меня чтобы открыть диалог
  </Box>
  <Dialog
    isOpen={isOpen}
    title="Тестовый диалог"
    close={() => setIsOpen(false)}
  >
    Текст диалога
  </Dialog>`,
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
  Img: {
    description: `Img, изображение - компонент для вставки на страницу интерактивных (не
      декоративных) картинок во всех поддерживаемых браузером форматах. В
      идеале, все изображения на странице должны иметь возможность быть
      приближенными. Именно эту функцию и реализует компонент Img в EQUIX. Если
      необходимо вставить иконку, мелкое неважное изображение, которое не
      подразумевает приближения, то используйте стандартный html-элемент{" "}
      <code>&lt;img&gt;</code>. Если на странице необходимо иметь одно
      изображение высокого разрешения (более HD+) или десятки и более
      изображений, то следует в целях оптимизации прибегать к встроенному в
      Next.js компоненту <code>Image</code>.`,
    ExampleComponent: () => <Img src="/intro.png" />,
    usage: `<Img src="/intro.png" />`,
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
  Textarea: {
    description: `Textarea, текстовая зона, - поле для ввода текста, используемое в тех
    случаях, когда вводимый текст длиннее 80 символов. В противном случае
    используется строго компонент <Box href="/components/Input">Input</Box>.
    Текстовая зона отличается от него только высотой в несколько строк, а не
    в одну, и возможностью изменения размеров по вертикали, либо
    автоматически, либо в ручную мышью.`,
    ExampleComponent: () => {
      const [value, setValue] = useState("");

      return (
        <Textarea label="Тестовое поле" value={value} onChange={setValue} />
      );
    },
    usage: `<Textarea label="Тестовое поле" value={value} onChange={setValue} />`,
  },
  Video: {
    description: `Video - компонент для вставки видео на страницу. Требует заданной высоты и
    ширины контейнера, а также ссылку на файл-источник.`,
    ExampleComponent: () => <Video height={600} width={400} src="/test.mp4" />,
    usage: `<Video height={600} width={400} src="/test.mp4" />`,
  },
  View: {
    description: `View - вид, представление - вертикальный контейнер для любого содержимого,
    занимающий основную часть экрана. Любая страница имеет хотя бы 1 вью.
    Например, если страница сайта представляет из себя разворот книги, то есть
    просто текст, то <code>body</code> или <code>main</code> этого сайта
    являются вью. Если же слева на странице есть боковое меню, а справа -
    горизонтальный список карточек с похожими статьями, то на странице уже 3
    вью - для каждой колонки разного контента. Вью всегда занимает все
    свободное на экране место. Поскольку EQUIX ограничивает страницы шириной в
    1280px (пикселей), а вью может быть несколько, для них предусмотрены
    следующие размеры: 1x - с максимальной шириной в 320px, 2x - 640px, 3x -
    960px, 4x - 1280px. Например, лендинг как правило состоит из одного вью
    размера 3x и двух баров - хедера и футера - таких же размеров.`,
    ExampleComponent: () => (
      <>
        <View className="w-[320px] border border-accent h-[320px]"></View>
        <View className="w-[640px] border border-accent h-[320px]"></View>
      </>
    ),
    usage: `<View className="w-[320px] border border-accent h-[320px]"></View>
    <View className="w-[640px] border border-accent h-[320px]"></View>`,
  },
};

export default componentsData;
