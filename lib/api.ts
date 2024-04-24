import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import html from "remark-html";
import { remark } from "remark";

const markdownDirectory = path.join(process.cwd(), "markdown");

function getMarkdownFiles() {
  return fs.readdirSync(markdownDirectory);
}

function getParser() {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeStringify)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      content: (arg) => ({
        type: "element",
        tagName: "a",
        properties: {
          href: `#${String(arg.properties?.id)}`,
          style: "margin-right: 10px",
        },
        children: [{ type: "text", value: "#" }],
      }),
    });
}

const parser = getParser();

export async function getMarkdownFileById(id: string) {
  const realId = id.replace(/\.md$/, "");
  const fullPath = path.join(markdownDirectory, `${realId}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    realId,
    title: matterResult.content.substring(
      1,
      matterResult.content.indexOf("\n")
    ),
    contentHtml,
    ...matterResult.data,
  };
}

export async function getHtmlFromMarkdown(string_: string) {
  const { data, content } = matter(
    fs.readFileSync(path.join("_pages", string_), "utf8")
  );
  const html = await parser.process(content);

  return {
    ...data,
    html: html.value.toString(),
  };
}

export async function getAllMarkdownFiles() {
  const posts = await Promise.all(
    getMarkdownFiles().map((id) => getMarkdownFileById(id))
  );
  return posts;
}
