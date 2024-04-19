import type { MDXComponents } from "mdx/types";
import { Box } from "@/equix/components/Box";
import { H1, H2, H3 } from "@/equix/components/Heading";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <H1 {...props} />,
    h2: (props) => <H2 {...props} />,
    h3: (props) => <H3 {...props} />,
    a: (props) => (
      <Box isinline href={props.href}>
        {props.children}
      </Box>
    ),
    img: (props) => <img {...props} />,
    ...components,
    code: (props) => (
      <div className="inline-flex bg-black rounded p text-white">
        <code {...props} />
      </div>
    ),
  };
}
