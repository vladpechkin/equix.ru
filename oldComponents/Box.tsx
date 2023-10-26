import Link from "next/link";
import { useRouter } from "next/router";

export const Box = (props) => {
  const router = useRouter();

  const isCurrentPath =
    props.href === "/"
      ? router.pathname === props.href
      : router.pathname.includes(props?.href);

  const color = props.primary
    ? "bg-blue-800 text-[#fff]"
    : props.isDisabled || props.dimmed
    ? "text-gray"
    : (props.href && !isCurrentPath) || props.onClick
    ? "text-blue-800"
    : "";

  const cursor = props.isDisabled
    ? "cursor-not-allowed"
    : (props.href && !isCurrentPath) || props.onClick
    ? "cursor-pointer"
    : "";

  const className = `
    gap-2 items-center rounded-lg active:outline 
    ${cursor} 
    ${
      props.inline
        ? `inline-flex ${props.href ? "hover:underline" : ""} rounded-sm`
        : "flex p-2 min-h-[2.5rem]"
    } 
    ${isCurrentPath && "font-semibold"}   ${props.className || ""} 
    ${color}
    `;

  const getElement = () => {
    switch (true) {
      case !!props.href:
        return Link;
      case props.href && props.href?.includes(":"):
        return "a";
      case props.onClick:
        return "button";
      case typeof props.children === "string":
        return "p";
      default:
        return "div";
    }
  };

  const Element = props.as || getElement();

  return (
    <Element
      {...props}
      className={className}
      target={props.href?.includes(":") ? "_blank" : undefined}
    >
      {props.children}
    </Element>
  );
};
