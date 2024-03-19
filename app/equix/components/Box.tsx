import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

interface Props {
  href?: string;
  isDimmed?: boolean;
  isDisabled?: boolean;
  isInline?: boolean;
  onClick?: () => void;
  className?: string;
  as?: string;
  children: ReactNode;
}

export const Box: FC<Props> = (props) => {
  const {
    href,
    isDisabled,
    isDimmed = false,
    onClick,
    isInline,
    className,
    children,
    as
  } = props
  const router = useRouter();

  const isCurrentPath =
    href &&
    (href === "/" ? router.pathname === href : router.pathname.includes(href));

  const color =
    isDisabled || isDimmed
      ? "text-gray-400"
      : (href && !isCurrentPath) || onClick
      ? "text-accent"
      : "";

  const getClassName = () => `
    gap-2 items-stretch rounded-lg
    ${
      isInline
        ? `inline-flex ${href ? "hover:underline" : ""} rounded-sm`
        : "flex p-2 min-h-[2.5rem]"
    } 
    ${isCurrentPath && "font-semibold"}   ${className || ""} 
    ${color}
    `;

  const getElement = () => {
    switch (true) {
      case !!href:
        return Link;
      case href && href?.includes(":"):
        return "a";
      case !!onClick:
        return "button";
      case typeof children === "string":
        return "p";
      default:
        return "div";
    }
  };

  const Element = as || getElement();

  return (
    <Element
      {...props}
      href={href as string}
      className={getClassName()}
      target={href?.includes(":") ? "_blank" : undefined}
    >
      {children}
    </Element>
  );
};
