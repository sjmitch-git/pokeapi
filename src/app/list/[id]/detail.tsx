import Link from 'next/link'
import { FaPlay, FaFastForward, FaFastBackward } from 'react-icons/fa'

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
	API_SPECIES_TOTAL,
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
				<div className='flex justify-start gap-2'>
					{Number(data.id) !== 1 && (
						<>
							<Link
								className='btn rounded bg-secondary text-light'
								href={`./${1}`}
							>
								<FaFastBackward />{' '}
								<span className='hidden md:inline-block'>First</span>
							</Link>
							<Link
								className='btn rounded bg-secondary text-light'
								href={getPrevLink(Number(data.id))}
							>
								<FaPlay className='rotate-180' />{' '}
								<span className='hidden md:inline-block'>Prev</span>
							</Link>
						</>
					)}
				</div>

				<div className='flex justify-end gap-2'>
					{Number(data.id) < API_SPECIES_EXTRA_END && (
						<>
							<Link
								className='btn rounded bg-secondary text-light'
								href={getNextLink(Number(data.id))}
							>
								<span className='hidden md:inline-block'>Next</span> <FaPlay />
							</Link>
							<Link
								className='btn rounded bg-secondary text-light'
								href={`./${10277}`}
							>
								<span className='hidden md:inline-block'>Last</span>
								<FaFastForward />
							</Link>
						</>
					)}
				</div>
			</nav>
		</div>
	)
}
