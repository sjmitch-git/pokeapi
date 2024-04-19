import { PokemonData } from '@/types'

export default function Detail({ data }: { data: PokemonData }) {
	return (
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
