import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { Card } from "@/equix/components/Card";
import { Row } from "@/equix/components";

const Page = () => (
  <LandingLayout
    sections={[
      {
        heading: "Обзор",
        children: (
          <p>
            Ниже вы можете видеть все компоненты EQUIX - составные части, из
            которых создаются приложения. Большая их часть применима к
            приложениям любой направленности, но некоторые являются частью
            продуктов (например, EQUIX/Данные) и предназначены для использования
            в приложениях соответствующей тематики.
          </p>
        ),
      },
      {
        heading: "Компоненты",
        children: (
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
              <Card key={index}>{component}</Card>
            ))}
          </Row>
        ),
      },
    ]}
  />
);

export default Page;
