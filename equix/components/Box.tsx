"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ElementType, FC, ReactNode } from "react";

interface Props {
  href?: string;
  isStrictHref?: boolean;
  isDimmed?: boolean;
  isDisabled?: boolean;
  isInline?: boolean;
  onClick?: (() => void) | undefined;
  id?: string;
  className?: string;
  as?: ElementType;
  children: ReactNode;
}

export const Box: FC<Props> = (props) => {
  const {
    href,
    isStrictHref,
    isDisabled,
    isDimmed = false,
    onClick,
    isInline,
    className,
    children,
    id,
    as,
  } = props;

  const pathname = usePathname();

  const getIsActiveLink = () => {
    if (href) {
      if (href === "/" || isStrictHref) {
        return pathname === href;
      } else return pathname.includes(href);
    } else return false;
  };

  const getColor = () => {
    if (isDisabled || isDimmed) {
      return "text-gray-400";
    } else if ((href && !getIsActiveLink) || onClick) {
      return "text-accent";
    } else return "";
  };

  const getCursor = () => {
    if (props.isDisabled) {
      return "cursor-not-allowed";
    } else if ((props.href && !getIsActiveLink) || props.onClick) {
      return "cursor-pointer";
    } else return "";
  };

  const getClassName = () => `
    gap-2 rounded-lg focused:outline
    ${
      isInline
        ? `inline-flex ${href ? "hover:underline" : ""} rounded-sm`
        : "flex p-2 min-h-[2.5rem]"
    } 
    ${getIsActiveLink() && "font-semibold"} 
    ${getColor()}
    ${getCursor()}
    ${className || ""}
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
      onClick={onClick}
      id={id}
      children={children}
      href={href as string}
      className={getClassName()}
      target={href?.includes(":") ? "_blank" : undefined}
    />
  );
};

export const Card: FC<Props> = (props) => (
  <Box
    {...props}
    className={`flex-col p-4 border border-border max-w-[460px] ${props.className}`}
  ></Box>
);
