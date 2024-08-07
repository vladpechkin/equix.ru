import { NextRequest } from "next/server";
import fsPromises from "node:fs/promises";
import { getEntitiesFromFile } from "../../utils";
import path from "node:path";

export const GET = async (
  _request: NextRequest,
  { params: parameters }: { params: { entitiesName: string; id: string } }
) => {
  const entitiesName = parameters.entitiesName;
  const id = parameters.id;

  const entities = await getEntitiesFromFile(entitiesName);

  const targetEntity = entities.find((entity: any) => entity.id === id);

  return Response.json(targetEntity);
};

export const PATCH = async (
  request: NextRequest,
  { params: parameters }: { params: { entitiesName: string; id: string } }
) => {
  const entitiesName = parameters.entitiesName;
  const id = parameters.id;

  const dataFilePath = path.join(process.cwd(), `/${entitiesName}.json`);

  const entities = await getEntitiesFromFile(entitiesName);

  const updatedEntity = await request.json();

  const updatedEntities = JSON.stringify(
    entities.map((entity: any) =>
      entity.id === id ? { ...entity, ...updatedEntity } : entity
    )
  );

  await fsPromises.writeFile(dataFilePath, updatedEntities);

  return Response.json(updatedEntity);
};
