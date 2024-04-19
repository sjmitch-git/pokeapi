interface ButtonProps {
	children: React.ReactNode
	className?: string
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
	disabled?: boolean
}

export default function Button({
	children,
	className = '',
	type = 'button',
	onClick,
	disabled,
}: ButtonProps) {
	return (
		<button
			className={`btn ${className}`}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
