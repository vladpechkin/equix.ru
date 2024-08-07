import { Box } from "@/equix/components/Box";
import { CoolerDarkThemeToggle } from "@/equix/components/DarkThemeProvider";
import { Details } from "@/equix/components/Details";
import { Col } from "@/equix/components/Flex";
import { Input } from "@/equix/components/Input";
import { Switch } from "@/equix/components/Switch";
import { useState } from "react";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAgreed, setIsAgreed] = useState(true);

  return (
    <Col className="border rounded p">
      <Input
        type="search"
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Что ищем?"
      />
      <Details summary="Опции">
        <Box onClick={() => ""}>Показать открытые папки</Box>
        <Box onClick={() => ""}>Закрыть все</Box>
        <Box onClick={() => ""}>Закрыть сохраненные файлы</Box>
      </Details>
      <CoolerDarkThemeToggle />
      <Switch
        value={isAgreed}
        label="Соглашаюсь с политикой конфиденциальности"
        onChange={setIsAgreed}
      />
    </Col>
  );
};
