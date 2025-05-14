<script>
	import { PlaySolid } from "flowbite-svelte-icons";

	let { result } = $props();
	let hasAudio = $state(false);

	let word = result[0].word;
	let audio = new Audio(`/audio/${word}`);

	function honk() {
		audio.load();
		audio.play();
	}

	$effect(() => {
		(async () => {
			try {
				const res = await fetch(`/audio/${word}`);
				if (res.ok) {
					hasAudio = true;
				}
			} catch (e) {
				console.error(e);
				hasAudio = false;
			}
		})()
	})
</script>

{#if (hasAudio)}
			<button onclick={honk} class="bg-primary-200 cursor-pointer dark:bg-primary-600 active:scale-110 p-8 size-8 flex items-center justify-center rounded-full">
				<PlaySolid class="text-primary-400 dark:text-black size-6" />
			</button>
{/if}