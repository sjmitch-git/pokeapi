function getId(url: string): string {
	const match = url.match(/(\d+)(?!.*\d)/)
	return match ? match[0] : '1'
}

export default getId
