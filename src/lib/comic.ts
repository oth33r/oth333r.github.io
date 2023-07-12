export interface ComicInfo {
	img: string;
	year: string;
	month: string;
	day: string;
	alt: string;
	safe_title: string;
}

async function fetchXKCDIdentifier(email: string): Promise<string> {
	const params = new URLSearchParams();
	if (email) {
		params.append('email', email);
	}

	const r = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString());
	return await r.json();
}

async function fetchInfo(id: string): Promise<ComicInfo> {
	const params = new URLSearchParams();
	if (id) {
		params.append('id', id);
	}

	const r = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString());
	return await r.json();
}

export async function fetchComic() {
	const identifier = await fetchXKCDIdentifier('i.zubkov@innopolis.university');
	const info: ComicInfo = await fetchInfo(identifier);
	// const date = moment(`${info.year}-${info.month}-${info.day}`).fromNow();
	return info;
}
