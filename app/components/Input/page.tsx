"use client";

import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { H2, H3 } from "@/equix/components/Heading";
import { Input } from "@/equix/components/Input";
import { useState } from "react";

const Page = () => {
  const [value, setValue] = useState("");
  return (
    <LandingLayout>
      <H2>Input</H2>
      <p>
        &lt;input&gt; - инпут, поле ввода - основной интерактивный элемент в
        HTML помимо &lt;a&gt; и &lt;button&gt;. В зависимости от аттрибута{" "}
        <code>type</code> он используется для редактирования текста, даты,
        выбора одного или нескольких значений из списка, переключения между
        опциями и так далее.
      </p>
      <H3>Пример:</H3>
      <Input value={value} onChange={setValue} />
    </LandingLayout>
  );
};
export default Page;
