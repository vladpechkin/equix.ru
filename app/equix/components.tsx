import { FC, ReactNode } from "react";
import { cssToStyle } from "./utils";

export const Box: FC<any> = (props) => {
  const Element = props.as || "div";
  const css = `${props.href ? "color: #5162ff;" : ""}${props.css || ""}`
  return (
    // @ts-ignore
    <Element style={cssToStyle(css)} {...props} target={props.as === "a" ? "_blank" : undefined} />
  );
};

export const Col: FC<{ children: ReactNode }> = (props) => (
  <Box css="display: flex; flex-direction: column; gap: 8px;" {...props} />
);

export const Row: FC<{ children: ReactNode }> = (props) => (
  <Box css="display: flex; gap: 8px;" {...props} />
);
