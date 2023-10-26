"use client"

export const View = (props: any) => {
  const getWidth = () => {
    switch (props?.size) {
      case 4:
        return "max-w-screen-xl";
      case 3:
        return "max-w-[60rem]";
      case 2:
        return "max-w-screen-sm";
      default:
        return "max-w-xs";
    }
  };
  const Component = props?.as || "div";
  return (
    <Component
      {...props}
      className={`min-h-[3.5rem] h-full w-full flex ${getWidth()} ${
        props.className || ""
      } ${props.dir === "h" ? "flex-row" : "flex-col"}`}
    >
      {props.children}
    </Component>
  );
};
