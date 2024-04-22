'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import FetchData from '@/utils/fetchData'
import getId from '@/utils/getId'
import { Heading } from '@/components'
import { API_SPECIES_TOTAL } from '@/constants'
import { Result } from '@/types'

export default function SearchBox() {
	const router = useRouter()
	const [data, setData] = useState<Result[]>([])

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
			e.target.blur()
		}
	}

	return (
		<div className='border border-slate-100 bg-slate-50 p-2'>
			<Heading
				label='Search'
				level={4}
				className='text-slate-600'
			/>
			<fieldset>
				<input
					className='form-input w-full border-slate-200'
					id='species-choice'
					name='species-choice'
					type='text'
					list='species'
					placeholder='Select Name'
					onChange={handleChange}
				/>
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
			</fieldset>
		</div>
	)
}
