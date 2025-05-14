import { error, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, fetch }) => {
	const word = params.word;
	const url = `https://api.dictionaryapi.dev/media/pronunciations/en/${word}-uk.mp3`;

	const response = await fetch(url);
	if (!response.ok) throw error(404, 'Audio not found');

	return new Response(response.body, {
		headers: {
			'Content-Type': 'audio/mpeg',
			'Cache-Control': 'public, max-age=86400'
		}
	});
};
