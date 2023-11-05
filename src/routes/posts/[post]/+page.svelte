<script lang="ts">
	// import { formatDate } from '$lib';
	import './code.scss';

	export let data;
	const { content, metadata } = data.post;

	console.log(metadata);
</script>

<article>
	{@html content}
</article>
