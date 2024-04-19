import Image from 'next/image'
import Link from 'next/link'

import Container from './container'

export default function Header() {
	return (
		<header>
			<Container>
				<figure className='mx-auto mb-4 aspect-[2.726/1] max-w-md'>
					<Link
						href='/'
						className='relative inline-block h-full w-full'
					>
						<Image
							src='/logo.svg'
							alt='Pokémon Logo'
							fill
							priority
						/>
					</Link>
				</figure>
			</Container>
		</header>
	)
}
