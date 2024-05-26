"use client";

import { FC, ReactNode } from "react";
import { Bar } from "../components/Bar";
import { Box } from "../components/Box";
import {
  DarkThemeProvider,
  DarkThemeToggle,
} from "../components/DarkThemeProvider";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { View } from "../components/View";
import { Col } from "../components/Flex";
import { Route } from "../types";
import { LandingSection } from "./LandingSection";
import defaultConfig from "./config";
import { Section } from "../types";
import ErrorPageProvider from "../components/ErrorPageProvider";

export interface LandingLayoutProps {
  sections?: Section[];
  className?: string;
  children?: ReactNode;
  sidebarRoutes?: Route[];
  config?: Partial<{
    title: string;
    heading: string;
    description: string;
    logo: ReactNode;
    action: string;
    routes: Route[];
    hero: ReactNode;
    siteName: string;
  }>;
}

export const LandingLayout: FC<LandingLayoutProps> = (props) => {
  const {
    className,
    sections,
    children,
    sidebarRoutes,
    config = defaultConfig,
  } = props;
  const { logo, routes, siteName } = config;

  const getRoutesFromSection = () =>
    sections?.map(
      ({ heading }) =>
        heading && {
          href: `#${heading.replaceAll(" ", "_")}`,
          label: heading,
        }
    ) as Route[];

  return (
    <ErrorPageProvider>
      <DarkThemeProvider>
        <div
          className={`dark:bg-dark dark:text-light bg-light text-dark min-h-screen flex flex-col items-center  
      ${className || ""}`}
        >
          <Header logo={logo} routes={routes || getRoutesFromSection()} />
          <div className="flex grow max-w-[944px] w-full">
            {sidebarRoutes ? <Sidebar routes={sidebarRoutes} /> : undefined}
            <View as="main" className="items-center w-full">
              <Col className="w-full h-full p">
                {children}
                {sections?.map((section, index) => (
                  <LandingSection {...section} key={index} />
                ))}
              </Col>
            </View>
          </div>
          <Bar as="footer" className="justify-between" position="bottom">
            <div>
              © {new Date().getFullYear()} {siteName}
            </div>
            <div>
              Создано с помощью{" "}
              <Box as="a" isInline href="https://equix.ru">
                EQUIX/Лендинг
              </Box>
            </div>
            <DarkThemeToggle />
          </Bar>
        </div>
      </DarkThemeProvider>
    </ErrorPageProvider>
  );
};
