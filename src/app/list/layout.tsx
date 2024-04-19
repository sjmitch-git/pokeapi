import Sidebar from './sidebar'

import { Filter } from '@/components'

export default function ListLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className='grid min-h-full grid-cols-6 gap-4'>
			<Sidebar className='col-span-full md:col-span-1'>
				<Filter />
			</Sidebar>
			<article className='col-span-full bg-slate-100 md:col-span-5'>{children}</article>
		</main>
	)
}
