'use client'

import { useEffect } from 'react'

import Link from 'next/link'

import { FaPlay, FaFastForward, FaFastBackward } from 'react-icons/fa'

import { useNavigationContext } from '@/contexts/navigation.context'

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
	const { navigation } = useNavigationContext()
	const { setCurrent } = navigation

	useEffect(() => {
		setCurrent(page)
	}, [page, setCurrent])

	return (
		<nav
			className={`grid grid-cols-3 items-center justify-between border-b border-slate-700 pb-8 ${className}`}
		>
			<div className='flex justify-start gap-2'>
				{prev && (
					<>
						<Link
							className='btn lg md:xl rounded bg-secondary text-light'
							href={`list?page=${1}`}
						>
							<FaFastBackward /> <span className='hidden md:inline-block'>First</span>
						</Link>
						<Link
							className='btn lg md:xl rounded bg-secondary text-light'
							href={`list?page=${page - 1}`}
						>
							<FaPlay className='rotate-180' />{' '}
							<span className='hidden md:inline-block'>Prev</span>
						</Link>
					</>
				)}
			</div>

			<div className='text-center'>
				{page} / {API_PAGES_COUNT}
			</div>

			<div className='flex justify-end gap-2'>
				{next && (
					<>
						<Link
							className='btn lg md:xl rounded bg-secondary text-light'
							href={`list?page=${page + 1}`}
						>
							<span className='hidden md:inline-block'>Next</span> <FaPlay />
						</Link>
						<Link
							className='btn lg md:xl rounded bg-secondary text-light'
							href={`list?page=${API_PAGES_COUNT}`}
						>
							<span className='hidden md:inline-block'>Last</span> <FaFastForward />
						</Link>
					</>
				)}
			</div>
		</nav>
	)
}
