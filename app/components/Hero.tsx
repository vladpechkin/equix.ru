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
    <Col className="items-center">
      <div className="relative mx-auto scale-90">
        <img src="/iphone.jpg" alt="" className="w-[240px]" />
        <Col className="absolute top-12 left-5 w-[200px] h-[437px]">
          <Input
            type="search"
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Что ищем?"
            onClick={() => ""}
          />
          <Details summary="Опции">
            <Box onClick={() => ""}>Сохранить как</Box>
            <Box onClick={() => ""}>Закрыть сохраненные файлы</Box>
          </Details>
          <CoolerDarkThemeToggle />
          <Switch
            value={isAgreed}
            label="Соглашаюсь с политикой конфиденциальности"
            onChange={setIsAgreed}
          />
        </Col>
      </div>
    </Col>
  );
};
