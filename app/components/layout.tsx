"use client";

import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { H2 } from "@/equix/components/Heading";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <LandingLayout>
      <H2>{pathname.split("/").pop()}</H2>
      {children}
    </LandingLayout>
  );
};
export default Layout;
