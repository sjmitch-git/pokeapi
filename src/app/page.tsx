import Link from 'next/link'
import { FaPlay } from 'react-icons/fa'

import { APP_DESCRIPTION, APP_TITLE } from '@/constants'

import { Heading } from '@/components'

export default function Home() {
	return (
		<div>
			<Heading
				label={APP_TITLE}
				className='text-center'
			/>
			<Heading
				label={APP_DESCRIPTION}
				level={2}
				className='text-center'
			/>

			<div className='flex justify-center py-24'>
				<Link
					href='/list'
					className='btn xxl circle border-8 border-light bg-primary text-light'
				>
					<span className='sr-only'>Browse</span> <FaPlay />
				</Link>
			</div>
		</div>
	)
}
