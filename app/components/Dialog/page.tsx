"use client";

import { Box } from "@/equix/components/Box";
import { Dialog } from "@/equix/components/Dialog";
import { H3 } from "@/equix/components/Heading";
import { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <p>
        Dialog - всплывающее диалоговое окно, стандартный способ получения
        ответа от пользователя. Оно всегда имеет заголовок и может иметь любое
        наполнение. Также диалог может быть закрываемым (пользователь может в
        любой момент отменить взаимодействие, выйти из диалога и вернуться назад
        по нажатию в на кнопку выхода или клавишу <code>Escape</code> на
        клавиатуре), или не быть таковым, заставляя пользователя принять решение
        и выбрать одно из действий.
      </p>
      <H3>Пример:</H3>
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
};

export default Page;
