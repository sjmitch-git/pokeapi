'use client'

import { useState } from 'react'

import Image from 'next/image'

const CustomImage = ({ src, name }: { src: string; name: string }) => {
	const [error, setError] = useState<boolean>(false)

	return (
		<Image
			alt={name}
			onError={() => setError(true)}
			src={error ? '/image-break.png' : src}
			fill
			sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
			priority
		/>
	)
}

export default CustomImage
