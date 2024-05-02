<!-- routes/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	export let buttonType: String = 'text';
</script>

<form method="post" action="/api/signout" use:enhance>
	{#if buttonType === 'button'}
		<button
			class="border-slate-800 border-2 rounded-md py-2 px-3 hover:bg-forestgreen-400 active:bg-forestgreen-700 dark:hover:bg-forestgreen-400 dark:active:bg-forestgreen-700 dark:border-white dark:focus:border-forestgreen-700 outline-none focus:border-forestgreen-700 focus:ring-2 focus:ring-forestgreen-700"
			type="submit">Sign Out</button
		>
	{:else}
		<button class="font-mont" type="submit">Sign Out</button>
	{/if}
</form>
