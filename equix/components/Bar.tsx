import { ElementType, FC, ReactNode } from "react";
import { Row } from "./Flex";

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
      case "bottom":
        return "border-t";
      case "left":
        return "border-r";
      case "right":
        return "border-l";
      default:
        return "border-b";
    }
  };

  const getRowDirection = () => {
    if (position === "top" || position === "bottom") {
      return "flex-row items-center";
    }

    return "flex-col";
  };

  const getBarWidth = () => {
    if (position === "top" || position === "bottom") {
      return "w-full";
    }

    return "";
  };

  return (
    <Element
      {...props}
      className={`flex items-center justify-center shrink-0 ${getBarWidth()} ${getBorder()}`}
    >
      <Row
        className={`p min-h-[56px] min-w-[56px] max-w-[960px] h-full w-full ${getRowDirection()} ${
          className || ""
        }`}
      >
        {children}
      </Row>
    </Element>
  );
};
