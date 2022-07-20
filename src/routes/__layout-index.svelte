<div class="wrap">
	<div class="bg">
		<video autoplay muted loop>
			<source src="/media/gobo-comp.mp4" type="video/mp4" />
		</video>
		<div class="overlay" />
	</div>
	<div class="box">
		<div class="bigtitle">
			<a href="/" class="gt-home">
				<p class="title">CAPTURE CONFERENCE 2022</p>
				<p class="subtitle">Design Reference Sheet</p>
			</a>
		</div>
		<nav>
			<a href="/assets">assets</a>
			<p>·</p>
			<a href="/inspo">inspirations</a>
		</nav>
	</div>
</div>

<style lang="scss">
	@use '../lib/styles/style';
	@use '../lib/styles/colors';

	body {
		background-color: colors.$bg;
	}
	p,
	a {
		color: colors.$fg;
	}
	div.wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 97vh;
		div.bg {
			min-height: 100%;
			min-width: 100%;
			video {
				position: fixed;
				width: auto;
				height: 100vh;
				z-index: -3;
				right: 0;
				bottom: 0;
			}
			.overlay {
				z-index: -2;
				background: rgba(0, 0, 0, 0.6);
				position: fixed;
				right: 0;
				top: 0;
				width: 100vw;
				height: 100vh;
			}
		}
		div.box {
			position: fixed;
			right: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			width: 100vw;
			.bigtitle {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				width: max-content;
				margin-bottom: 1em;
				a.gt-home {
					text-decoration: none;
				}
				.title {
					font-family: 'AirntQuantum';
					font-size: 4em;
				}
				.subtitle {
					font-family: 'Aquire';
					font-weight: bold;
					font-size: 2em;
				}
			}
			nav {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;
				margin-top: 1em;
				a {
					font-family: 'Aquire';
					font-size: 1.5em;
				}
				p {
					font-family: 'Aquire';
					font-size: 3em;
				}
				a:hover {
					color: colors.$cy3;
				}
			}
			nav > * {
				margin: 0 0.5em;
			}
		}
	}
</style>
