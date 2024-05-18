import fsPromises from "fs/promises";
import { NextApiHandler } from "next";
import path from "path";

const handler: NextApiHandler = async (req, res) => {
  const { entityName } = req.query;
  const dataFilePath = path.join(process.cwd(), `/public/${entityName}.json`);

  if (req.method === "POST") {
    const fileData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(fileData.toString());

    const body = req.body;
    objectData.push({ id: objectData.length + 1, ...body });
    const updatedData = JSON.stringify(objectData);

    await fsPromises.writeFile(dataFilePath, updatedData);
    res.status(200).json("POSTED");
  }
};

export default handler;
