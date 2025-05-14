<script lang="ts">
	let { data } = $props();
	import WordDetails from '$lib/components/WordDetails.svelte';
	import { Spinner } from 'flowbite-svelte';
</script>

{#await data.info}
	<Spinner />
{:then result}
	<WordDetails result={result} />
{:catch error}
	<div class="flex flex-col items-center mt-40">
		<div class="text-6xl">😕</div>
		<p class="my-4">No Definitions Found</p>
		<p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
		<p class='text-red-600'>{error.message}</p>
	</div>
{/await}
