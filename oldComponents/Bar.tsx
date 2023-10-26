import { View } from "./View";

export const Bar = (props) => (
  <View
    {...props}
    className={`px-2 h-auto items-center border-light ${
      props.fixed ? "first:border-b" : ""
    } ${props.className}`}
    dir="h"
  />
);
