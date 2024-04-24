import { useRouter } from "next/router";
import { Box } from "./Box";
import { Row, Col } from ".";
import { Icon } from "./Icon";

export const ErrorPage = () => {
  const router = useRouter();

  return (
    <Col className="items-center justify-center">
      <h2 className="font-semibold p-2">
        Something went wrong. The page may have been moved or deleted.
      </h2>
      <Row className="flex-wrap">
        <Box onClick={() => router.reload()}>
          <Icon name="arrow-clockwise" />
          Reload page
        </Box>
        <Box onClick={() => router.back()}>
          <Icon name="chevron-left" />
          Go back
        </Box>
        <Box onClick={() => router.push("/")}>
          <Icon name="house" />
          Go to homepage
        </Box>
      </Row>
    </Col>
  );
};
