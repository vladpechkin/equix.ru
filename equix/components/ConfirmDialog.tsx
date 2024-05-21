import { FC } from "react";

interface Props {
  description: string;
  close: () => void;
  confirmAction: () => void;
}

export const ConfirmDialog: FC<Props> = (props) => {
  const { description, confirmAction, close } = props;

  return (
    <div className="bg-black bg-opacity-50 fixed top-0 left-0 flex items-center justify-center h-full w-full z-20">
      <div className="bg-white font-medium flex flex-col gap-4 p-6 rounded text-center w-80">
        <p>{description}</p>
        <menu className="flex justify-evenly text-indigo-600">
          <button onClick={confirmAction}>Да</button>
          <button onClick={close}>Нет</button>
        </menu>
      </div>
    </div>
  );
};
