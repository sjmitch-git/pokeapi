import Link from 'next/link'

import { Heading, CustomImage } from '@/components'

import { PokemonData } from '@/types'

import abilityData from '@/data/ability.min.json'
import getId from '@/utils/getId'

import {
	API_SPECIES_COUNT,
	SPRITE_PREFIX,
	SPRITE_SUFFIX,
	API_SPECIES_EXTRA_START,
	API_SPECIES_EXTRA_END,
} from '@/constants'

export default function Detail({ data }: { data: PokemonData }) {
	const getAbilityDescription = (abilityId: number): string | null => {
		const ability = abilityData.find((ability) => ability.id === abilityId)
		return ability?.Description || null
	}

	const getImage = (id: string) => {
		return `${SPRITE_PREFIX}${id}${SPRITE_SUFFIX}`
	}

	const getPrevLink = (id: number) => {
		if (id === API_SPECIES_EXTRA_START) {
			return `./${API_SPECIES_COUNT}`
		} else return `./${id - 1}`
	}

	const getNextLink = (id: number) => {
		if (id === API_SPECIES_COUNT) {
			return `./${API_SPECIES_EXTRA_START}`
		} else return `./${id + 1}`
	}

	return (
		<div>
			<div className='mb-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
				<div className=''>
					<figure className='relative aspect-square'>
						<CustomImage
							src={getImage(data.id)}
							name={data.name}
						/>
					</figure>
				</div>
				<div className=''>
					<Heading
						label='Abilities'
						level={4}
					/>
					<ul>
						{data.abilities.map((item) => (
							<li
								key={item.ability.name}
								className='mb-2'
							>
								<Heading
									label={item.ability.name.replaceAll('-', ' ')}
									level={5}
									className='opacity-75'
								/>
								<p>{getAbilityDescription(Number(getId(item.ability.url)))}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<nav className='grid grid-cols-2 items-center justify-between border-b border-slate-700 pb-8'>
				<div className='text-left'>
					{Number(data.id) !== 1 && (
						<Link
							className='btn bg-secondary py-0 text-light'
							href={getPrevLink(Number(data.id))}
						>
							&#9664; Prev
						</Link>
					)}
				</div>

				<div className='text-right'>
					{Number(data.id) < API_SPECIES_EXTRA_END && (
						<Link
							className='btn bg-secondary py-0 text-light'
							href={getNextLink(Number(data.id))}
						>
							Next &#9654;
						</Link>
					)}
				</div>
			</nav>
		</div>
	)
}
