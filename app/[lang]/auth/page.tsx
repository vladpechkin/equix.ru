"use client";

import { Box, Card } from "@/equix/components/Box";
import { Col } from "@/equix/components/Flex";
import { Input } from "@/equix/components/Input";
import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  // const [isEmailSent, setIsEmailSent] = useState(false);
  const router = useRouter()

  const [email, setEmail] = useState("");

  const handleSendEmail = async () => {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    if (res.ok) {
      const userId = await res.json();

      localStorage.setItem("userId", userId);

      router.push("/profile")
    }

    // if (res) setIsEmailSent(true);
  };

  return (
    <LandingLayout className="justify-center">
      <Col className="w-full h-full justify-center items-center">
        <Card>
          {/* {isEmailSent ? (
            <Box>
              Чтобы продолжить, откройте почту {email} и нажмите на ссылку,
              которая была выслана в письме.
            </Box>
          ) : ( */}
          <>
            <Input
              label="Чтобы войти, введите адрес электронной почты"
              type="email"
              value={email}
              onChange={setEmail}
              className="w-auto"
            />
            {/^[\w.-]+@(?:[\w-]+\.)+[\w-]{2,4}$/u.test(email) ? (
              <Box onClick={handleSendEmail}>Продолжить</Box>
            ) : null}
          </>
          {/* )} */}
        </Card>
      </Col>
    </LandingLayout>
  );
};

export default Page;
