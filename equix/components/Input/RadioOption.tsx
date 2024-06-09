import { InputOption } from "@/equix/types";
import { capitalize } from "@/equix/utils";
import { FC } from "react";
import { Icon } from "../Icon";

interface Props {
  option?: InputOption;
  handleChange: (option: InputOption | boolean) => void;
  value: InputOption | boolean | undefined;
}

export const RadioOption: FC<Props> = (props) => {
  const { option, handleChange, value } = props;

  const isSwitch = typeof value === "boolean";

  const getIconName = () => {
    if (value === true || (!isSwitch && option && option.id === value?.id)) {
      return "check-circle-fill";
    }

    return "circle";
  };

  return (
    <label
      className={`flex gap-2 w-full ${isSwitch ? "" : "relative p-2"}`}
      onClick={() => handleChange(option || !value)}
    >
      <input
        type="radio"
        checked={
          value === true || (!isSwitch && option && value?.id === option.id)
        }
        onChange={() => ""}
        className="w-full top-0 left-0 h-full absolute opacity-0"
      />
      <Icon name={getIconName()} className="text-accent" />
      {option
        ? capitalize(option.name.toLowerCase()).replaceAll("_", " ")
        : undefined}
    </label>
  );
};
