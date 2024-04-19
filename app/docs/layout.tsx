import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { Box } from "@/equix/components/Box";
import { Card } from "@/equix/components/Card";
import { Sidebar } from "@/equix/components/Sidebar";
import { Col, Row } from "@/equix/components";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <LandingLayout
    sidebarRoutes={[
      {
        href: "/docs",
        label: "Начало работы",
      },
      {
        href: "/docs/css",
        label: "Варианты написания стилей",
      },
    ]}
  >
    {children}
  </LandingLayout>
);

export default Layout;
