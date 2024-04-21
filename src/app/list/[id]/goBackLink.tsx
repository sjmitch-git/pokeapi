'use client'

import Link from 'next/link'

import { useAppContext } from '@/providers/app-provider'

const GoBackLink = ({ id }: { id: string }) => {
	const { navigation } = useAppContext()
	const { current } = navigation

	return <Link href={`../list?page=${current}`}>Back to results</Link>
}

export default GoBackLink
