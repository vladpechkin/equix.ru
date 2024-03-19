import { FC } from "react";
import { Row } from "..";
import { Img } from "../Img";
import { BaseInputProps } from "./Base";

export interface ImageProps extends BaseInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const ImageInput: FC<ImageProps> = ({ label, value, onChange }) => (
  <label>
    <span>{label}</span>
    <Row>
      <Img src={value} className="rounded-lg h-[88px] w-[88px]" />
      <textarea
        className="border border-accent rounded-lg w-full p-2 resize-none h-[88px] overflow-hidden"
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
    </Row>
  </label>
);
