import   { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!children) return null;
  const limit = 300;
  if (children.length <= limit) return <p className="fs-5">{children}</p>;
  const text = isExpanded ? children : children.slice(0, limit) + "...";
  return (
    <p className="fs-5">
      {text}
      <button
        className="btn btn-warning p-2 py-1 fw-bold mx-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </p>
  );
};

export default ExpandableText;
