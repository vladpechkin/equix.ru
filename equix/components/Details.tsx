import { FC, ReactNode, useState } from "react";
import { Icon } from "./Icon";

interface Props {
  summary: string;
  children: ReactNode;
  open?: boolean;
}

export const Details: FC<Props> = (props) => {
  const { summary, children, open = false } = props;
  const [isOpen, setOpen] = useState(open);

  return (
    <details
      open={isOpen ? true : undefined}
      onClick={(event) => event.preventDefault()}
      className="w-full border rounded"
    >
      <summary
        className="whitespace-nowrap list-none flex items-center gap justify-between w-full p"
        onClick={() => setOpen(!isOpen)}
      >
        {summary} <Icon name={`chevron-${isOpen ? "up" : "down"}`} className="text-accent w-6 h-6 text-xl" />
      </summary>
      {children}
    </details>
  );
};
