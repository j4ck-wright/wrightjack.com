<script lang="ts">
	import headshot from '../../assets/headshot.png';
</script>

<div class="hero">
	<div class="left">
		<p class="hi">Hi,</p>
		<p class="name-line">I'm <span class="highlight">Jack Wright</span>.</p>
		<p class="blurb">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque saepe ipsam, earum
			quisquam quia necessitatibus iusto expedita accusantium voluptates molestias. Quis commodi
			quisquam corporis deleniti eum numquam nesciunt provident id.
		</p>
	</div>
	<img src={headshot} alt="" class="right" />
</div>

<style lang="scss">
	.hero {
		padding: 4rem 1.5rem;
		display: flex;
		gap: 2rem;
		flex-direction: column-reverse;
	}

	.right {
		width: auto;
	}

	.left {
		p {
			margin: 0;
		}

		.hi {
			font-size: 4rem;
			font-weight: bold;
			margin-bottom: -1rem;
		}

		.name-line {
			font-size: 2.5rem;
			font-weight: bold;
			margin-bottom: 0.5rem;
		}

		.highlight {
			color: #2b2683;
		}
	}

	@media (min-width: 775px) {
		.hero {
			padding: 8rem 20% 0 20% !important;
			flex-direction: row !important;
		}

		.left {
			display: flex;
			flex-direction: column;
			margin: auto;
		}

		.right {
			max-width: 420px;
		}

		.blurb {
			padding-right: 4rem;
		}
	}
</style>
