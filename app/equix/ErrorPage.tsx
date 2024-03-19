import { useRouter } from "next/router";
import { Layout } from "../equix/Layout";
import { Box } from "./components/Box";
import { Row, Col, Icon } from "./components";

export const ErrorPage = () => {
  const router = useRouter();

  return (
    <Layout className="items-center justify-center flex p-4">
      <Col className="items-center">
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
    </Layout>
  );
};
