"use client";

import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { H2 } from "@/equix/components/Heading";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props) => {
  const { children } = props;
  const pathname = usePathname();

  return (
    <LandingLayout>
      <H2>{pathname.split("/").pop()}</H2>
      {children}
    </LandingLayout>
  );
};

export default Layout;
