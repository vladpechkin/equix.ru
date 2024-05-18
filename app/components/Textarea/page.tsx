"use client";

import { Box } from "@/equix/components/Box";
import { H3 } from "@/equix/components/Heading";
import { Textarea } from "@/equix/components/Textarea";
import { useState } from "react";

const Page = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <p>
        Textarea, текстовая зона, - поле для ввода текста, используемое в тех
        случаях, когда вводимый текст длиннее 80 символов. В противном случае
        используется строго компонент <Box href="/components/Input">Input</Box>.
        Текстовая зона отличается от него только высотой в несколько строк, а не
        в одну, и возможностью изменения размеров по вертикали, либо
        автоматически, либо в ручную мышью.
      </p>
      <H3>Пример:</H3>
      <Textarea label="Тестовое поле" value={value} onChange={setValue} />
    </>
  );
};

export default Page;
