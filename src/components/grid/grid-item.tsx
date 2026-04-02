interface GridItemProps {
  children: React.ReactNode;
  /** Column span on each breakpoint: [mobile, tablet, desktop] */
  span?: [number, number, number];
  /** Column start on each breakpoint: [mobile, tablet, desktop] */
  start?: [number, number, number];
  className?: string;
}

export function GridItem({
  children,
  span = [4, 8, 12],
  start,
  className = "",
}: GridItemProps) {
  // Use CSS custom properties that respond to breakpoints
  // The grid already changes --grid-columns per breakpoint,
  // so we use inline styles for reliable grid placement
  return (
    <div
      className={`grid-item ${className}`}
      style={{
        gridColumn: start
          ? `${start[2]} / span ${span[2]}`
          : `span ${span[2]}`,
      }}
      data-span-mobile={span[0]}
      data-span-tablet={span[1]}
      data-span-desktop={span[2]}
      data-start-mobile={start?.[0]}
      data-start-tablet={start?.[1]}
      data-start-desktop={start?.[2]}
    >
      {children}
    </div>
  );
}
