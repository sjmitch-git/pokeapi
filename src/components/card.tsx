import Link from 'next/link'

import Heading from './heading'
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
			<figure className='relative hidden aspect-square md:block'>
				<CustomImage
					src={image}
					name={name}
				/>
			</figure>

			<Link
				href={link}
				className='stretched-link text-current'
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
