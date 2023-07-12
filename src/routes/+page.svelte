<script src="src/lib/index.ts" lang="ts">
	import Main from '$lib/Main.svelte';
	import Comic from '$lib/Comic.svelte';

	import type { ComicInfo } from '$lib/index';

	let comic: ComicInfo;
</script>

<main>
	<Main />
	<Comic {comic} />
</main>
