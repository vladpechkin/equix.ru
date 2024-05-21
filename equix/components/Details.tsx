import { FC, ReactNode, useState } from "react";

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
      className="w-full"
    >
      <summary
        className="whitespace-nowrap list-none flex items-center gap-2 justify-between mb-2 w-full"
        onClick={() => setOpen(!isOpen)}
      >
        {summary} <i className={`bi bi-chevron-${isOpen ? "up" : "down"}`}></i>
      </summary>
      {children}
    </details>
  );
};
