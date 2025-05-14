<script>
	import '../app.css'
	import FontSelection from '$lib/components/FontSelection.svelte';
	import { Input } from 'flowbite-svelte';
	import ToggleTheme from '$lib/components/ToggleTheme.svelte';
	import { BookOutline } from 'flowbite-svelte-icons';
	let { children } = $props();
	let value = $state('')
</script>

<div class="px-16 max-w-7xl mx-auto">
	<header class='flex justify-between items-center my-8'>
		<BookOutline class="size-8 dark:text-primary-600" />
		<div class="flex">
			<FontSelection />
			<ToggleTheme />
		</div>
	</header>

	<main>
		<form action={value}>
			<Input class="my-8" bind:value required placeholder="Search for any word…" />
		</form>
		{@render children()}
	</main>
</div>
