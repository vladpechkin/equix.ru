import path from "node:path";
import fsPromises from "node:fs/promises";

export const getEntitiesFromFile = async (entitiesName: string) => {
  const dataFilePath = path.join(process.cwd(), `/${entitiesName}.json`);

  const file = await fsPromises.readFile(dataFilePath);

  return JSON.parse(file.toString());
};

export const addEntityToFile = async (entitiesName: string, entity: any) => {
  const dataFilePath = path.join(process.cwd(), `/${entitiesName}.json`);

  const entities = await getEntitiesFromFile(entitiesName);

  const existingEntity = entities.find(
    (ent: any) => ent.email === entity.email
  );

  if (existingEntity) throw Error;

  entities.push({ id: String(entities.length + 1), ...entity });

  const updatedEntities = JSON.stringify(entities);

  await fsPromises.writeFile(dataFilePath, updatedEntities);

  return updatedEntities;
};
