import { SmsAuthForm } from "@/equix/components/SmsAuthForm";
import { Textarea } from "@/equix/components/Textarea";
import { Video } from "@/equix/components/Video";
import { View } from "@/equix/components/View";
import { ComponentsData } from "@/equix/types";
import { useState } from "react";

const data: ComponentsData = {
  SmsAuthForm: {
    description: `SmsAuthForm - форма для авторизации (входа/регистрации) с помощью СМС-сообщения. Работает с Bearer-токенами accessToken и refreshToken, а данные хранит в localStorage. Состоит из двух этапов - ввода номера телефона и ввода кода, который на этот номер приходит, после чего компонент по умолчанию перенаправляет на главную страницу.`,
    ExampleComponent: () => (
      <SmsAuthForm
        codeLength={4}
        postPhoneNumber={() => fetch("")}
        postConfirmationCode={() => fetch("")}
      />
    ),
    usage: `<SmsAuthForm
    codeLength={4}
    postPhoneNumber={() => fetch("")}
    postConfirmationCode={() => fetch("")}
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

export default data;
