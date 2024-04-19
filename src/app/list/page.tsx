import Link from 'next/link'

import Results from './results'
import { Title } from '@/components'

export default function List() {
	return (
		<div>
			<Title title='List of Pokemons' />
			<Results />
			<nav className='flex gap-8'>
				<Link href='list/1'>First</Link>
				<Link href='list/2'>2nd</Link>
				<Link href='list/3'>3rd</Link>
			</nav>
		</div>
	)
}