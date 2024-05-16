import { ChangeEventHandler, FC } from "react";
import { Box } from "../Box";
import { Icon } from "../Icon";
import { InputBase, InputProps } from "./Base";

export interface TextProps extends InputProps {
  value: string;
  onChange: (value: string) => void;
  size?: number;
  placeholder?: string;
  onClick?: () => void;
}

export const TextInput: FC<TextProps> = (props) => {
  const {
    label,
    value,
    onChange,
    className,
    type,
    autoFocus,
    size,
    onClick,
    placeholder,
  } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    onChange(target.value);

  return (
    <InputBase as="label" className="w-full" label={label}>
      <div className="border border-borderAccent rounded-lg flex">
        <input
          value={value}
          type={type}
          className={`p-2 h-10 rounded-lg w-full ${className || ""}`}
          size={size}
          onChange={handleChange}
          autoFocus={autoFocus}
          placeholder={placeholder || `Enter ${label}`}
        />
        {type === "search" ? (
          <Box onClick={onClick}>
            <Icon name="search" />
            Поиск
          </Box>
        ) : null}
      </div>
    </InputBase>
  );
};
