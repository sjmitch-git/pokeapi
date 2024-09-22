import { Metadata } from 'next'
import { Result } from '@/types'
import FetchData from '@/utils/fetchData'
import getId from '@/utils/getId'
import Results from './results'
import { Heading } from '@/components'
import { APP_BASE_URL, API_SPECIES_TOTAL, SPRITE_PREFIX, SPRITE_SUFFIX } from '@/constants'

async function fetchSpeciesData(
	limit: number,
	offset: string
): Promise<{ species: string; data: any }> {
	const data = await FetchData(`pokemon?offset=${offset}&limit=${limit}`)
	const speciesList: string[] = []

	data.results.map((item: Result) => {
		speciesList.push(item.name.toUpperCase())
		item.id = getId(item.url)
	})

	const species = speciesList.join(', ')
	return { species, data }
}

const getImage = (id: string) => {
	return `${SPRITE_PREFIX}${id}${SPRITE_SUFFIX}`
}

export async function generateMetadata({
	searchParams,
}: {
	searchParams: { page: string | null }
}): Promise<Metadata> {
	const limit = 12
	const page = searchParams.page || '1'
	const offset = ((Number(page) - 1) * limit).toString()

	const { species, data } = await fetchSpeciesData(limit, offset)

	const description = `Explore ${API_SPECIES_TOTAL} Pokémon Species. On this page: ${species}`

	const firstSpeciesImage =
		data.results.length > 0 ? getImage(getId(data.results[0].url)) : '/icon.png'

	return {
		title: 'Pokémon Species',
		description: description,
		alternates: {
			canonical: 'list',
		},
		openGraph: {
			title: 'Pokémon Species',
			description: description,
			url: new URL(`${APP_BASE_URL}list`),
			images: [
				{
					url: firstSpeciesImage,
					width: 512,
					height: 512,
				},
			],
		},
	}
}

export default async function List({ searchParams }: { searchParams: { page: string | null } }) {
	const limit = 12
	const page = searchParams.page || '1'
	const offset = ((Number(page) - 1) * limit).toString()

	const { data } = await fetchSpeciesData(limit, offset)

	return (
		<div>
			<Heading
				label='Pokémon Species'
				className='text-center'
			/>
			<Results
				data={data}
				page={Number(page)}
			/>
		</div>
	)
}
