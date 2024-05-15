import Image from 'next/image'
import Link from 'next/link'

import Container from './container'
import logo from '../../public/logo.png'

import { SearchBox } from '@/components'

export default function Header() {
	return (
		<header>
			<Container>
				<figure className='mx-auto mb-4 max-w-xl'>
					<Link
						href='/'
						className='relative inline-block h-full w-full'
					>
						<Image
							src={logo}
							alt='Poképea Logo'
							sizes='100vw'
							style={{
								width: '100%',
								height: 'auto',
							}}
							priority
						/>
					</Link>
				</figure>
				{/* <div className='absolute right-10 top-10'>
					<SearchBox />
				</div> */}
			</Container>
		</header>
	)
}
