<script lang="ts">
	// import type { ComicInfo } from './index';

	// export var comic: ComicInfo;

	// import { onMount } from 'svelte';
	// import moment from 'moment';
	// onMount(() => {
	// 	if (typeof document !== 'undefined') {
	// 		interface Comic {
	// 			month: string;
	// 			url: string;
	// 			year: string;
	// 			safe_title: string;
	// 			alt: string;
	// 			img: string;
	// 			day: string;
	// 		}

	// 		async function fetchXKCDIdentifier(email: string): Promise<string> {
	// 			const params = new URLSearchParams();
	// 			if (email) {
	// 				params.append('email', email);
	// 			}

	// 			const r = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString());
	// 			return await r.json();
	// 		};

	// 		async function fetchInfo(id: string): Promise<Comic> {
	// 			const params = new URLSearchParams();
	// 			if (id) {
	// 				params.append('id', id);
	// 			}

	// 			const r = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString());
	// 			return await r.json();
	// 		};
	// 		const func = async () => {
	// 			const identifier = await fetchXKCDIdentifier('i.zubkov@innopolis.university');
	// 			const info: Comic = await fetchInfo(identifier);
	// 			const date = moment(`${info.year}-${info.month}-${info.day}`).fromNow();
	// 			comic.safe_title = info.safe_title;
	// 			comic.dataInfo = date;
	// 		};

	// 		func();
	// 	}
	// });
</script>

<div class="comic1" id="comic">
	<div class="img-box">
		<img src="" alt="" id="parseImg" />
	</div>
	<div class="text">
		<p>Comic of the day</p>
		<span
			>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem modi sed iure, nulla
			expedita corrupti minus quasi nisi quod, eligendi possimus sapiente veniam. Obcaecati
			provident, non possimus consequatur quas quod.</span
		>
		<p id="data" />
	</div>
</div>
<div class="horizontal" />

<style>
	@import '/styles.css';
</style>
