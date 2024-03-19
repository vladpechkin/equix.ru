"use client"
import { FC, ReactNode } from "react";
import { Box, Col, Row } from "./components";
import Link from "next/link";

interface Section {
  heading?: string;
  content: ReactNode | ReactNode[];
}

interface Props {
  logo: string | ReactNode;
  links?: ReactNode[];
  title: string;
  description: string;
  heroImageSrc: string;
  sections: Section[];
  siteName: string;
  css?: string;
}

export const Landing: FC<Props> = ({
  logo,
  links,
  title: heading,
  description,
  heroImageSrc,
  sections,
  siteName,
  css
}) => (
  <Box
    as="main"
    css={`margin: 0 auto; max-width: 944px; padding: 5vw; display: flex; flex-direction: column; gap: 5vw; min-height: 100vh; justify-content: center; ${css}`}
  >
    <Box
      as="header"
      css="display: flex; align-items: center; justify-content: space-between; width: 100%;"
    >
      {logo}
      <Row>{links || sections.map(({ heading }, index) => heading && <Box as={Link} href={`#${heading.replaceAll(" ", "_")}`} key={index}>{heading}</Box>)}</Row>
    </Box>
    <Box css="display: grid; grid-template-columns: repeat(auto-fit, minmax(304px, 1fr)); gap: 2.5vw; width: 100%;">
      <Box
        as="img"
        css="object-fit: cover; border-radius: 8px; width: 100%;"
        src={heroImageSrc}
        alt={heading}
      />
      <Box css="background: hsla(260, 100%, 50%, 5%); border-radius: 8px; padding: 2.5vw; display: flex; justify-content: center; flex-direction: column; gap: 2.5vw;">
        <Box as="h1" css="font-weight: 600; font-size: 32px; width: 100%">
          {heading}
        </Box>
        <Box css="width: 100%">{description}</Box>
      </Box>
    </Box>
    {sections.map(({ heading, content }, index) => (
      <Box key={index} id={heading?.replaceAll(" ", "_")} css="display: flex; justify-content: space-between; width: 100%;">
        <Box as="h2">{heading}</Box>
        {Array.isArray(content) ? <Box css="display: grid; grid-template-columns: repeat(auto-fit, minmax(304px, 1fr)); gap: 2.5vw; width: 100%;">{content}</Box> : content}
      </Box>
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
