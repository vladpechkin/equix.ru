import { Box } from "@/equix/components/Box";
import { Col } from "@/equix/components/Flex";
import { H2 } from "@/equix/components/Heading";

const Page = () => (
  <Col>
    <H2>Документация EQUIX</H2>
    <p>
      Для просмотра документации войдите в{" "}
      <Box isInline href="/profile">
        личный кабинет
      </Box>
    </p>
  </Col>
);

export default Page;
