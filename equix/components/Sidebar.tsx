import { FC } from "react";
import { Route } from "../types";
import { Bar } from "./Bar";
import { Box } from "./Box";
import { Details } from "./Details";

interface Props {
  routes: Route[];
}

export const Sidebar: FC<Props> = (props) => {
  const { routes } = props;

  const groups = Array.from(new Set(routes.map((route) => route.group))).filter(
    Boolean
  );

  return (
    <Bar position="left" className="w-[320px]">
      {routes.map((route, index) =>
        route.group ? undefined : (
          <Box isStrictHref key={index} {...route}>
            {route.label || route.href}
          </Box>
        )
      )}
      {groups.map((group, index) => (
        <li key={index} className="w-full">
          <Details summary={group as string} open>
            <ul className="flex flex-col gap">
              {routes.map(
                (route, index) =>
                  route.group &&
                  route.group === group && (
                    <Box key={index} {...route}>
                      {route.label || route.href}
                    </Box>
                  )
              )}
            </ul>
          </Details>
        </li>
      ))}
    </Bar>
  );
};
