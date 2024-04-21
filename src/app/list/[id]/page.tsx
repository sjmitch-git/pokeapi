import FetchData from '@/utils/fetchData'
import { Heading } from '@/components'
import Detail from './detail'
import GoBackLink from './goBackLink'

export default async function Page({ params }: { params: { id: string } }) {
	const data = await FetchData(`pokemon/${params.id}`)

	return (
		<div>
			<Heading label={data.name} />
			<Detail data={data} />
			<nav className='p-4 text-center'>{params.id && <GoBackLink />}</nav>
		</div>
	)
}
