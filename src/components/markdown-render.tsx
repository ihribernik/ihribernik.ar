import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ markdown }) => {
  return (
    <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default MarkdownRenderer;
