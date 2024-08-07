// import jwt from "jsonwebtoken";
// import { headers } from "next/headers";
// import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const POST = async () => {
  // const { email } = request.body;

  // // Create a magic link token
  // const token = jwt.sign({ email }, process.env["JWT_SECRET"] || "", {
  //   expiresIn: "15m",
  // });

  const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: "bot@equix.ru",
      pass: "XsnQyceBKfiANF6UyRq9",
    },
  });

  // const headersList = headers();
  // const origin = headersList.get("origin");

  // const magicLink = `${origin}/api/verify?token=${token}`;

  // const code = Math.round(Math.random() * 600000)

  await transporter.sendMail({
    from: "Бот ЭКВИКС bot@equix.ru",
    to: "pchknvld@gmail.com",
    // subject: "Ваша ссылка", 
    subject: "Одноразовый код для входа в EQUIX",
    // text: `Нажмите на эту ссылку, чтобы войти в личный кабинет EQUIX: ${magicLink}`,
    // text: `Ваш код ${code}` 
    });

  return Response.json("Mail sent");
};
