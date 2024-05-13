'use client'

import Link from 'next/link'

import { useNavigationContext } from '@/contexts/navigation.context'

const GoBackLink = () => {
	const { navigation } = useNavigationContext()
	const { current } = navigation

	return (
		<Link
			className='btn lg pill bg-secondary text-light'
			href={`../list?page=${current}`}
		>
			Back to results
		</Link>
	)
}

export default GoBackLink
