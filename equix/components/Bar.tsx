import { ElementType, FC, ReactNode } from "react";
import { Row } from ".";

interface Props {
  className?: string;
  as?: ElementType;
  position: "top" | "bottom" | "left" | "right";
  children?: ReactNode;
}

export const Bar: FC<Props> = (props) => {
  const { position, className, children, as } = props;

  const Element = as || "div";

  const getBorder = () => {
    switch (position) {
      case "top":
        return "border-b";
      case "bottom":
        return "border-t";
      case "left":
        return "border-r";
      case "right":
        return "border-l";
    }
  };

  const getRowDirection = () => {
    if (position === "top" || position === "bottom") {
      return "flex-row items-center";
    } else return "flex-col";
  };

  const getBarWidth = () => {
    if (position === "top" || position === "bottom") {
      return "w-full";
    } else return "";
  };

  return (
    <Element
      {...props}
      className={`border-border flex items-center justify-center shrink-0 ${getBarWidth()} ${getBorder()}`}
    >
      <Row
        className={`p-2 min-h-[56px] min-w-[56px] max-w-[944px] h-full w-full ${getRowDirection()} ${
          className || ""
        }`}
      >
        {children}
      </Row>
    </Element>
  );
};
