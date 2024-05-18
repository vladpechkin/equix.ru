"use client";

import { Row } from "@/equix/components";
import { Box } from "@/equix/components/Box";
import { Icon } from "@/equix/components/Icon";
import { Input } from "@/equix/components/Input";
import { capitalize } from "@/equix/utils";
import { FC, useState } from "react";

interface Props {
  title?: string | undefined;
  entitiesName: string;
  entitiesEndpoint: string | URL;
  fetchData: () => void;
}

export const EntitiesEditorHeader: FC<Props> = (props) => {
  const { title, entitiesName, entitiesEndpoint, fetchData } = props;

  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = () => {
    if (entitiesEndpoint instanceof URL)
      entitiesEndpoint.searchParams.set("search", searchQuery.toLowerCase());
    fetchData();
  };

  return (
    <Row className="items-center flex-wrap">
      <h1 className="font-semibold p-2">
        {title || capitalize(entitiesName).replaceAll("_", " ")}
      </h1>
      <Input
        value={searchQuery}
        onChange={setSearchQuery}
        type="search"
        placeholder="Enter search query"
        autoFocus
        onClick={handleClick}
      />
      <Box href={`/${entitiesName.toLowerCase()}/new`}>
        <Icon name="plus-lg" />
        Create new
      </Box>
    </Row>
  );
};
