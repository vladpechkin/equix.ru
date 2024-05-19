"use client";

import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { Card } from "@/equix/components/Box";
import { Row } from "@/equix/components";
import { H2 } from "@/equix/components/Heading";
import componentsData from "./componentsData";

const Page = () => (
  <LandingLayout>
    <H2>Компоненты</H2>
    <p className="max-w-[615px]">
      Ниже вы можете видеть все компоненты EQUIX - составные части, из которых
      создаются приложения.
    </p>
    <Row className="flex-wrap w-full">
      {Object.keys(componentsData).map((componentName, index) => (
        <Card key={index} href={`/components/${componentName}`}>
          {componentName}
        </Card>
      ))}
    </Row>
  </LandingLayout>
);

export default Page;
