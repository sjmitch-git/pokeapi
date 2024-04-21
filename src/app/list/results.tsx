import { ResultsData } from '@/types'
import { Card } from '@/components'
import Navigation from './navigation'

export default function Results({ data, page }: { data: ResultsData; page: number }) {
	const getLink = (id: string) => {
		return `list/${id}`
	}

	const getImage = (id: string) => {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
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
