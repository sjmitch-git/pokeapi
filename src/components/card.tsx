import Link from 'next/link'
import Image from 'next/image'

import Heading from './heading'

interface CardProps {
	image: string
	name: string
	link: string
	className?: string
}

export default function Card({ image, name, link, className = '' }: CardProps) {
	return (
		<li className={`card ${className}`}>
			<figure className='relative aspect-square'>
				<Image
					src={image}
					alt={name}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					priority
				/>
			</figure>

			<Link
				href={link}
				className='stretched-link'
			>
				<Heading
					label={name}
					level={5}
					className='mb-0'
				/>
			</Link>
		</li>
	)
}
