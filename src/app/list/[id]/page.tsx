import Link from 'next/link'

import FetchData from '@/utils/fetchData'
import { Heading } from '@/components'
import Detail from './detail'

export default async function Page({ params }: { params: { id: string } }) {
	const data = await FetchData(`pokemon/${params.id}`)

	return (
		<div>
			<Heading label={data.name} />
			<Detail data={data} />
			<nav className='flex gap-8'>
				<Link href='./'>Back to results</Link>
			</nav>
		</div>
	)
}

/* async function getData(id: string) {
	if (await cache[id]) {
		return cache[id]
	}

	const fetchData = async () => {
		console.log('ID', `https://pokeapi.co/api/v2/pokemon/${id}`)
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		if (!res.ok) {
			throw new Error('Failed to fetch data')
		}
		return res.json()
	}

	const promise = fetchData()
	cache[id] = promise
	return promise
} */
