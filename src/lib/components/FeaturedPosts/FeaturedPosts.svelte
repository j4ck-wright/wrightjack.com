<h2>Featured posts</h2>
<div class="posts">
	<div>1</div>
	<div>2</div>
	<div>3</div>
</div>

<style lang="scss">
	@media (min-width: 775px) {
		h2 {
			font-size: 2.5rem !important;
		}

		.posts {
			flex-direction: row !important;
		}
	}

	h2 {
		text-align: center;
		margin: auto;
		color: #dfdfdf;
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 2rem 0;
		align-items: center;
		justify-content: center;
	}
</style>
