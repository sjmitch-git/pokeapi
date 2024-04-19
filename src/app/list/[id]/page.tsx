import Link from 'next/link'

import { Heading } from '@/components'
import { PokemonData } from '@/types'

const cache: Record<string, Promise<any>> = {}

export default async function Detail({ params }: { params: { id: string } }) {
	const data = await getData(params.id)

	return (
		<div>
			<Heading label={data.name} />
			<nav className='flex gap-8'>
				<Link href='./'>Back to results</Link>
			</nav>
		</div>
	)
}

async function getData(id: string) {
	if (await cache[id]) {
		return cache[id]
	}

	const fetchData = async () => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		if (!res.ok) {
			throw new Error('Failed to fetch data')
		}
		return res.json()
	}

	const promise = fetchData()
	cache[id] = promise
	return promise
}
