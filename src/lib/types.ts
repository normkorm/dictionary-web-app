export type DataJSON = Word[] | NotFound;

export interface Phonetic {
	text: string;
	audio: string;
	sourceUrl?: string;
	license?: {
		name: string;
		url: string;
	};
}

interface Definition {
	definition: string;
	synonyms: string[];
	antonyms: string[];
	example?: string;
}

interface Meaning {
	partOfSpeech: string;
	definitions: Definition[];
	synonyms: string[];
	antonyms: string[];
}

interface NotFound {
	title: string;
	message: string;
	resolution: string;
}

interface Word {
	word: string;
	phonetic: string;
	phonetics: Phonetic[];
	meanings: Meaning[];
	license: {
		name: string;
		url: string;
	};
	sourceUrls: string[];
}
