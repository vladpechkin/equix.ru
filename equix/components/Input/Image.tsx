"use client";

import { ChangeEventHandler, FC } from "react";
import { Row } from "..";
import { Img } from "../Img";
import { InputBase, InputProps } from "./Base";

export interface ImageProps extends InputProps {
  value: string;
  onChange: (value: string) => void;
}

export const ImageInput: FC<ImageProps> = (props) => {
  const { label, value, onChange } = props;

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) =>
    onChange(target.value);

  return (
    <InputBase label={label} as="label">
      <Row>
        <Img src={value} className="rounded-lg" height={88} width={88} />
        <textarea
          className="border border-accent rounded-lg w-full p-2 resize-none h-[88px] overflow-hidden"
          value={value}
          onChange={handleChange}
        />
      </Row>
    </InputBase>
  );
};
