import { ResultsData } from '@/types'
import { Card } from '@/components'
import Navigation from './navigation'

import { SPRITE_PREFIX, SPRITE_SUFFIX } from '@/constants'

export default function Results({ data, page }: { data: ResultsData; page: number }) {
	const getLink = (id: string) => {
		return `/list/${id}`
	}

	const getImage = (id: string) => {
		return `${SPRITE_PREFIX}${id}${SPRITE_SUFFIX}`
	}

	return (
		<div className='mb-8'>
			<ul className='cards px-4'>
				{data?.results.map((item, _index) => (
					<Card
						key={item.name}
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
