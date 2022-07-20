<script>
    export let src;
</script>

<div class="card">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="{src}" style="height: 350px; width: auto;">
</div>

<style lang="scss">
    div.card {
        width: min-content;
        padding: 10px;
        margin: 5px;
        outline: 1px black solid;
        border-radius: 5px;
    }
</style>
