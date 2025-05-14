<script lang="ts">
	import SoundButton from '$lib/components/SoundButton.svelte';
	let { result } = $props();
</script>

<div>
	<div class="flex justify-between">
		<div>
			<h1>{result[0].word}</h1>
			<h4 class="text-primary-600 text-2xl">{result[0].phonetic}</h4>
		</div>
		<SoundButton result={result} />
	</div>
	{#each result[0].meanings as meaning, i(i)}
		<div class="my-4">
			<i class="text-xl">{meaning.partOfSpeech}</i>
			<p class="text-gray-500 text-xl">Meaning</p>
			<ul class='list-disc marker:text-primary-600'>
				{#each meaning.definitions as definition, i(i)}
					<li>{definition.definition}</li>
					<p class="text-gray-400">{definition.example}</p>
				{/each}
			</ul>
		</div>
	{/each}
</div>
