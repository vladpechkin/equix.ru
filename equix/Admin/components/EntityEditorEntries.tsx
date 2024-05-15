import { Row } from "@/equix/components";
import { Box } from "@/equix/components/Box";
import { Input } from "@/equix/components/Input";
import { Entity, InputOption } from "@/equix/types";
import {
  capitalize,
  fetchApi,
  getInputType,
  getKeyType,
  getNonHiddenEntityEntries,
  getOptions,
  renderValue,
} from "@/equix/utils";
import router from "next/router";
import config from "../config.json";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface Props {
  initialEntity: Object;
  changedEntity: Entity;
  setChangedEntity: Dispatch<SetStateAction<Entity>>;
  entitiesName: string;
  entityId: string;
  fleetIds: string;
  setFleetIds: (value: string) => void;
  additionalEntries: [string, unknown][];
}

export const EntityEditorEntries: FC<Props> = (props) => {
  const {
    initialEntity,
    entitiesName,
    entityId,
    changedEntity,
    setChangedEntity,
    fleetIds,
    setFleetIds,
    additionalEntries,
  } = props;

  const [newCashBalance, setNewCashBalance] = useState("");
  const [newCardBalance, setNewCardBalance] = useState("");

  let changedObject: Partial<Entity> = {};

  const renderObject = (label: string, object: Object) => (
    <Box className="flex-col border mb-4 gap-0">
      <label className="font-semibold">{capitalize(label)}</label>
      {Object.entries(object).map(([key, value], index) => (
        <div key={index}>
          {capitalize(key)}: {renderValue(key, value)}
        </div>
      ))}
      {label === "cash" && (
        <div>
          <Input
            label="Withdraw"
            type="text"
            value={newCashBalance}
            onChange={setNewCashBalance}
          />
          <Box
            onClick={() => {
              fetchApi("driverTransactions", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  paymentMethod: "CASH",
                  type: "WRITE_OFF",
                  destination: "BALANCE",
                  amount: parseInt(newCashBalance) * 100,
                  driverId: entityId,
                }),
              }).then(() => {
                setNewCashBalance("");
                router.reload();
              });
            }}
          >
            Save
          </Box>
        </div>
      )}
      {label === "card" && (
        <div>
          <Input
            label="Withdraw"
            type="text"
            value={newCardBalance}
            onChange={setNewCardBalance}
          />
          <Box
            onClick={() => {
              fetchApi("driverTransactions", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  paymentMethod: "CARD",
                  type: "DEBIT",
                  destination: "BALANCE",
                  amount: parseInt(newCardBalance) * 100,
                  driverId: entityId,
                }),
              }).then(() => {
                setNewCardBalance("");
                router.reload();
              });
            }}
          >
            Save
          </Box>
        </div>
      )}
    </Box>
  );

  const getChangedValue = (
    changedOption: InputOption,
    key: string,
    value: any
  ) => {
    if (changedOption?.name) {
      return changedOption?.name;
    } else {
      if (getKeyType(entitiesName, key) === "string[]") {
        return value?.replaceAll(", ", ",").split(",");
      } else return value;
    }
  };

  const renderEntry = (entry: [string, any]) => {
    const [key, value] = entry;
    if (key.includes("Id")) return;
    if (value) {
      if (Array.isArray(value) && key !== "carModels") {
        if (typeof value[0] === "object") {
          return value.map((object: any, index) =>
            renderObject(`${key.slice(0, -1)} ${index + 1}`, object)
          );
        } else
          return (
            <Box className="border mb-4 gap-0">
              {capitalize(key)}: {value.toString()}
            </Box>
          );
      }
      if (typeof value === "object" && key !== "carModels") {
        return renderObject(key, value);
      }
    }
    return (
      <div className="mb-4">
        <Input
          key={key}
          label={
            config.renamed_fields[key as keyof typeof config.renamed_fields] ||
            capitalize(key).replace(/([a-z])([A-Z])/g, "$1 $2")
          }
          type={getInputType(entitiesName, key, value)}
          value={
            getInputType(entitiesName, key, value) === "date"
              ? (changedEntity as any)[key]
              : key.toLowerCase().includes("fee")
              ? `${value * 100}%`
              : key === "cashLimit" || key === "price"
              ? value / 100
              : getInputType(entitiesName, key, value) === "radio"
              ? getOptions(entitiesName, key).find(
                  (option) => option.name === (changedEntity as any)[key]
                )
              : parseInt(value)
              ? String(Math.round((changedEntity as any)[key] * 10) / 10)
              : value === null
              ? ""
              : (changedEntity as any)[key]
          }
          isCollapsed
          onChange={(value: any) => {
            const changedOption = getOptions(entitiesName, key).find(
              (option) => option.id === value.id
            );

            changedObject[key] = getChangedValue(
              changedOption as InputOption,
              key,
              value
            );
            setChangedEntity((prevState) => ({
              ...prevState,
              ...changedObject,
            }));
          }}
          options={
            getInputType(entitiesName, key, value) === "radio"
              ? getOptions(entitiesName, key)
              : undefined
          }
        />
      </div>
    );
  };

  return (
    <div className="columns-2 gap-4">
      {initialEntity &&
        entitiesName &&
        getNonHiddenEntityEntries(initialEntity, entitiesName as string)?.map(
          renderEntry
        )}
      {additionalEntries?.map(renderEntry)}
      {entitiesName === "drivers" && (
        <Row>
          <div>
            <Input
              label="Fleet ids"
              type="text"
              value={fleetIds}
              onChange={setFleetIds}
            />
            <Box
              onClick={() => {
                fetchApi(`drivers/${entityId}/fleets`, {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    fleets: fleetIds
                      .replaceAll(" ", "")
                      .split(",")
                      .map((id) => parseInt(id)),
                  }),
                });
                setFleetIds("");
              }}
            >
              Save
            </Box>
          </div>
        </Row>
      )}
    </div>
  );
};
