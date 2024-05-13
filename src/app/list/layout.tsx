export default function ListLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className='grid min-h-full grid-cols-6 gap-4'>
			<article className='col-span-full'>{children}</article>
		</main>
	)
}
