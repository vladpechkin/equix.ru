import { Box } from "@/equix/components/Box";
import { Col, Row } from "@/equix/components/Flex";
import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { LandingSection } from "@/equix/Landing/LandingSection";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <LandingLayout>
      {children}
      <LandingSection heading="Заинтересованы в применении EQUIX в своем проекте?">
        <Col>
          <p>Выберите вашу роль в проекте</p>
          <Row>
            <Box href="tryOut/#prog">Программист</Box>
            <Box href="tryOut/#prog">Дизайнер</Box>
            <Box href="tryOut/#prog">Другой специалист</Box>
          </Row>
        </Col>
      </LandingSection>
    </LandingLayout>
  );
};

export default Layout;
