// pages/api/verify.js

import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParameters = request.nextUrl.searchParams;
  const token = searchParameters.get("token");

  // const token = `token=${query}`;

  try {
    // Verify the token - this throws if the token is invalid
    console.log(token, process.env["JWT_SECRET"]);

    // const { email } = jwt.verify(
    //   token as string,
    //   process.env["JWT_SECRET"] || ""
    // );

    // The token is valid, so we create a session
    // const sessionToken = jwt.sign(
    //   { email },
    //   process?.env?.["JWT_SECRET"] || "",
    //   {
    //     expiresIn: "1h",
    //   }
    // );

    return new Response(
      "Вы успешно авторизованы. Эту страницу можно закрыть.",
      {
        status: 200,
        headers: {
          // "Set-Cookie": serialize("auth", sessionToken, {
          //   httpOnly: true,
          //   secure: true,
          //   sameSite: "strict",
          //   maxAge: 3600, // Expires after 1 hour
          //   path: "/",
          // }),
        },
      }
    );

    // Redirect the user to the homepage
    // res.writeHead(302, { Location: '/secrets' })
    // res.end()
  } catch {
    return new Response("Invalid token", { status: 401 });
  }
};
