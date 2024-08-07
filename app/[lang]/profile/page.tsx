"use client";

import { Box, Card } from "@/equix/components/Box";
import { Col, Row } from "@/equix/components/Flex";
import { H2 } from "@/equix/components/Heading";
import { Input } from "@/equix/components/Input";
import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { InputOption } from "@/equix/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();

  const [user, setUser] = useState<any>();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const roleOptions = [
    { id: "designer", name: "Дизайнер" },
    { id: "programmer", name: "Программист" },
    { id: "other", name: "Другой специалист" },
  ];

  const [selectedRole, setSelectedRole] = useState<InputOption | undefined>();

  const getHref = () => {
    switch (selectedRole?.name) {
      case "Дизайнер": {
        return "/docs/for_designer";
      }
      case "Программист": {
        return "/docs/for_programmer";
      }

      default: {
        return "/";
      }
    }
  };

  const fetchUser = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      router.push("/auth");
    }

    if (userId) {
      const res = await fetch(`/api/users/${userId}`);
      const user = await res.json();

      setUser(user);

      const { name, email, phone, role } = user;

      setName(name);
      setEmail(email);
      setPhone(phone);
      setSelectedRole(roleOptions.find((option) => option.id === role));
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    router.push("/auth");
  };

  const handleSave = async () => {
    if (user) {
      const res = await fetch(`/api/users/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify({ name, email, phone, role: selectedRole?.id }),
      });

      if (res) window.location.reload();
    }
  };

  return (
    <LandingLayout className="justify-center">
      <Row className="items-center w-full justify-between">
        <H2>Личный кабинет</H2>
        <Row>
          <Box>Вы вошли как {email}</Box>
          <Box onClick={handleLogout}>Выйти</Box>
        </Row>
      </Row>
      <Card>
        <p>Заполните личные данные</p>
        <Input label="ФИО" value={name} onChange={setName} />
        <Input
          type="email"
          value={email}
          onChange={setEmail}
          label="Электронная почта"
        />
        <Input type="tel" value={phone} onChange={setPhone} label="Телефон" />
        <Col>
          <Input
            label="Ваша роль в компании"
            type="radio"
            options={roleOptions}
            value={selectedRole}
            onChange={setSelectedRole}
          />
          {name !== user.name ||
          email !== user.email ||
          phone !== user.phone ||
          selectedRole?.id !== user.role ? (
            <Box onClick={handleSave}>Сохранить изменения</Box>
          ) : (
            <Box href={getHref()} className="border">
              Ознакомиться с документацией
            </Box>
          )}
        </Col>
      </Card>
    </LandingLayout>
  );
};

export default Page;
