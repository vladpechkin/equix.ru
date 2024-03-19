import { FC, HTMLAttributes, ReactNode } from "react";

export const Tr: FC<HTMLAttributes<HTMLTableRowElement>> = (props) => (
  <tr {...props} className="border-b border-gray-100" />
);
