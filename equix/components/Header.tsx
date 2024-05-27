import Link from "next/link";
import { Row } from "./Flex";
import { Bar } from "./Bar";
import { Box } from "./Box";
import { FC, ReactNode } from "react";
import { Route } from "../types";
import { Heading } from "./Heading";

interface Props {
  logo: ReactNode;
  routes?: Route[];
  children?: ReactNode;
  siteName?: string;
}

export const Header: FC<Props> = (props) => {
  const { logo, routes, children, siteName } = props;

  return (
    <Bar as="header" position="top" className="justify-between">
      <Heading className="sr-only">{siteName}</Heading>
      <Link href="/" aria-label="Home">
        {logo}
      </Link>
      <Row>
        {routes?.map((route, index) => (
          <Box key={index} {...route}>
            {route.label || route.href}
          </Box>
        ))}
        {children}
      </Row>
    </Bar>
  );
};
