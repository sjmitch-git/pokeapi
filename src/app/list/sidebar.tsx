export default function Sidebar({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return <aside className={`${className}`}>{children}</aside>
}
