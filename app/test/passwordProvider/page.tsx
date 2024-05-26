import { ErrorPage } from "@/equix/components/ErrorPage";
import { PasswordProvider } from "@/equix/components/PasswordProvider";

const Page = () => (
  <PasswordProvider
    password="12345678"
    message="Введите пароль. Подсказка: 12345678."
  >
    <ErrorPage />
  </PasswordProvider>
);

export default Page;
