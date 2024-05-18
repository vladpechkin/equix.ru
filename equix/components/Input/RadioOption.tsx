import { InputOption } from "@/equix/types";
import { capitalize } from "@/equix/utils";
import { FC } from "react";
import { Icon } from "../Icon";

interface Props {
  option: InputOption;
  isSwitch: boolean;
  handleChange: (option: InputOption) => void;
  value?: InputOption | undefined;
}

export const RadioOption: FC<Props> = (props) => {
  const { option, isSwitch, handleChange, value } = props;

  const getIconName = () => {
    if (value?.name === "true" || option.id === value?.id) {
      return "check-circle-fill";
    } else return "circle";
  };

  return (
    <label
      className={`flex gap-2 w-full ${isSwitch ? "" : "relative p-2"}`}
      onClick={() => handleChange(option)}
    >
      <input
        type="radio"
        checked={value?.id === option.id}
        onChange={() => {}}
        className="w-full top-0 left-0 h-full absolute opacity-0"
      />
      <Icon name={getIconName()} className="text-accent" />
      {option.name !== "true"
        ? capitalize(option.name.toLowerCase()).replaceAll("_", " ")
        : null}
    </label>
  );
};
