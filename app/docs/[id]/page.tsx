import { getAllMarkdownFiles, getMarkdownFileById } from "@/lib/api";

export default async function MarkdownPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { contentHtml } = await getMarkdownFileById(id);
  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
  );
}

export async function generateStaticParams() {
  const posts = await getAllMarkdownFiles();

  return posts.map((post) => ({
    id: post.id,
  }));
}

// export async function generateMetadata({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//    const { title } = await getPostById(id);
//   return {
//     title,
//   };
// }
