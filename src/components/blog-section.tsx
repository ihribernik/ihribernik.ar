import MarkdownRenderer from "@/components/markdown-render";
import primerPost from "@/content/blog/primer-post.md?raw"; // Importa el archivo .md
import fm from "front-matter";

const BlogPost = () => {
  const { attributes: data, body: content } = fm(primerPost);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{data.date}</p>
      <p className="mb-4">{data.summary}</p>
      <MarkdownRenderer markdown={content} />
    </div>
  );
};

export default BlogPost;
