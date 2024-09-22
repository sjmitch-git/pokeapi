import Link from 'next/link'
import { FaPlay, FaFastForward, FaFastBackward } from 'react-icons/fa'

import { Audio, Heading, CustomImage } from '@/components'

import { PokemonData, AbilityProps } from '@/types'

import abilityData from '@/data/ability.min.json'
import getId from '@/utils/getId'

import {
	API_SPECIES_COUNT,
	SPRITE_PREFIX,
	SPRITE_SUFFIX,
	API_SPECIES_EXTRA_START,
	API_SPECIES_EXTRA_END,
} from '@/constants'

export default function Detail({
	data,
	getAbilities,
}: {
	data: PokemonData
	getAbilities: (string: string) => void
}) {
	let abilities = `${data.name.toUpperCase()} abilities | `

	const formatAbilities = (ability: AbilityProps) => {
		abilities = abilities + `${ability.Name}: ${ability.Description} `
		getAbilities(abilities)
	}

	const audioSrc = data.cries.latest
	const getAbilityDescription = (abilityId: number): string | null => {
		const ability = abilityData.find((ability) => ability.id === abilityId)
		if (ability) formatAbilities(ability)
		return ability?.Description || null
	}

	const getImage = (id: string) => {
		return `${SPRITE_PREFIX}${id}${SPRITE_SUFFIX}`
	}

	const getPrevLink = (id: number) => {
		if (id === API_SPECIES_EXTRA_START) {
			return `/list/${API_SPECIES_COUNT}`
		} else return `/list/${id - 1}`
	}

	const getNextLink = (id: number) => {
		if (id === API_SPECIES_COUNT) {
			return `/list/${API_SPECIES_EXTRA_START}`
		} else return `/list/${id + 1}`
	}

	return (
		<div>
			<div className='mb-8 grid grid-cols-1 bg-black md:grid-cols-2'>
				<div className=''>
					<figure className='relative aspect-square bg-dark'>
						<CustomImage
							src={getImage(data.id)}
							name={data.name}
						/>
					</figure>
				</div>
				<div className='p-4'>
					<Heading
						label='Abilities'
						level={2}
					/>
					<ul className='mb-8'>
						{data.abilities.map((item) => (
							<li
								key={item.ability.name}
								className='mb-2'
							>
								<p className='h5 opacity-75'>
									{item.ability.name.replaceAll('-', ' ')}
								</p>
								<p>{getAbilityDescription(Number(getId(item.ability.url)))}</p>
							</li>
						))}
					</ul>
					<Heading
						label='Cries'
						level={2}
					/>

					<Audio src={audioSrc} />
				</div>
			</div>
			<nav className='mb-4 grid grid-cols-2 items-center justify-between border-b border-slate-50 px-4 pb-8 md:px-0'>
				<div className='flex justify-start gap-2'>
					{Number(data.id) !== 1 && (
						<>
							<Link
								className='btn lg md:xl rounded bg-secondary text-light'
								href={`/list/${1}`}
							>
								<FaFastBackward />{' '}
								<span className='hidden md:inline-block'>First</span>
							</Link>
							<Link
								className='btn lg md:xl rounded bg-secondary text-light'
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
								className='btn lg md:xl rounded bg-secondary text-light'
								href={getNextLink(Number(data.id))}
							>
								<span className='hidden md:inline-block'>Next</span> <FaPlay />
							</Link>
							<Link
								className='btn lg md:xl rounded bg-secondary text-light'
								href={`/list/${API_SPECIES_EXTRA_END}`}
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
