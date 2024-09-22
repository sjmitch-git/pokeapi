import Link from 'next/link'

import Container from './container'

import { SearchBox } from '@/components'

export default function Header() {
	return (
		<header>
			<Container>
				<figure className='mx-auto mt-8 max-w-xl'>
					<Link
						href='/'
						className='relative inline-block h-full w-full'
					>
						<img
							src='/logo.png'
							alt='Poképea Logo'
							width={576}
							height={259}
						/>
					</Link>
				</figure>
				<div className='absolute right-0 top-0'>
					<SearchBox />
				</div>
			</Container>
		</header>
	)
}
