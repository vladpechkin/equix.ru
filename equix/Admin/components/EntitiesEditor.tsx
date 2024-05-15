import { Entity } from "@/equix/types";
import { fetchApi } from "@/equix/utils";
import { FC, useCallback, useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination";
import { EntitiesEditorHeader } from "./EntitiesEditorHeader";
import { EntitiesEditorTable } from "./EntitiesEditorTable";

interface Props {
  entitiesName: string;
  title?: string;
  entitiesEndpoint?: string | URL;
  entityEndpoint?: URL;
}

export const EntitiesEditor: FC<Props> = ({
  title,
  entitiesName,
  entitiesEndpoint = entitiesName as string,
  entityEndpoint,
}) => {
  if (entitiesName === "newDrivers") {
    entitiesName = "drivers";
    entitiesEndpoint = `drivers?state=NEW`;
  }
  const [sortKey, setSortKey] = useState("");
  const [entities, setEntities] = useState<Entity[]>([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState<number>();

  const fetchEntities = () =>
    fetchApi(
      `${entitiesEndpoint}${
        entitiesEndpoint.toString().includes("?") ? "&" : "?"
      }page=${page.toString()}`
    )
      .then((res) => res.json())
      .then((res) => {
        setEntities(res.data.results);
        res?.data?.total && setLimit(Math.round(res.data.total / 20));
      });

  useEffect(() => {
    fetchEntities();
  }, [entitiesName, page]);

  const getSortedEntities = useCallback(
    () =>
      sortKey
        ? entities.sort((a, b) =>
            (a as any)[sortKey]
              ?.toString()
              .localeCompare((b as any)[sortKey].toString())
          )
        : entities,
    [entities, sortKey]
  );

  return (
    <div>
      <EntitiesEditorHeader
        title={title}
        entitiesName={entitiesName}
        entitiesEndpoint={entitiesEndpoint}
        fetchData={fetchEntities}
      />
      {entities && entities[0] && getSortedEntities().length > 0 ? (
        <EntitiesEditorTable
          entities={entities}
          entitiesName={entitiesName}
          entityEndpoint={entityEndpoint}
          getSortedEntities={getSortedEntities}
          setSortKey={setSortKey}
          sortKey={sortKey}
        />
      ) : (
        <tr className="h-full">
          <td colSpan={100} className="text-gray-400 text-center h-full">
            Nothing found
          </td>
        </tr>
      )}
      <Pagination limit={limit} page={page} setPage={setPage} />
    </div>
  );
};
// Пример использования
// <EntitiesEditor
// entitiesName="drivers"
// entitiesEndpoint={`drivers?state=MODERATION`}
// />
