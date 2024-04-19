export default function Title({ title }: { title: string }) {
	return (
		<h1 className='mb-4 text-center text-2xl font-bold capitalize md:text-3xl lg:text-4xl xl:text-5xl'>
			{title}
		</h1>
	)
}
