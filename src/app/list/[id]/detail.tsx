import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@/components'

import { PokemonData } from '@/types'

import abilityData from '@/data/ability.min.json'
import getId from '@/utils/getId'

import { API_SPECIES_COUNT } from '@/constants'

export default function Detail({ data }: { data: PokemonData }) {
	console.log('id', data.id)
	const getAbilityDescription = (abilityId: number): string | null => {
		const ability = abilityData.find((ability) => ability.id === abilityId)
		return ability?.Description || null
	}

	return (
		<div>
			<div className='mb-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
				<div className=''>
					<figure className='relative aspect-square'>
						<Image
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`}
							alt={data.name}
							fill
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							priority
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
							href={`./${Number(data.id) - 1}`}
						>
							&#9664; Prev
						</Link>
					)}
				</div>

				{/* <div className='text-center'>
					{data.id} / {API_SPECIES_COUNT}
				</div> */}

				<div className='text-right'>
					{Number(data.id) < API_SPECIES_COUNT && (
						<Link
							className='btn bg-secondary py-0 text-light'
							href={`./${Number(data.id) + 1}`}
						>
							Next &#9654;
						</Link>
					)}
				</div>
			</nav>
		</div>
	)
}
