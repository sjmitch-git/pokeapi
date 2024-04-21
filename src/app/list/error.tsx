'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.log(error)
	}, [error])

	return (
		<div className='text-center'>
			<h2 className='mb-8 text-red-700'> Error: {error.message}!</h2>
			<button
				className='btn border border-slate-900 p-2'
				onClick={() => reset()}
			>
				Try again
			</button>
		</div>
	)
}
