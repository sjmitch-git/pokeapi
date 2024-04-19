interface HeadingProps {
	label: string
	level?: number
	className?: string
}

const Heading = ({ label, level = 1, className = '' }: HeadingProps) => {
	const TagName = `h${level}` as keyof JSX.IntrinsicElements

	return <TagName className={`h${level} ${className}`}>{label}</TagName>
}

export default Heading
