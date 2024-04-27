"use client";

import { H3 } from "@/equix/components/Heading";
import { Input } from "@/equix/components/Input";
import { useState } from "react";

const Page = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <p>
        &lt;input&gt; - инпут, поле ввода - основной интерактивный элемент в
        HTML помимо &lt;a&gt; и &lt;button&gt;. В зависимости от аттрибута{" "}
        <code>type</code> он используется для редактирования текста, даты,
        выбора одного или нескольких значений из списка, переключения между
        опциями и так далее. Реализация Input в EQUIX лишь стилизует его и
        добавляет дополнительные аргументы для более простого взаимодействия.
      </p>
      <H3>Пример:</H3>
      <Input label="Тестовое поле" value={value} onChange={setValue} />
    </>
  );
};
export default Page;
