import Link from 'next/link'

import CustomImage from './image'

interface CardProps {
	image: string
	name: string
	link: string
	className?: string
}

export default function Card({ image, name, link, className = '' }: CardProps) {
	return (
		<li className={`card ${className}`}>
			<figure className='relative aspect-square min-w-24 md:w-full'>
				<CustomImage
					src={image}
					name={name}
				/>
			</figure>

			<Link
				href={link}
				className='stretched-link text-current'
			>
				<p className='h5 mb-0'>{name}</p>
			</Link>
		</li>
	)
}
