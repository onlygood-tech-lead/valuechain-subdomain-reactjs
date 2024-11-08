import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown/index";
import { cn } from "../../utils/cn";

type MarkdownRendererProps = {
  content: string;
  className?: string;
};

export default function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  const components: Components = {
    a: ({ node, ...props }) => (
      <a target="_blank" rel="noopener noreferrer" {...props} />
    ),
  };

  return (
    <div className={cn("prose prose-invert prose-sm max-w-none", className)}>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
