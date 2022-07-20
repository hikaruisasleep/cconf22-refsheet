<div class="container">
	<div class="palette section">
		<div class="name">
			<h5>Palette</h5>
		</div>
		<div class="swatches">
			<div class="swatch bg" />
			<div class="swatch fg" />
			<div class="swatch cy1" />
			<div class="swatch cy2" />
			<div class="swatch cy3" />
			<div class="swatch pr1" />
			<div class="swatch pr2" />
			<div class="swatch pr3" />
			<div class="swatch rd1" />
			<div class="swatch rd2" />
			<div class="swatch rd3" />
		</div>
	</div>
	<div class="fonts section">
		<div class="name">
			<h5>Fonts</h5>
			<a href="/fonts/public/CAPTURE_FONTS.zip" download>download all fonts (zip)</a>
		</div>
		<ul>
			<li class="airnt">
				<div>
					<p class="airnt-regular">Airnt | the quick brown fox jumped over the lazy dog</p>
					<p class="airnt-quantum">Airnt Quantum | the quick brown fox jumped over the lazy dog</p>
				</div>
			</li>
			<li class="aquire">
				<div>
					<p class="aquire-regular">Aquire | the quick brown fox jumped over the lazy dog</p>
					<p class="aquire-bold">Aquire Bold | the quick brown fox jumped over the lazy dog</p>
				</div>
			</li>
			<li class="cmg">
				<div>
					<p class="cmg-regular">CMG Sans Regular | the quick brown fox jumped over the lazy dog</p>
					<p class="cmg-bold">CMG Sans Bold | the quick brown fox jumped over the lazy dog</p>
					<p class="cmg-italic">CMG Sans Italic | the quick brown fox jumped over the lazy dog</p>
					<p class="cmg-wd">
						CMG Sans ExtraBold Wide | the quick brown fox jumped over the lazy dog
					</p>
					<p class="cmg-wdo">
						CMG Sans ExtraBold Wide Outline | the quick brown fox jumped over the lazy dog
					</p>
				</div>
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	@use '../lib/styles/style';
	@use '../lib/styles/colors';

	div.container {
		width: 60vw;
		margin: 0 auto;

		p,
		a,
		h5 {
			color: colors.$fg;
			font-size: 1.2em;
		}

		a {
			font-family: 'CMG Sans';
			text-decoration: none;
		}
		h5 {
			font-family: 'CMG Sans Wd';
			font-size: 2em;
		}

		div.section {
			display: flex;
			flex-direction: column;
			div.name {
				display: flex;
				flex-direction: row;
				align-items: flex-end;
				justify-content: space-between;
				border-bottom: 2px solid colors.$fg;
			}
		}

		div.palette {
			div.swatches {
				display: grid;
				grid-template-areas:
					'bg bg cy1 cy1 pr1 pr1 rd1 rd1'
					'bg bg cy1 cy1 pr1 pr1 rd1 rd1'
					'bg bg cy2 cy2 pr2 pr2 rd2 rd2'
					'fg fg cy2 cy2 pr2 pr2 rd2 rd2'
					'fg fg cy3 cy3 pr3 pr3 rd3 rd3'
					'fg fg cy3 cy3 pr3 pr3 rd3 rd3';
				gap: 0px;
				grid-template-columns: repeat(8, minmax(100px, 1fr));
                grid-template-rows: repeat(6, minmax(100px, 1fr));
				div.swatch {
				}
				.bg {
					background: colors.$bg;
					grid-area: bg;
				}
				.fg {
					background: colors.$fg;
					grid-area: fg;
				}
				.cy1 {
					background: colors.$cy1;
					grid-area: cy1;
				}
				.cy2 {
					background: colors.$cy2;
					grid-area: cy2;
				}
				.cy3 {
					background: colors.$cy3;
					grid-area: cy3;
				}
				.pr1 {
					background: colors.$pr1;
					grid-area: pr1;
				}
				.pr2 {
					background: colors.$pr2;
					grid-area: pr2;
				}
				.pr3 {
					background: colors.$pr3;
					grid-area: pr3;
				}
				.rd1 {
					background: colors.$rd1;
					grid-area: rd1;
				}
				.rd2 {
					background: colors.$rd2;
					grid-area: rd2;
				}
				.rd3 {
					background: colors.$rd3;
					grid-area: rd3;
				}
			}
		}

		div.fonts {
			ul li div {
				p {
					font-size: 1.2em;
				}
				.airnt-regular {
					font-family: 'Airnt';
				}
				.airnt-quantum {
					font-family: 'AirntQuantum';
				}
				.aquire-regular {
					font-family: 'Aquire';
				}
				.aquire-bold {
					font-family: 'Aquire';
					font-weight: bold;
				}
				.cmg-regular {
					font-family: 'CMG Sans';
				}
				.cmg-bold {
					font-family: 'CMG Sans';
					font-weight: bold;
				}
				.cmg-italic {
					font-family: 'CMG Sans';
					font-style: italic;
				}
				.cmg-wd {
					font-family: 'CMG Sans Wd';
				}
				.cmg-wdo {
					font-family: 'CMG Sans WdOutline';
				}
			}
		}
	}
</style>
