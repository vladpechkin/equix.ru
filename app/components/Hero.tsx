import { Box } from "@/equix/components/Box";
import { CoolerDarkThemeToggle } from "@/equix/components/DarkThemeProvider";
import { Details } from "@/equix/components/Details";
import { Col } from "@/equix/components/Flex";
import { Icon } from "@/equix/components/Icon";
import { Input } from "@/equix/components/Input";
import { Switch } from "@/equix/components/Switch";
import { useState } from "react";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAgreed, setIsAgreed] = useState(true);

  return (
    <div className="relative text-sm">
      <img src="/iphone.jpg" alt="" className="w-[220px]" />
      <Col className="absolute top-12 left-4 w-[188px] h-[437px]">
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
        <Box isDimmed className="py-0">
          <Icon name="arrow-up" />
          На все выше можно нажать!
        </Box>
      </Col>
    </div>
  );
};
