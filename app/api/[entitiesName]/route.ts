import { NextRequest } from "next/server";
import { addEntityToFile, getEntitiesFromFile } from "../utils";

export const GET = async (
  _request: NextRequest,
  { params: parameters }: { params: { entitiesName: string } }
) => {
  const entitiesName = parameters.entitiesName;

  const entities = await getEntitiesFromFile(entitiesName);

  return Response.json(entities);
};

export const POST = async (
  request: NextRequest,
  { params: parameters }: { params: { entitiesName: string } }
) => {
  const entitiesName = parameters.entitiesName;

  const entity = await request.json();

  const updatedEntities = await addEntityToFile(entitiesName, entity);

  return Response.json(updatedEntities);
};
