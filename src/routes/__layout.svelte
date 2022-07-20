<header>
	<div class="bigtitle">
		<a href="/" class="gt-home">
			<p class="title">CAPTURE CONFERENCE 2022</p>
			<p class="subtitle">Design Reference Sheet</p>
		</a>
	</div>
	<nav>
		<a href="/">home</a>
        <a href="/assets">assets</a>
		<a href="/inspo">inspirations</a>
	</nav>
</header>
<slot />

<style lang="scss">
	@use '../lib/styles/style';
	@use '../lib/styles/colors';

	:global() {
		p,
		a {
			color: colors.$fg;
		}
		div.container {
			p,
			a {
				font-family: 'CMG Sans';
			}
		}
	}

	:global(body) {
		background-color: colors.$bg;
	}

	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 20px;
        margin-top: 10px;
		.bigtitle {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			width: max-content;
            a.gt-home {
                text-decoration: none;
            }
			.title {
				font-family: 'AirntQuantum';
				font-size: 2.2em;
			}
			.subtitle {
				font-family: 'Aquire';
				font-weight: bold;
				font-size: 1.5em;
			}
		}
		nav {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: center;
			a {
				font-family: 'Aquire';
                font-size: 1.2em;
			}
		}
	}
</style>
