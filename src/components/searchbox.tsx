'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import FetchData from '@/utils/fetchData'
import getId from '@/utils/getId'
import { API_SPECIES_TOTAL } from '@/constants'
import { Result } from '@/types'

import { FaSearch } from 'react-icons/fa'

import Button from './button'

export default function SearchBox() {
	const router = useRouter()
	const [data, setData] = useState<Result[]>([])
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			const responseData = await FetchData(`pokemon?limit=${API_SPECIES_TOTAL}`)
			const modifiedData = responseData.results
				.map((item: Result) => {
					return { ...item, id: getId(item.url) }
				})
				.sort((a: Result, b: Result) => (a.name < b.name ? -1 : 1))
			setData(modifiedData)
		}
		fetchData()
	}, [])

	const handleChange = (e: any) => {
		const selectedOption = data.find((option: Result) => option.name === e.target.value)

		if (selectedOption) {
			router.push(`/list/${selectedOption.id}`)
			setOpen(false)
			e.target.blur()
		}
	}

	const handleClick = () => {
		setOpen(!open)
	}

	return (
		<div className='relative flex flex-row'>
			<input
				className={`form-input text-dark transition-all ${open ? 'w-auto border-info' : 'w-0 border-0 px-0'}`}
				id='species-choice'
				name='species-choice'
				type='text'
				list='species'
				placeholder='Select Name'
				onChange={handleChange}
			/>
			<Button
				className='xl z-10 bg-dark'
				onClick={handleClick}
				title='Toggle Search'
			>
				<FaSearch />
			</Button>
			<datalist
				className=''
				id='species'
			>
				{data.map((el: Result) => (
					<option
						key={el.id}
						value={el.name}
					/>
				))}
			</datalist>
		</div>
	)
}
