export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`max-w-6xl mx-auto w-full p-4 ${className}`}>{children}</div>;
}
