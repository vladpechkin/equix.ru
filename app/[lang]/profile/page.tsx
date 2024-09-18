"use client";

import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { paidSections } from "../components/paidSections";
import { UserSection } from "../components/UserSection";
import { OfferSection } from "../components/OfferSection";

const Page = () => {
  const router = useRouter();

  const [user, setUser] = useState<any>();

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        router.push("/auth");

        return;
      }

      if (userId) {
        const res = await fetch(`/api/users/${userId}`);

        if (!res.ok) {
          router.push("/auth");

          return;
        }

        const user = await res.json();

        setUser(user);
      }
    };

    fetchUser();
  }, [router]);

  const getSections = () => {
    if (!user) return [{ children: "Загрузка..." }];

    if (user.role === "paid") return paidSections;

    if (user.role === "it")
      return [
        {
          heading: "Получите всё.",
          children: <OfferSection />,
        },
      ];

    return [
      {
        heading: "Личный кабинет",
        children: <UserSection user={user} />,
      },
    ];
  };

  return (
    <LandingLayout className="justify-center" sections={getSections()} />
  );
};

export default Page;
