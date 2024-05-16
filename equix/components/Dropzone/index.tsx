import { ChangeEvent, DragEventHandler, FC, useRef, useState } from "react";
import { DropzoneForm } from "./Dropzone";

interface Props {
  label?: string;
  isRequired?: boolean;
  value: string;
  onChange: (value: string) => void;
  filetype?: "image" | "video";
  className?: string;
  url: string;
}

export const Dropzone: FC<Props> = (props) => {
  const {
    label,
    isRequired,
    value,
    filetype = "image",
    className,
    onChange,
    url,
  } = props;

  const [isDragActive, setIsDragActive] = useState(false);
  const inputRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFile = (file: File) => {
    setIsLoading(true);
    let data = new FormData();
    data.append("file", file);
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        onChange(res.url);
        setIsLoading(false);
      });
  };

  const handleDrag: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setIsDragActive(true);
    } else if (event.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragActive(false);
    if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
      handleFile(event.dataTransfer.files[0]);
    }
  };

  const handleFileChangeWithClick = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      handleFile(event.target.files[0]);
    }
  };

  const onButtonClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <DropzoneForm
      label={label}
      isRequired={isRequired}
      handleDrag={handleDrag}
      value={value}
      className={className}
      inputRef={inputRef}
      isLoading={isLoading}
      handleFileChangeWithClick={handleFileChangeWithClick}
      onButtonClick={onButtonClick}
      isDragActive={isDragActive}
      handleDrop={handleDrop}
      filetype={filetype}
      onChange={onChange}
    />
  );
};
// Пример использования
// <Dropzone
//   label="Clip"
//   isRequired
//   filetype="video"
//   value={clip.video.video}
//   onChange={(value) =>
//       setClip((prevState) => ({
//       ...prevState,
//       video: { ...prevState.video, video: value },
//     }))
//   }
// />
