'use client'

import Link from 'next/link'

import { useAppContext } from '@/providers/app-provider'

const GoBackLink = () => {
	const { navigation } = useAppContext()
	const { current } = navigation

	return (
		<Link
			className='uppercase'
			href={`../list?page=${current}`}
		>
			Back to results
		</Link>
	)
}

export default GoBackLink
