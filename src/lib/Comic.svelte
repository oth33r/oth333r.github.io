<script lang="ts">
	import type { ComicInfo } from '$lib/comic';
	import moment from 'moment';
	export let comic: ComicInfo;
</script>

<div class="comic1" id="comic">
	<div class="img-box">
		<img src={comic.img} alt={comic.alt} id="parseImg" />
	</div>
	<div class="text">
		<p>Comic of the day</p>
		<span
			>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem modi sed iure, nulla
			expedita corrupti minus quasi nisi quod, eligendi possimus sapiente veniam. Obcaecati
			provident, non possimus consequatur quas quod.</span
		>
		<p id="data">{moment(`${comic.year}-${comic.month}-${comic.day}`).fromNow()}</p>
	</div>
</div>
<div class="horizontal" />

<style>
	@import '/styles.css';
</style>
