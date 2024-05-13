export interface Ability {
	ability: {
		name: string
		url: string
	}
	is_hidden: boolean
	slot: number
}

export interface Result {
	name: string
	url: string
	id: string
}

export interface PokemonData {
	id: string
	name: string
	abilities: Ability[]
}

export interface ResultsData {
	count: string
	next: string | null
	previous: string | null
	results: Result[]
}

export type NavigationContextProps = {
	navigation: {
		current: number
		setCurrent: React.Dispatch<React.SetStateAction<number>>
	}
}
