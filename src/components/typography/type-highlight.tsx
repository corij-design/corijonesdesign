interface TypeHighlightProps {
  before: string;
  highlight: string;
  after?: string;
  className?: string;
  tag?: "h1" | "h2" | "h3";
}

export function TypeHighlight({
  before,
  highlight,
  after = "",
  className = "",
  tag: Tag = "h2",
}: TypeHighlightProps) {
  return (
    <Tag className={className}>
      {before}
      <span className="text-accent">{highlight}</span>
      {after}
    </Tag>
  );
}
