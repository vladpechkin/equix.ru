"use client";

import { InputOption } from "@/equix/types";
import { FC, useState } from "react";
import { Input } from ".";
import { Box } from "../Box";
import { Dialog } from "../Dialog";
import { Icon } from "../Icon";
import { InputBase, InputProps } from "./Base";
import { RadioOption } from "./RadioOption";
import { CheckboxProps } from "./Checkbox";

type OnChange = (value: InputOption | undefined) => void;

export interface RadioProps extends InputProps {
  minOptions?: number;
  options?: InputOption[];
  value?: InputOption;
  onChange: OnChange;
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

  const MAX_COLLAPSED_LENGTH = 10;

  const handleChange = (option: InputOption) => {
    if (options) {
      if (minOptions === 1 && value?.id === option.id) return;

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
        onChange(getOptionToChange());
      }
    }

    if (isDialogOpen) setIsDialogOpen(false);
  };

  const renderOptions = (optionsToRender: InputOption[]) => (
    <div className="flex flex-col border border-accent">
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
    if (isCollapsed)
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
  };

  return (
    <>
      <InputBase as="div" className={`w-full ${className || ""}`} label={label}>
        <div className={`flex w-full flex-col col-1`}>{renderContents()}</div>
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
