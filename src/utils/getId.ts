function getId(url: string): string | null {
	const match = url.match(/(\d+)(?!.*\d)/)
	return match ? match[0] : null
}

export default getId
