<script src="src/lib/index.ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<header>
	<Header />
</header>

<slot />

<footer>
	<Footer />
</footer>
