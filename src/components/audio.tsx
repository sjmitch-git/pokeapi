'use client'

import { sendGAEvent } from '@next/third-parties/google'

import { useRef, useState, useEffect } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'

const Audio = ({ src }: { src: string }) => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)

	const play = () => {
		if (audioRef.current) {
			audioRef.current.play()
			sendGAEvent({ event: 'Play Audio', value: src })
			setIsPlaying(true)
		}
	}

	const pause = () => {
		if (audioRef.current) {
			audioRef.current.pause()
			setIsPlaying(false)
		}
	}

	useEffect(() => {
		const handleEnded = () => {
			setIsPlaying(false)
		}

		if (audioRef.current) {
			audioRef.current.addEventListener('ended', handleEnded)
		}

		return () => {
			if (audioRef.current) {
				audioRef.current.removeEventListener('ended', handleEnded)
			}
		}
	}, [])

	return (
		<div className='audio'>
			<audio ref={audioRef}>
				<source
					src={src}
					type='audio/ogg'
				/>
				<source
					src={src}
					type='audio/mpeg'
				/>
				<source
					src={src}
					type='audio/mp4'
				/>
				Your browser does not support the audio element.
			</audio>
			<div className='controls'>
				<button
					className='btn xl circle bg-primary'
					onClick={isPlaying ? pause : play}
				>
					{isPlaying ? <FaPause /> : <FaPlay />}
				</button>
			</div>
		</div>
	)
}

export default Audio