import { DetailedHTMLProps, FC, HTMLAttributes, createElement } from "react";

type Div = FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

export const Row: Div = (props) => (
  <div {...props} className={`flex gap-2 ${props.className}`} />
);

export const Col: Div = (props) => (
  <Row {...props} className={`flex-col ${props.className}`} />
);

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