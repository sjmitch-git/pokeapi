import type { Metadata } from 'next'

import { Result } from '@/types'

import FetchData from '@/utils/fetchData'
import getId from '@/utils/getId'
import Results from './results'
import { Heading } from '@/components'

export const metadata: Metadata = {
	title: 'Pokémon Species',
	description: 'APP_DESCRIPTION',
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
