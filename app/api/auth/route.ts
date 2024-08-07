import { NextRequest } from "next/server";
import { getEntitiesFromFile } from "../utils";

export const POST = async (request: NextRequest) => {
  const email = await request.json();

  const users = await getEntitiesFromFile("users");

  const targetUser = users.find((user: any) => user.email === email);

  return Response.json(targetUser.id);
};
