import { Box } from "@/equix/components/Box";
import { Icon } from "@/equix/components/Icon";
import { Entity } from "@/equix/types";
import { capitalize, renderValue } from "@/equix/utils";
import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import config from "../config.json";

interface Props {
  getSortedEntities: () => Entity[];
  entities: Entity[];
  sortKey: string;
  setSortKey: (value: string) => void;
  entityEndpoint?: URL;
  entitiesName: string;
}

export const EntitiesEditorTable: FC<Props> = (props) => {
  const {
    getSortedEntities,
    entities,
    sortKey,
    setSortKey,
    entityEndpoint,
    entitiesName,
  } = props;
  const router = useRouter();

  const isKeyCollapsedInAllEntities = (key: string) =>
    (config.collapsed_fields.ALL as string[]).includes(key);

  const isKeyHiddenInAllEntities = (key: string) =>
    config.hidden_fields.ALL.includes(key);

  const isKeyCollapsedInCurrentEntity = (key: string) => {
    type CollapsedField = keyof typeof config.collapsed_fields;
    if (
      Object.keys(config.collapsed_fields).includes(capitalize(entitiesName))
    ) {
      const collapsedFields =
        config.collapsed_fields[capitalize(entitiesName) as CollapsedField];
      return collapsedFields.filter(Boolean).includes(key);
    } else return false;
  };

  const isKeyHiddenInCurrentEntity = (key: string) => {
    type HiddenField = keyof typeof config.hidden_fields;
    if (Object.keys(config.hidden_fields).includes(capitalize(entitiesName))) {
      const hiddenFields =
        config.hidden_fields[capitalize(entitiesName) as HiddenField];
      return hiddenFields.filter(Boolean).includes(key);
    } else return false;
  };

  const getNonHiddenAndNonCollapsedEntityEntries = useCallback(
    (entity: Object) =>
      Object.entries(entity).filter(
        ([key]) =>
          !(
            isKeyCollapsedInAllEntities(key) ||
            isKeyHiddenInAllEntities(key) ||
            isKeyCollapsedInCurrentEntity(key) ||
            isKeyHiddenInCurrentEntity(key)
          )
      ),
    [entitiesName, entities]
  );

  const handleEditClick = (id: string) => {
    router.replace(
      entityEndpoint ? entityEndpoint.toString() : `/${entitiesName}/${id}`
    );
    router.refresh();
  };

  return (
    <table>
      <thead>
        <tr>
          {getNonHiddenAndNonCollapsedEntityEntries(entities[0]).map(([key], index) => (
            <td
              key={index}
              className="p-2 font-semibold"
              onClick={() => setSortKey(key)}
            >
              <span className="flex items-center gap-2">
                {capitalize(key).replace(/([a-z])([A-Z])/g, "$1 $2")}
                {sortKey === key && <i className="bi bi-sort-down-alt"></i>}
              </span>
            </td>
          ))}
          <td className="p-2 font-semibold">Actions</td>
        </tr>
      </thead>
      <tbody>
        {getSortedEntities().map((entity, entityIndex) => (
          <tr key={entityIndex}>
            {getNonHiddenAndNonCollapsedEntityEntries(entity).map(([key, value], index) => (
              <td key={index} className="p-2">
                <span className="w-full break-all line-clamp-1">
                  {renderValue(key, value)}
                </span>
              </td>
            ))}
            <td className="p-0">
              <Box
                href={`/${entitiesName.toLowerCase()}/${entity.id}`}
                onClick={() => handleEditClick(entity.id)}
                className="p-0 h-auto"
              >
                <Icon name="pencil" />
                Edit
              </Box>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
