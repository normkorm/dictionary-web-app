import { error, type LoadEvent } from '@sveltejs/kit';

async function getWordInfo(word: string, fetch: LoadEvent['fetch']) {
	const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

	if (!response.ok) error(response.status);

	return response.json();
}

export async function load({ params, fetch }) {
	const { word } = params;
	return {
		info: getWordInfo(word, fetch)
	};
}
