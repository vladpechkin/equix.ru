"use client";

import { useRouter } from "next/navigation";
import { Box } from "./Box";
import { Row, Col } from ".";
import { Icon } from "./Icon";

export const ErrorPage = () => {
  const router = useRouter();

  return (
    <Col className="items-center justify-center h-screen">
      <p className="font-semibold p-2">
        Что-то пошло не так. Возможно, данная страница была перемещена или
        удала.
      </p>
      <Row className="flex-wrap">
        <Box onClick={() => router.refresh()}>
          <Icon name="arrow-clockwise" />
          Обновить страницу
        </Box>
        <Box onClick={() => router.back()}>
          <Icon name="chevron-left" />
          Вернуться назад
        </Box>
        <Box onClick={() => router.push("/")}>
          <Icon name="house" />
          Вернуться на домашнюю страницу
        </Box>
      </Row>
    </Col>
  );
};
