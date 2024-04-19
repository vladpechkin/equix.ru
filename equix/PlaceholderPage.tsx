import Router, { useRouter } from "next/router";
import { Layout } from "./Layout";
import { Box } from "./components/Box";
import { Row, Col, Icon } from "./components";

export const PlaceholderPage = () => {
  const router = useRouter();

  return (
    <Layout className="items-center justify-center flex p-4">
      <Col className="items-center">
        <h2 className="font-semibold p-2">
        This page is under development, check back later.
        </h2>
        <Row className="flex-wrap">
          <Box onClick={() => Router.back()}>
            <Icon name="chevron-left" />
            Go back
          </Box>
          <Box onClick={() => router.push("/acts")}>
            <Icon name="house" />
            Go to homepage
          </Box>
        </Row>
      </Col>
    </Layout>
  );
};
