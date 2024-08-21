import { Box } from "@/equix/components/Box";
import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <LandingLayout
      sections={[
        { heading: "Шаблон", children },
        {
          heading: "Заинтересованы в применении EQUIX в своем проекте?",
          children: (
            <Box href="/profile">Получить инструкции в личном кабинете</Box>
          ),
        },
      ]}
    ></LandingLayout>
  );
};

export default Layout;
