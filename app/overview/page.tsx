import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { Card } from "@/equix/components/Box";
import { Row } from "@/equix/components";
import { H2 } from "@/equix/components/Heading";

const Page = () => (
  <LandingLayout>
    <H2>Компоненты</H2>
    <p className="max-w-[615px]">
      Ниже вы можете видеть все компоненты EQUIX - составные части, из которых
      создаются приложения. Большая их часть применима к приложениям любой
      направленности, но некоторые являются частью продуктов (например,
      EQUIX/Данные) и предназначены для использования в приложениях
      соответствующей тематики.
    </p>
    <Row className="flex-wrap w-full">
      {[
        "Input",
        "Bar",
        "Box",
        "Header",
        "Img",
        "Map",
        "Sidebar",
        "Textarea",
        "Video",
        "View",
      ].map((component, index) => (
        <Card key={index} href={`/components/${component}`}>
          {component}
        </Card>
      ))}
    </Row>
  </LandingLayout>
);

export default Page;
