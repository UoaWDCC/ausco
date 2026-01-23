/**
 * Timeline component that renders a vertical timeline layout with a centered line.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The timeline items to be rendered within the timeline container
 * @returns {React.ReactElement} A div element containing an absolute positioned vertical line and children elements
 *
 * @example
 * ```tsx
 * <Timeline>
 *   <TimelineItem>Item 1</TimelineItem>
 *   <TimelineItem>Item 2</TimelineItem>
 * </Timeline>
 * ```
 */
const Timeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      {/* Single continuous vertical line - only on md+ screens */}
      <div className="hidden sm:block absolute left-1/2 top-4 bottom-0 w-0.5 bg-(--navy) -translate-x-1/2 rounded-full" />
      
      <div>{children}</div>
    </div>
  );
};

export default Timeline;
