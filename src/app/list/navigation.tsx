'use client'

import { useEffect } from 'react'

import Link from 'next/link'

import { useAppContext } from '@/providers/app-provider'

import { API_PAGES_COUNT } from '@/constants'

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
	const { navigation } = useAppContext()
	const { setCurrent } = navigation

	useEffect(() => {
		setCurrent(page)
	}, [page, setCurrent])

	return (
		<nav
			className={`grid grid-cols-3 items-center justify-between border-b border-slate-700 pb-8 ${className}`}
		>
			<div className='text-left'>
				{prev && (
					<Link
						className='btn bg-secondary py-0 text-light'
						href={`list?page=${page - 1}`}
					>
						&#9664; Prev
					</Link>
				)}
			</div>

			<div className='text-center'>
				{page + 1} / {API_PAGES_COUNT}
			</div>

			<div className='text-right'>
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
