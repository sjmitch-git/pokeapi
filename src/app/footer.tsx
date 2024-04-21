import Container from './container'

export default function Footer() {
	return (
		<footer className='mt-auto pb-8'>
			<Container className='text-right'>
				<a
					href='https://github.com/sjmitch-git/pokeapi'
					target='_blank'
					className='btn border border-primary p-2 text-base'
				>
					Made by Stephen
				</a>
			</Container>
		</footer>
	)
}
