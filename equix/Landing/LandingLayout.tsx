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
import { Route, Section } from "../types";
import { LandingSection } from "./LandingSection";
import defaultConfig from "./config";
import { Region } from "../components/Heading";
import { ConditionalWrapper } from "../utils";

export interface LandingLayoutProps {
  sections?: Section[];
  className?: string;
  children?: ReactNode;
  sidebarRoutes?: Route[];
  config?: {
    title?: string;
    heading?: string;
    description?: string;
    logo?: ReactNode;
    action?: string;
    routes?: Route[];
    hero?: ReactNode;
    appName: string;
    appOwnerName?: string;
    supportsDarkTheme?: boolean;
  };
}

export const LandingLayout: FC<LandingLayoutProps> = (props) => {
  const {
    className,
    sections,
    children,
    sidebarRoutes,
    config = defaultConfig,
  } = props;
  const {
    logo,
    routes,
    appName,
    appOwnerName,
    supportsDarkTheme = false,
  } = config;

  const getRoutesFromSection = () =>
    sections?.map(
      ({ heading }) =>
        heading && {
          href: `#${heading.replaceAll(" ", "_")}`,
          label: heading,
        }
    ) as Route[];

  return (
    <ConditionalWrapper
      condition={supportsDarkTheme}
      wrap={(children) => <DarkThemeProvider>{children}</DarkThemeProvider>}
    >
      <Region
        className={`dark:bg-dark dark:text-light dark:border-border-dark bg-light text-dark border-border print:bg-white print:text-black min-h-screen flex flex-col items-center  
      ${className || ""}`}
      >
        <Header
          appName={appName}
          logo={logo}
          routes={routes || getRoutesFromSection()}
        />
        <div className="sm:flex grow max-w-[960px] w-full">
          {sidebarRoutes ? <Sidebar routes={sidebarRoutes} /> : undefined}
          <View as="main" className="items-center w-full">
            <Col className="w-full h-full p sm:p-4">
              {children}
              {sections?.map((section, index) => (
                <LandingSection {...section} key={index} />
              ))}
            </Col>
          </View>
        </div>
        <Bar
          as="footer"
          className="justify-between flex-wrap flex-col-reverse sm:flex-row"
          position="bottom"
        >
          <Box>
            © {new Date().getFullYear()} {appOwnerName}
          </Box>
          <Box isInline>
            Создано с помощью{" "}
            <Box as="a" isInline href="https://equix.ru">
              EQUIX/Лендинг
            </Box>
          </Box>
          {supportsDarkTheme ? <DarkThemeToggle /> : undefined}
        </Bar>
      </Region>
    </ConditionalWrapper>
  );
};
