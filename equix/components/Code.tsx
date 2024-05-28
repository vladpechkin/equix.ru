import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export const Code: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
  const { children } = props;

  return <code className="prose">{children}</code>;
};
