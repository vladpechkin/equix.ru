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

export const TextInput = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => <input type="text" value={value} onChange={(e) => onChange(e.target.value)} style={cssToStyle("display: inline; width: 400px; border: none; border-bottom: 1px solid #5500ff; background: transparent; color: inherit; font-family: inherit; font-size: inherit;")} />

// NEWCODE

import { DetailedHTMLProps, HTMLAttributes, createElement } from "react";

type Div = FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

interface I extends HTMLAttributes<HTMLElement> {
  name: string;
}

export const Icon: FC<I> = (props) => (
  <i {...props} className={`bi bi-${props.name} ${props.className}`}></i>
);

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading: FC<HeadingProps> = ({ level, ...props }) =>
  createElement(`h${level}`, props)