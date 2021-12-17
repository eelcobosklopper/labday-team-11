export async function get({ params }) {
	const { slug } = params;

	if (slug === 'game1') {
		return {
			body: {
				game: '1'
			}
		};
	}

	return {
		body: {}
	};
}
