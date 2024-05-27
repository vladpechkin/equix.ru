import { ErrorPage } from "@/equix/components/ErrorPage";
import { PasswordProvider } from "@/equix/components/PasswordProvider";
import { getDictionary } from "../../dictionaries";
import { Props } from "next/script";
import { FC } from "react";

const Page: FC<Props> = async (props) => {
  const {
    params: { lang },
  } = props;
  const dictionary = await getDictionary(lang);

  return (
    <PasswordProvider password="12345678" message={dictionary.message}>
      <ErrorPage />
    </PasswordProvider>
  );
};

export default Page;
