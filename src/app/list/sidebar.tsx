export default function Sidebar({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return <aside className={`bg-slate-100 ${className}`}>{children}</aside>
}
