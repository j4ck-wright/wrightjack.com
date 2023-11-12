<script lang="ts">
	import { Hero, FeaturedPosts } from '$lib/components';
</script>

<main>
	<Hero />
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1040 320">
		<path
			fill="#2B2683"
			d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,69.3C672,85,768,139,864,133.3C960,128,1056,64,1152,37.3C1248,11,1344,21,1392,26.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
		/>
	</svg>
	<div class="blue">
		<FeaturedPosts />
	</div>
</main>

<style lang="scss">
	@media (min-width: 775px) {
		.blue {
			margin-top: -12rem !important;
		}
	}

	.blue {
		background-color: #2b2683;
		margin-top: -4rem;
	}
</style>
