const handler = async () => {
  // const { entityName, id } = req.query;
  // let numericalId = parseInt(id as string);
  // if (entityName !== "acts") numericalId = Number(numericalId);
  // const dataFilePath = path.join(process.cwd(), `/public/${entityName}.json`);
  // try {
  // switch (req.method) {
  //   case "GET": {
  //     const fileData = await fsPromises.readFile(dataFilePath);
  //     let objectData = JSON.parse(fileData.toString());
  //     res
  //       .status(200)
  //       .json(objectData.find((entry: Entity) => entry.id === id));
  //     break;
  //   }
  //   case "PUT": {
  //     const fileData = await fsPromises.readFile(dataFilePath);
  //     let objectData = JSON.parse(fileData.toString());
  //     const body = req.body;
  //     if (Object.keys(body).length === 0) {
  //       res.status(411);
  //       return;
  //     }
  //     objectData = objectData.map((entry: Entity) =>
  //       entry.id === id ? body : entry
  //     );
  //     await fsPromises.writeFile(dataFilePath, JSON.stringify(objectData));
  //     res.status(200).json("PUT");
  //     break;
  //   }
  //   case "DELETE": {
  //     const fileData = await fsPromises.readFile(dataFilePath);
  //     let objectData = JSON.parse(fileData.toString());
  //     const updatedData = JSON.stringify(
  //       objectData.filter((entry: Entity) => entry.id !== id)
  //     );
  //     await fsPromises.writeFile(dataFilePath, updatedData);
  //     res.status(200).json("DELETED");
  //     break;
  //   }
  // }
  // } catch (error) {
  // res.status(500).json({ message: error });
  // }
};

export default handler;
