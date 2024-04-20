import Link from 'next/link'
import Image from 'next/image'

import { ResultsData } from '@/types'
import { Heading, Card } from '@/components'
import Navigation from './navigation'

export default function Results({ data, page }: { data: ResultsData; page: number }) {
	//console.log('DATA', data.previous, data.next, 'PAGE', page)

	const getLink = (id: string) => {
		return `list/${id}`
	}

	const getImage = (id: string) => {
		// return `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.png`
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
	}

	return (
		<div>
			<ul className='cards'>
				{data?.results.map((item, _index) => (
					<Card
						key={item.id}
						name={item.name}
						image={getImage(item.id)}
						link={getLink(item.id)}
					/>
				))}
			</ul>
			<Navigation
				prev={data.previous}
				next={data.next}
				page={page}
			/>
		</div>
	)
}
