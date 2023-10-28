import { FC, ReactNode } from "react";
import { Box, Col, Row } from "./components";
import Image from "next/image";

interface Section {
  heading: string;
  content: ReactNode | ReactNode[];
}

interface Props {
  logoSrc: string;
  links?: ReactNode[];
  title: string;
  description: string;
  heroImageSrc: string;
  sections: Section[];
  siteName: string;
}

export const Landing: FC<Props> = ({
  logoSrc,
  links,
  title: heading,
  description,
  heroImageSrc,
  sections,
  siteName,
}) => (
  <Box
    as="main"
    css="margin: 0 auto; max-width: 944px; width: 100%; padding: 24px 8px; display: flex; flex-direction: column; gap: 5vw; min-height: 100vh; justify-content: center;"
  >
    <Box
      as="header"
      css="display: flex; align-items: center; justify-content: space-between; width: 100%;"
    >
      <img src={logoSrc} />
      {links && <Row>{links}</Row>}
    </Box>
    <Box css="display: grid; grid-template-columns: repeat(auto-fit, minmax(304px, 1fr)); gap: 8px; width: 100%;">
      <Box
        as={Image}
        width={0}
        sizes="100vw"
        css="object-fit: cover; border-radius: 8px; width: 100%;"
        src={heroImageSrc}
        alt={heading}
        height={460}
      />
      <Box css="background: white; height: 460px; border-radius: 8px; padding: 16px; width: 100%; display: flex; justify-content: center; flex-direction: column;">
        <Box as="h1" css="font-weight: 600; font-size: 32px;">
          {heading}
        </Box>
        <Box>{description}</Box>
      </Box>
    </Box>
    {sections.map(({ heading, content }, index) => (
      <Col key={index}>
        <h2>{heading}</h2>
        {Array.isArray(content) ? <Box css="display: grid; grid-template-columns: repeat(auto-fit, minmax(304px, 1fr)); gap: 8px; width: 100%;">{content}</Box> : content}
      </Col>
    ))}
    <Box
      as="footer"
      css="display: flex; align-items: center; gap: 8px; justify-content: space-between; width: 100%; flex-wrap: wrap;"
    >
      <span>© {new Date().getFullYear()} {siteName}</span>
      <span>Создано с помощью <Box as="a" href="https://equix.ru">EQUIX/Лендинг</Box></span>
    </Box>
  </Box>
);
