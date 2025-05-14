<script>
	import { Toggle } from 'flowbite-svelte';
	import { MoonOutline} from 'flowbite-svelte-icons';
	let theme = $state(false);

	$effect(() => {
		if (theme) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	})
</script>

<div class="flex items-center">
	<Toggle onclick={() => theme = !theme} />
	<MoonOutline class="dark:text-primary-400" />
</div>
