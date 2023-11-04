<script lang="ts">
	// import { formatDate } from '$lib';

	export let data;
	const { content, metadata } = data.post;
</script>

<article>
	Hello!
	{@html content}
</article>
