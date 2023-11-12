<script lang="ts">
	import { formatDate } from '$lib';

	export let data;
	const { content, metadata } = data.post;
	const { title, date, categories } = metadata;
	import Banner from '$lib/assets/banners/banner3.jpg';
</script>

<img src={Banner} alt="" class="banner" />
<article>
	<header>
		<h1>{title}</h1>
		<span class="monospace date highlight">{formatDate(date)},</span>
		{#each categories as category}
			<span class="badge">#{category}</span>
		{/each}
	</header>
	{@html content}
</article>

<style lang="scss">
	h1 {
		margin: 0.6rem 0;
	}

	header {
		margin-bottom: 4rem;
	}

	.date {
		display: block;
		font-size: 1rem;
		margin-top: 1rem;
		margin-bottom: 0.6rem;
	}

	.banner {
		width: 100%;
		max-height: 180px;
		object-fit: cover;
		padding: 0;
		margin: 0;
	}
</style>
