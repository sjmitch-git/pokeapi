import type { Metadata } from 'next'

import FetchData from '@/utils/fetchData'
import { Heading } from '@/components'
import Detail from './detail'
import GoBackLink from './goBackLink'

import { APP_BASE_URL } from '@/constants'

type Props = {
	params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const id = params.id

	const data = await FetchData(`pokemon/${params.id}`)
	const title = data.name.toUpperCase()

	return {
		title: data.name.toUpperCase(),
		alternates: {
			canonical: `list/${id}`,
		},
		openGraph: {
			title: title,
			url: new URL(`${APP_BASE_URL}list/${id}`),
			images: [
				{
					url: data.sprites.other.home.front_default,
					width: 512,
					height: 512,
				},
			],
		},
	}
}

export default async function Page({ params }: { params: { id: string } }) {
	const data = await FetchData(`pokemon/${params.id}`)

	return (
		<div>
			<Heading
				label={data.name}
				className='px-4 text-center'
			/>
			<Detail data={data} />
			<nav className='mb-4 p-4 text-center'>{params.id && <GoBackLink />}</nav>
		</div>
	)
}
