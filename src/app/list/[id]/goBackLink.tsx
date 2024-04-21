'use client'

import Link from 'next/link'

import { useAppContext } from '@/providers/app-provider'

//import { API_LIMIT } from '@/constants'

const GoBackLink = ({ id }: { id: string }) => {
	const { navigation } = useAppContext()
	const { current } = navigation

	// const getPage = (): string => (Math.ceil(Number(id) / API_LIMIT) - 1).toString()

	return <Link href={`../list?page=${current}`}>Back to results</Link>
}

export default GoBackLink
