import Link from 'next/link'

import { Title, List } from '@/components'

export default function Home() {
	return (
		<div>
			<Title title='Explore the world of Pokémon!' />
			<div className='py-36 text-center'>
				<Link href='/list'>Search</Link>
			</div>
		</div>
	)
}
