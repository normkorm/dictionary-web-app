<script lang="ts">
	import { Button, Dropdown, DropdownItem, Radio } from "flowbite-svelte";
	import { ChevronDownOutline } from "flowbite-svelte-icons";
	let font = $state('serif');
</script>

<Button class="!bg-transparent w-32 p-2 text-black dark:text-white !ring-0">{font}<ChevronDownOutline class="text-primary-600  h-6 w-6" /></Button>
<Dropdown simple class="w-48 space-y-1 p-3">
	<DropdownItem class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Radio name="group2" bind:group={font} value='serif'>Serif</Radio>
	</DropdownItem>
	<DropdownItem class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Radio name="group2" bind:group={font} value='sans-serif'>sans-serif</Radio>
	</DropdownItem>
	<DropdownItem class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
		<Radio name="group2" bind:group={font} value='monospace'>Monospace</Radio>
	</DropdownItem>
</Dropdown>

<svelte:head>
	<link rel="stylesheet" href={`./css/${font}.css`} />
</svelte:head>