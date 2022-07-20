<header>
	<div class="bigtitle">
		<p class="title">CAPTURE CONFERENCE 2022</p>
		<p class="subtitle">Design Reference Sheet</p>
	</div>
    <nav>
        <a href="/">home</a>
        <a href="/inspo">inspirations</a>
        <a href="/assets">assets</a>
    </nav>
</header>
<slot />

<style lang="scss">
	@use '../lib/styles/style';

	header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 20px;
		.bigtitle {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: max-content;
			.title {
				font-family: 'AirntQuantum';
				font-size: 2em;
			}
			.subtitle {
				font-family: 'Aquire';
				font-weight: bold;
				font-size: 1em;
			}
		}
        nav {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            a {
                font-family: 'Aquire';
            }
        }
	}

    :global(div.container) {
        p, a {
            font-family: 'CMG Sans';
        }
    }
</style>
