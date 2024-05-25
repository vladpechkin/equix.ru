"use client";

import { FC } from "react";
import componentsData from "@/app/components/data/index";
import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { H2, H3 } from "@/equix/components/Heading";
import { renderToString } from "react-dom/server";

interface Props {
  params: { componentName: string };
}

const Page: FC<Props> = (props) => {
  const {
    params: { componentName },
  } = props;

  type ComponentName = keyof typeof componentsData;

  const component = componentsData[componentName as ComponentName];

  if (component) {
    const { description, ExampleComponent, usage } = component;

    return (
      <LandingLayout>
        <H2>{componentName}</H2>
        <p>{description}</p>
        <H3>Пример</H3>
        <ExampleComponent />
        <H3>Код</H3>
        <code>{usage}</code>
        <H3>Как это устроено</H3>
        <code>{renderToString(<ExampleComponent />)}</code>
      </LandingLayout>
    );
  }

  return undefined;
};

export default Page;
