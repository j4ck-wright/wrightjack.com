<script lang="ts">
	import { formatDate } from '$lib';

	export let data;
	const { content, metadata } = data.post;
	const { title, date, categories } = metadata;
	import Banner from '$lib/banners/banner3.jpg';
</script>

<img src={Banner} alt="" class="banner" />
<article>
	<header>
		<h1>{title}</h1>

		{#each categories as category}
			<span class="badge">#{category}</span>
		{/each}
		<br />
		<span class="monospace date">{formatDate(date)}</span>
	</header>
	{@html content}
</article>

<style lang="scss">
	h1 {
		margin: 0.6rem 0;
	}

	.date {
		display: block;
		font-size: 1.25rem;
		margin-top: 3rem;
	}

	.banner {
		width: 100%;
		max-height: 180px;
		object-fit: cover;
		padding: 0;
		margin: 0;
	}
</style>
