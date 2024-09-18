import { Card, Box } from "@/equix/components/Box";
import { Col } from "@/equix/components/Flex";
import { H1 } from "@/equix/components/Heading";
import { Icon } from "@/equix/components/Icon";
import Image from "next/image"

export const OfferSection = () => (
  <Col className="items-center w-full gap-4">
    <div className="self-start">
      Личный доступ ко всем разработкам, доступным уже сейчас, а также тем, что
      мы добавим в будущем.
    </div>
    <div className="w-full gap grid grid-cols-[repeat(auto-fill,minmax(304px,1fr))]">
      {Object.entries({
        "Более 30 компонентов": "boxes",
        "2 шаблона, EQUIX/Лендинг и EQUIX/Данные (ещё 2 скоро станут доступны)":
          "window-stack",
        "Исчерпывающая документация": "book",
        "Дополнительные инструменты (например, для генерации цветовой темы)":
          "tools",
        "Дополнительные функции, упрощающие разработку": "braces-asterisk",
        "UI-kit в Figma со всеми компонентами и шаблонами": "/figma.svg",
        "NPM-библиотека со всеми компонентами, шаблонами и функциями":
          "/npm.svg",
        "GitHub NPM-библиотеки с историей, ходом разработки и исправления ошибок":
          "/github.svg",
        "GitHub вебсайта equix.ru cо всеми примерами применения EQUIX":
          "/github.svg",
        "Техническая поддержка": "headset",
        "Бесплатные обновления": "arrow-clockwise",
        "Неограниченное число проектов": "infinity",
      }).map(([name, icon], index) => (
        <Card key={index}>
          {icon.includes(".") ? (
            <Image
              height="30"
              width="30"
              src={icon}
              className="h-8 w-8"
              alt=""
            />
          ) : (
            <Icon name={icon} className="text-accent text-3xl" />
          )}
          {name}
        </Card>
      ))}
    </div>
    <H1>999 ₽</H1>
    <Box href="/yookassa" className="border">
      Приобрести
    </Box>
  </Col>
);
