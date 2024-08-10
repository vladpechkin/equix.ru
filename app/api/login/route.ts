// import jwt from "jsonwebtoken";
// import { headers } from "next/headers";
// import { NextRequest } from "next/server";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { readEntitiesFromFile, writeEntityToFile } from "../utils";
import { User } from "../types";

// import { readEntitiesFromFile } from "../utils";

export const POST = async (request: NextRequest) => {
  const { email } = await request.json();

  // // Create a magic link token
  // const token = jwt.sign({ email }, process.env["JWT_SECRET"] || "", {
  //   expiresIn: "15m",
  // });

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env?.["NODEMAILER_USER"],
      pass: process.env?.["NODEMAILER_PASS"],
    },
  });

  // const headersList = headers();
  // const origin = headersList.get("origin");

  // const magicLink = `${origin}/api/verify?token=${token}`;

  const code = String(Math.round(Math.random() * 600_000));

  const users = await readEntitiesFromFile("users");

  const targetUser = users.find((user: User) => user.email === email);

  await writeEntityToFile("users", { ...targetUser, code });

  await transporter.sendMail({
    from: "Бот ЭКВИКС bot@equix.ru",
    to: email,
    // subject: "Ваша ссылка",
    subject: "Одноразовый код для входа в EQUIX",
    // text: `Нажмите на эту ссылку, чтобы войти в личный кабинет EQUIX: ${magicLink}`,
    text: `Ваш код ${code}`,
  });

  return Response.json("Mail sent");
};
