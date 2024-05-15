import { capitalize, getAdditionalEntitiesEndpoints } from "@/equix/utils";
import { FC } from "react";

interface Props {
  entitiesName: string;
  innerEntityIdEntries: [key: string, value: any][];
  entityId: string;
}

export const EntityEditorLinks: FC<Props> = (props) => {
  const { entitiesName, innerEntityIdEntries, entityId } = props;
  return (
    <div className="flex">
      {getAdditionalEntitiesEndpoints(entitiesName as string)?.map(
        (endpoint: string, index: number) => (
          <a
            className="p-2 text-blue-700"
            href={`/${endpoint}=${entityId}`}
            key={index}
          >
            {capitalize(endpoint.split("?")[0])}
          </a>
        )
      )}
      {innerEntityIdEntries?.map(([key, value], index) => {
        const entityName = key.replace("Id", "s").replace("ss", "s");
        return (
          <a
            className="p-2 text-blue-700"
            key={index}
            href={`/${entityName}/${value || "new"}`}
          >
            {capitalize(entityName.slice(0, -1))}
          </a>
        );
      })}
    </div>
  );
};
