import { FC, ReactNode } from "react";
import { cssToStyle } from "./utils";

export const Box: FC<any> = (props) => {
  const Element = props.as || "div";
  const css = `${props.href ? "color: #5500ff;" : ""}${props.css || ""}`
  return (
    // @ts-ignore
    <Element style={cssToStyle(css)} id={props.id} {...props} target={props.as === "a" ? "_blank" : undefined} />
  );
};

export const Col: FC<any> = (props) => (
  <Box css="display: flex; flex-direction: column; gap: 2.5vw;" {...props} />
);

export const Row: FC<any> = (props) => (
  <Box css="display: flex; gap: 2.5vw;" {...props} />
);
