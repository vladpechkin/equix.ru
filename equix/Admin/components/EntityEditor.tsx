import { capitalize, fetchApi, getEntityTemplate } from "@/equix/utils";
import { FC, useEffect, useState } from "react";
import config from "../config.json";
import { EntityEditorEntries } from "./EntityEditorEntries";
import { EntityEditorHeader } from "./EntityEditorHeader";
import { EntityEditorLinks } from "./EntityEditorLinks";
import { Entity } from "@/equix/types";

interface Props {
  entitiesName: string;
  entityId: string;
  entityEndpoint?: string | undefined;
}

export const EntityEditor: FC<Props> = ({
  entitiesName,
  entityId,
  entityEndpoint = `${entitiesName}/${entityId}`,
}) => {
  const [initialEntity, setInitialEntity] = useState<Object>(
    getEntityTemplate(entitiesName)
  );
  const [changedEntity, setChangedEntity] = useState<Entity>(
    getEntityTemplate(entitiesName)
  );
  const [innerEntityIdEntries, setInnerEntityIdEntries] = useState<
    [key: string, value: string | number | boolean][]
  >([]);
  const [fleetIds, setFleetIds] = useState("");
  const [additionalEntries, setAdditionalEntries] = useState<
    [string, unknown][]
  >([]);

  useEffect(() => {
    if (entityId !== "new") {
      fetchApi(entityEndpoint)
        .then((res) => res.json())
        .then((res) => {
          let entity = res.data;
          type EntityName = keyof typeof config.additional_entity_endpoints;
          const additionalEntityEndpoints =
            config.additional_entity_endpoints[
              capitalize(entitiesName) as EntityName
            ];

          if (additionalEntityEndpoints) {
            additionalEntityEndpoints.map((endpoint) =>
              fetchApi(`${entityEndpoint}/${endpoint}`)
                .then((res) => res.json())
                .then((res) => {
                  setAdditionalEntries(Object.entries(res.data));
                })
            );
          }

          if (setInnerEntityIdEntries) {
            type EntityName = keyof typeof config.entities;
            const configKeys = Object.keys(
              config.entities[
                capitalize(entitiesName.slice(0, -1)) as EntityName
              ]
            );
            const entries: [key: string, value: any][] = [];
            configKeys.map(
              (key) => key.includes("Id") && entries.push([key, entity[key]])
            );
            setInnerEntityIdEntries(entries);
          }

          entitiesName === "drivers" &&
            fetchApi(`fleets?driverId=${entityId}`)
              .then((res) => res.json())
              .then((res) =>
                setFleetIds(
                  res.data.results.map((fleet: any) => fleet.id).join(",")
                )
              );

          setInitialEntity(entity);
          setChangedEntity(entity);
        });
    }
  }, []);

  return entitiesName ? (
    <div className="w-full max-w-[800px] mx-auto">
      <EntityEditorHeader
        entitiesName={entitiesName}
        entityId={entityId}
        changedEntity={changedEntity}
        initialEntity={initialEntity}
      />
      <EntityEditorLinks
        entitiesName={entitiesName}
        innerEntityIdEntries={innerEntityIdEntries}
        entityId={entityId}
      />
      <EntityEditorEntries
        changedEntity={changedEntity}
        entitiesName={entitiesName}
        entityId={entityId}
        fleetIds={fleetIds}
        initialEntity={initialEntity}
        setChangedEntity={setChangedEntity}
        setFleetIds={setFleetIds}
        additionalEntries={additionalEntries}
      />
    </div>
  ) : null;
};
