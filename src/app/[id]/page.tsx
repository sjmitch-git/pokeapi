import { Title } from '@/components'

export default async function Detail({ params }: { params: { id: string } }) {
	const data = await getData(params.id)
	console.log(data)
	return (
		<div>
			<Title title={data.name} />
		</div>
	)
}

async function getData(id: string) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}
