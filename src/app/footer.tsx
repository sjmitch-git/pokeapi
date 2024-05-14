import Container from './container'

export default function Footer() {
	return (
		<footer className='mt-auto px-4 pb-8'>
			<Container className='text-right'>
				<a
					href='https://github.com/sjmitch-git/pokeapi'
					target='_blank'
					className='btn sm rounded  bg-light'
				>
					Made by Stephen
				</a>
			</Container>
		</footer>
	)
}
