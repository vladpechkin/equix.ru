import { Box } from "@/equix/components/Box";
import { H3 } from "@/equix/components/Heading";
import { GeoMap } from "@/equix/components/GeoMap";

const Page = () => (
  <>
    <p>
      Map - компонент для вставки карты на страницу. По умолчанию используется
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
      стандартное не устраивает).
    </p>
    <H3>Пример:</H3>
    <GeoMap
      apiKey={process.env["API_KEY"] || ""}
      center={{ lat: 50, lng: 50 }}
      zoom={10}
    />
    <H3>Код:</H3>
    <code>{`
      <GeoMap
        apiKey={process.env.API_KEY || ""}
        center={{ lat: 50, lng: 50 }}
        zoom={10}
      />
    `}</code>
  </>
);

export default Page;
