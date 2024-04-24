import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { getAllMarkdownFiles } from "@/lib/api";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const posts = await getAllMarkdownFiles();
  return (
    <LandingLayout
      sidebarRoutes={posts.map((post) => ({
        href: post.realId,
        label: post.title,
      }))}
    >
      {children}
    </LandingLayout>
  );
};

export default Layout;
