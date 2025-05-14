<script>
	import { PlaySolid } from "flowbite-svelte-icons";

	let { result } = $props();

	let audioUrl = result[0].phonetics[0].audio;
	let audio = new Audio(audioUrl);

	function honk() {
		audio.load();
		audio.play();
	}
</script>

{#if (audioUrl)}
			<button onclick={honk} class="bg-primary-200 cursor-pointer dark:bg-primary-600 active:scale-110 p-8 size-8 flex items-center justify-center rounded-full">
				<PlaySolid class="text-primary-400 dark:text-black size-6" />
			</button>
{/if}