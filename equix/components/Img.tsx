import { DetailedHTMLProps, FC, ImgHTMLAttributes, useState } from "react";

export const Img: FC<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = (props) => {
  const { className } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);

  const getClassName = () => {
    if (isExpanded) {
      return "h-full";
    } else if (className) {
      return className;
    } else return "";
  };

  return (
    <div
      className={`${
        isExpanded
          ? "fixed flex items-center justify-center top-0 left-0 h-full w-full bg-black/50 p-2 z-10"
          : "contents"
      }`}
      onClick={handleClick}
    >
      <img
        {...props}
        className={`rounded-lg border border-accent ${getClassName()}`}
      />
    </div>
  );
};
