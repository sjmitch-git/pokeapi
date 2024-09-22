import type { Metadata } from 'next'
import { Ability } from '@/types'
import FetchData from '@/utils/fetchData'
import { Heading } from '@/components'
import Detail from './detail'
import GoBackLink from './goBackLink'
import abilityData from '@/data/ability.min.json'
import getId from '@/utils/getId'

import { APP_BASE_URL } from '@/constants'

type Props = {
	params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const id = params.id
	const data = await FetchData(`pokemon/${id}`)
	const title = data.name.toUpperCase()

	const abilities = data.abilities
		.map((ability: Ability) => {
			const abilityId = getId(ability.ability.url)
			const abilityDetails = abilityData.find((ab) => ab.id === Number(abilityId))
			return abilityDetails ? `${abilityDetails.Name}: ${abilityDetails.Description}` : null
		})
		.filter(Boolean)
		.join(', ')

	const description = `${title} abilities: ${abilities}`

	return {
		title: title,
		description: description,
		alternates: {
			canonical: `list/${id}`,
		},
		openGraph: {
			title: title,
			url: new URL(`${APP_BASE_URL}list/${id}`),
			images: [
				{
					url: data.sprites.other.home.front_default,
					width: 512,
					height: 512,
				},
			],
		},
	}
}

export default async function Page({ params }: { params: { id: string } }) {
	const data = await FetchData(`pokemon/${params.id}`)

	return (
		<div>
			<Heading
				label={data.name}
				className='px-4 text-center'
			/>
			<Detail data={data} />
			<nav className='mb-4 p-4 text-center'>{params.id && <GoBackLink />}</nav>
		</div>
	)
}
