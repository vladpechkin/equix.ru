import { Col, Row } from "../components";
import { H1 } from "../components/Heading";
import config from "./config";

export const HeroSection = () => {
  const { heroImageSrc, title, description, heading, action } = config;
  return (
    <Row className="justify-center items-enter py-12">
      <Col className="w-full justify-center">
        <H1>{heading}</H1>
        <p>{description}</p>
        {action}
      </Col>
      <img
        className="object-cover rounded max-w-[460px] w-full min-w-0 h-auto"
        src={heroImageSrc}
        alt={title}
      />
    </Row>
  );
};
