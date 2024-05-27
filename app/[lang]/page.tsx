import { FC } from "react";
import { getDictionary } from "./dictionaries";

interface Props {
  params: { lang: string };
}

const Page: FC<Props> = async (props) => {
  const {
    params: { lang },
  } = props;
  const dictionary = await getDictionary(lang);

  return <button>{dictionary.nothingFound}</button>;
};

export default Page;
