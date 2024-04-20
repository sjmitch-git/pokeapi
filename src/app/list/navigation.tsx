import Link from 'next/link'

export default function Navigation({
	prev,
	next,
	page,
	className,
}: {
	prev?: string | null
	next?: string | null
	page: number
	className?: string
}) {
	//console.log('page', page)
	return (
		<nav
			className={`flex items-center justify-between border-b border-slate-700 pb-8 ${className}`}
		>
			<div>
				{prev && (
					<Link
						className='btn bg-secondary py-0 text-light'
						href={`list?page=${page - 1}`}
					>
						&#9664; Back
					</Link>
				)}
			</div>

			<div>
				{next && (
					<Link
						className='btn bg-secondary py-0 text-light'
						href={`list?page=${page + 1}`}
					>
						Next &#9654;
					</Link>
				)}
			</div>
		</nav>
	)
}
