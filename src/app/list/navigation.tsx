import Link from 'next/link'

import { API_SPECIES_COUNT, API_LIMIT } from '@/constants'

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
						&#9664; Prev
					</Link>
				)}
			</div>

			<div>
				{page + 1} / {Math.ceil(API_SPECIES_COUNT / API_LIMIT)}
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
