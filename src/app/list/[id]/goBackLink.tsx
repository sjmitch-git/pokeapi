import Link from 'next/link'

import { API_LIMIT } from '@/constants'

const GoBackLink = ({ id }: { id: string }) => {
	const getPage = (): string => (Math.ceil(Number(id) / API_LIMIT) - 1).toString()

	return <Link href={`../list?page=${getPage()}`}>Back to results</Link>
}

export default GoBackLink
