"use client";

import { Box } from "@/equix/components/Box";
import { Col, Row } from "@/equix/components/Flex";
import { H3 } from "@/equix/components/Heading";

const Page = () => (
  <Col className="w-full">
    <p>Блог/новостной портал</p>
    <p>
      Ниже находятся интерактивные редактор кода и маленькая копия этого сайта,
      созданная этим кодом, который вы можете редактировать и в режиме реального
      времени видеть, как в EQUIX/Блог вносятся изменения.
    </p>
    <H3>
      EQUIX/Блог все еще находится в разработке, поэтому сейчас, к сожалению,
      его попробовать пока нельзя. Однако, другие шаблоны уже готовы:
    </H3>
    <Row>
      <Box href="/tryOut/Landing">EQUIX/Лендинг</Box>
      <Box href="/tryOut/Data">EQUIX/Данные</Box>
    </Row>
  </Col>
);

export default Page;
