"use client";

import { FC } from "react";
import { Col } from "../components/Flex";
import { H1 } from "../components/Heading";
import { LandingLayout, LandingLayoutProps } from "./LandingLayout";
import defaultConfig from "./config";

export const LandingPage: FC<LandingLayoutProps> = (props) => {
  const { config = defaultConfig } = props;
  const { heading, description, action, hero } = config;

  return (
    <LandingLayout {...props}>
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(304px,456px))] gap-4 py-12">
        <Col className="w-full max-w-[460px] justify-center">
          <H1>{heading}</H1>
          <p>{description}</p>
          {action || null}
        </Col>
        <div className="rounded max-w-[460px] w-full min-w-0 h-auto overflow-hidden">
          {hero}
        </div>
      </div>
    </LandingLayout>
  );
};
