import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { Route } from "../types";

export const NavItem: FC<Route> = ({
  name,
  url,
  entityName
 }) => {
  const { asPath } = useRouter();

  const href = url || `/${entityName}s`

  const isActive = !!((href === "/" && asPath === href) ||
    (href !== "/" && asPath.includes(href as string)))

  const className = `p-2 rounded-lg flex items-center whitespace-nowrap capitalize ${
    isActive ? "focused" : ""
  }`;

  const Element = href ? "a" : "button";

  return (
    <Element
      className={className}
      href={href}
    >
      {name || `${entityName}s`}
    </Element>
  );
};
