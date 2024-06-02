import Link from "next/link";
import { Row } from "./Flex";
import { Bar } from "./Bar";
import { Box } from "./Box";
import { FC, ReactNode } from "react";
import { Route } from "../types";
import { H1 } from "./Heading";

interface Props {
  logo: ReactNode;
  routes?: Route[];
  children?: ReactNode;
  appName?: string;
}

export const Header: FC<Props> = (props) => {
  const { logo, routes, children, appName } = props;

  return (
    <Bar as="header" position="top" className="justify-between">
      <H1 className="sr-only">{appName}</H1>
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
