import { H3 } from "@/equix/components/Heading";
import { Video } from "@/equix/components/Video";

const Page = () => (
  <>
    <p>
      Video - компонент для вставки видео на страницу. Требует заданной высоты и
      ширины контейнера, а также ссылку на файл-источник.
    </p>
    <H3>Пример:</H3>
    <Video height={600} width={400} src="/test.mp4" />
  </>
);

export default Page;
