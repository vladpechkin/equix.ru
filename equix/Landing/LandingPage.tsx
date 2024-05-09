import { FC } from "react";
import { Col, Row } from "../components";
import { H1 } from "../components/Heading";
import { LandingLayout, LandingLayoutProps } from "./LandingLayout";
import defaultConfig from "./config";

export const LandingPage: FC<LandingLayoutProps> = (props) => {
  const { config = defaultConfig } = props;
  const { heading, description, action, hero } = config;
  return (
    <LandingLayout {...props}>
      <Row className="justify-center items-enter py-12">
        <Col className="w-full justify-center">
          <H1>{heading}</H1>
          <p>{description}</p>
          {action}
        </Col>
        <div className="rounded max-w-[460px] w-full min-w-0 h-auto overflow-hidden">
          {hero}
        </div>
      </Row>
    </LandingLayout>
  );
};
