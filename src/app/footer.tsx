import Container from './container'

export default function Footer() {
	return (
		<footer className='mt-auto pb-8'>
			<Container className='text-right'>
				<a
					href='https://github.com/sjmitch-git/pokeapi'
					target='_blank'
					className='btn sm rounded border border-gray-400'
				>
					Made by Stephen
				</a>
			</Container>
		</footer>
	)
}
