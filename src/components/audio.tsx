'use client'

import { sendGAEvent } from '@next/third-parties/google'

import { useRef, useState, useEffect } from 'react'
import { FaPause, FaVolumeUp } from 'react-icons/fa'

import Button from './button'

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
				<Button
					className='xl circle bg-primary'
					onClick={isPlaying ? pause : play}
					title='Play Audio'
				>
					{isPlaying ? <FaPause /> : <FaVolumeUp />}
				</Button>
			</div>
		</div>
	)
}

export default Audio
