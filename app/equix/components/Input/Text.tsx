import { FC } from "react";
import { BaseInputProps, InputBase } from "./Base";
import { Box } from "../Box";
import { Icon } from "..";

export interface TextProps extends BaseInputProps {
  value: string;
  onChange: (value: string) => void;
  size?: number;
  placeholder?: string;
  onClick?: () => void;
}

export const TextInput: FC<TextProps> = ({
  label,
  value,
  onChange,
  className,
  type,
  autoFocus,
  size,
  onClick,
  placeholder,
}) => (
  <InputBase as="label" className="w-full">
    {label && <span className="whitespace-nowrap">{label}</span>}
    <div className="border border-lightAccent rounded-lg flex">
      <input
        value={value}
        type={type}
        className={`p-2 h-10 rounded-lg w-full ${className || ""}`}
        size={size}
        onChange={({ target }) => onChange(target.value)}
        autoFocus={autoFocus}
        placeholder={placeholder}
      />
      {type === 'search' && <Box onClick={onClick}>
        <Icon name="search" />
        Search
      </Box>}
    </div>
  </InputBase>
);
