import Link from 'next/link'

import { Heading } from '@/components'

export default function Home() {
	return (
		<div>
			<Heading
				label='Explore the world of Pokémon!'
				className='text-center'
			/>
			<div className='py-36 text-center'>
				<Link
					href='/list'
					className='btn bg-primary text-light'
				>
					Browse
				</Link>
			</div>
		</div>
	)
}
