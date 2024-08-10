import { NextRequest } from "next/server";
import { readEntitiesFromFile, writeEntityToFile } from "../utils";
import { User } from "../types";

export const POST = async (request: NextRequest) => {
  const email = await request.json();

  const users = await readEntitiesFromFile("users");

  const targetUser = users.find((user: User) => user.email === email);

  if (targetUser) return Response.json(targetUser.id);

  const updatedEntities = await writeEntityToFile('users', {email});

  return Response.json(updatedEntities.length);
};
