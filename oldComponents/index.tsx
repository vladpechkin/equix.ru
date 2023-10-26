import Image from "next/image";
import { Box } from "./Box";
import React from "react";

export const Ul = (props) => (
  <ul className="flex flex-col gap-2 list-disc pl-4" {...props}>
    {props.children}
  </ul>
);

export const Avatar = (props) => (
  <Image
    {...props}
    className={`object-cover rounded-lg shrink-0 ${props.className || ""}`}
    alt="Avatar"
  />
);

export const Logo = ({ size }) => (
  <Box
    href="/"
    className={`text-[1.5rem] leading-none gap-0 py-0 text-blue-800 font-black`}
  >
    <p>
      <span>p</span>
      {size === "big" && <span className="hidden sm:inline">echk.in</span>}
      <span className={size === "big" && "sm:hidden"}>.</span>
    </p>
  </Box>
);

const HeadingLevelContext = React.createContext<number>(0);

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: number | "auto";
};

export const Heading = ({ level = "auto", ...props }: HeadingProps) => {
  const headingLevel = React.useContext(HeadingLevelContext);
  if (level === "auto" && headingLevel === 0) {
    throw new Error(
      "To use auto heading levels wrap your Heading in a Region."
    );
  }
  if (typeof level === "number" && level <= 0) {
    throw new Error(
      "The level of a Heading must be a positive value greater than zero."
    );
  }
  const actualLevel = level === "auto" ? headingLevel : level;
  if (actualLevel <= 6) return React.createElement(`h${actualLevel}`, props);
  
  

  return (
    <div
      {...props}
      className={`${
        actualLevel === 1
          ? "text-[2em] leading-[2.5rem]"
          : actualLevel === 2 && "text-[1.5em] leading-[2em]"
      } font-medium max-w-screen-sm break-words ${props.className || ""}`}
      role="heading"
      aria-level={actualLevel}
    />
  );
};

export const Region = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const headingLevel = React.useContext(HeadingLevelContext);
  const nextLevel = headingLevel + 1;
  return (
    <HeadingLevelContext.Provider value={nextLevel}>
      <section {...props} />
    </HeadingLevelContext.Provider>
  );
};

export const Section = (props: any) => (
  <Region
    className="flex flex-col gap-2 rounded-lg w-full lg:max-w-screen-sm flex-1 bg-white p-4"
    {...props}
  >
    {props.children}
  </Region>
);
