"use client";

import { InputOption } from "@/equix/types";
import { FC, useState } from "react";
import { Input } from ".";
import { Box } from "../Box";
import { Dialog } from "../Dialog";
import { Icon } from "../Icon";
import { InputBase } from "./Base";
import { RadioOption } from "./RadioOption";
import { CheckboxProps } from "./Checkbox";

type OnChange = (value: InputOption | boolean) => void;

type NullableOnChange = (value: InputOption | boolean | undefined) => void;

export interface RadioProps
  extends Omit<CheckboxProps, "maxOptions" | "value" | "options" | "onChange"> {
  minOptions?: number;
  options?: InputOption[];
  value: InputOption | boolean;
  onChange: OnChange | NullableOnChange;
  isCollapsed?: boolean;
}

export const Radio: FC<RadioProps> = (props) => {
  const {
    label,
    minOptions = 0,
    options,
    onChange,
    value,
    className,
    isCollapsed = false,
  } = props;

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isSwitch = typeof value === "boolean";

  const MAX_COLLAPSED_LENGTH = 10;

  const handleChange = (option: InputOption | boolean) => {
    if (!isSwitch && options && typeof option !== "boolean") {
      if (
        minOptions === 1 &&
        typeof option !== "boolean" &&
        value?.id === option.id
      )
        return;

      const getOptionToChange = () => {
        if (value?.id === option.id && options[0]) {
          return options[0].name === "true"
            ? ({
                id: "1",
                name: "false",
              } as InputOption)
            : undefined;
        }

        return option;
      };

      if (options[0]) {
        (onChange as NullableOnChange)(getOptionToChange());
      }
    }

    onChange(!option);

    if (isDialogOpen) setIsDialogOpen(false);
  };

  const renderOptions = (optionsToRender: InputOption[]) => (
    <div className="flex flex-col">
      {optionsToRender?.length > 0 ? (
        optionsToRender.map((option, index) => (
          <RadioOption
            handleChange={handleChange}
            key={index}
            option={option}
            value={value}
          />
        ))
      ) : (
        <span className="text-gray-400">Nothing found</span>
      )}
    </div>
  );

  const renderContents = () => {
    if (!isSwitch && isCollapsed)
      return (
        <Box
          onClick={() => setIsDialogOpen(true)}
          className="text-black justify-between"
        >
          <span>{value?.name}</span>
          <Icon name="chevron-down" className="text-accent" />
        </Box>
      );

    if (options) return renderOptions(options);

    return <RadioOption handleChange={handleChange} value={value} />;
  };

  return (
    <>
      <InputBase
        as="div"
        className={`${isSwitch ? "relative flex gap-2 h-full items-center" : ""} ${className || ""}`}
        label={label}
      >
        <div
          className={`flex flex-col ${isSwitch ? "order-[-1]" : "border border-borderAccent rounded-lg"} col-1`}
        >
          {renderContents()}
        </div>
      </InputBase>
      <Dialog
        title={label!}
        isOpen={isDialogOpen}
        close={() => setIsDialogOpen(false)}
      >
        {options && options.length > MAX_COLLAPSED_LENGTH && (
          <Input
            type="search"
            value={searchQuery}
            onChange={setSearchQuery}
            autoFocus
          />
        )}
        {options &&
          renderOptions(
            options.filter((option) =>
              option?.name?.toLowerCase().includes(searchQuery?.toLowerCase())
            )
          )}
      </Dialog>
    </>
  );
};
