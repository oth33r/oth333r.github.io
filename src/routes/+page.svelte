<script lang="ts">
	import Main from '$lib/Main.svelte';
	import Comic from '$lib/Comic.svelte';
	import { fetchComic } from '$lib/comic';
</script>

<main>
	<Main />
	{#await fetchComic()}
		Loading...
	{:then comic}
		<Comic {comic} />
	{/await}
</main>
