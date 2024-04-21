const API_BASE_URL: string = 'https://pokeapi.co/api/v2/'
const API_SPECIES_COUNT: number = 1025
const API_SPECIES_EXTRA_START: number = 10001
const API_SPECIES_EXTRA_END: number = 10277
const API_SPECIES_TOTAL: number =
	API_SPECIES_COUNT + (API_SPECIES_EXTRA_END - API_SPECIES_EXTRA_START)
const API_LIMIT: number = 12
const API_PAGES_COUNT: number = Math.ceil(API_SPECIES_TOTAL / API_LIMIT)

const SPRITE_PREFIX =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'

const SPRITE_SUFFIX = '.png'

export {
	API_BASE_URL,
	API_SPECIES_COUNT,
	API_LIMIT,
	API_PAGES_COUNT,
	SPRITE_PREFIX,
	SPRITE_SUFFIX,
	API_SPECIES_EXTRA_START,
	API_SPECIES_EXTRA_END,
	API_SPECIES_TOTAL,
}
