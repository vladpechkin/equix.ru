import { Box } from "@/equix/components/Box";
import { H3 } from "@/equix/components/Heading";
import { Icon } from "@/equix/components/Icon";

const Page = () => (
  <>
    <p>
      Icon, иконка, - компонент-прослойка для получения иконок из взаимодействия
      с библиотекой Bootstrap Icons, на которой по умолчанию завязан EQUIX.
      Достаточно найти{" "}
      <Box isInline href="https://icons.getbootstrap.com/">
        на сайте библиотеки
      </Box>{" "}
      нужное изображение и прописать его название (например, search) в аттрибут{" "}
      <code>name</code>.
    </p>
    <H3>Пример:</H3>
    <Icon name="search" />
  </>
);

export default Page;
