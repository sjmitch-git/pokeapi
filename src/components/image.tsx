'use client'

import { useState, useEffect } from 'react'

const CustomImage = ({ src, name }: { src: string; name: string }) => {
	const [error, setError] = useState<boolean>(false)

	useEffect(() => {
		setError(false)
	}, [src])

	return (
		<img
			alt={`Image of ${name}`}
			onError={() => setError(true)}
			src={error ? '/image-break.png' : src}
		/>
	)
}

export default CustomImage
