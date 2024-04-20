import { API_BASE_URL } from '@/constants'

async function FetchData(req: string) {
	const res = await fetch(`${API_BASE_URL}${req}`)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default FetchData
