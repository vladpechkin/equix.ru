"use client";

import { Bar } from "@/equix/components/Bar";
import { Box } from "@/equix/components/Box";
import { H3 } from "@/equix/components/Heading";
import { Input } from "@/equix/components/Input";
import { useState } from "react";

const Page = () => {
  const [messageText, setMessageText] = useState("");
  return (
    <>
      <p>
        Bar - полоса, доска, панель - ограниченный размерами и отделенный от
        основного содержимого страницы контейнер для однотипного контента
        (например, кнопок или ссылок), который может быть либо горизонтальным,
        либо вертикальным. От View панель отличается тем, что, как правило,
        отделен бордером или другой границей, занимает небольшую часть экрана,
        имеет фиксированную высоту (в случае горизонтальной) или ширину (в
        случае вертикальной) и не подразумевает возможность скроллинга
        (прокручивания страницы). Самые частые применения панели - хедер вверху
        сайта, сайдбар сбоку для навигации и зона для ввода и отправки сообщения
        в мессенджерах
      </p>
      <H3>Пример</H3>
      <Bar position="bottom">
        <Input
          placeholder="Введите текст сообщения"
          value={messageText}
          onChange={setMessageText}
        />
        <Box onClick={() => setMessageText("")}>Отправить</Box>
      </Bar>
    </>
  );
};

export default Page;
