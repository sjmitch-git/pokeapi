import type { Metadata } from 'next'

import { Result } from '@/types'

import FetchData from '@/utils/fetchData'
import getId from '@/utils/getId'
import Results from './results'
import { Heading } from '@/components'

import { APP_BASE_URL, API_SPECIES_TOTAL } from '@/constants'

const title = 'Pokémon Species'
const description = `Explore ${API_SPECIES_TOTAL} Pokémon Species`

export const metadata: Metadata = {
	title: title,
	description: description,
	alternates: {
		canonical: 'list',
	},
	openGraph: {
		title: title,
		description: description,
		url: new URL(`${APP_BASE_URL}list`),
	},
}

export default async function List({ searchParams }: { searchParams: { page: string | null } }) {
	const limit = 12
	const page = searchParams.page || '1'
	const offset = ((Number(searchParams.page) - 1) * limit).toString()

	const data = await FetchData(`pokemon?offset=${offset}&limit=${limit}`)

	data.results.map((item: Result) => {
		item.id = getId(item.url)
	})

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
