<script lang="ts">
    let {value, size} = $props()
</script>
<style lang="postcss">
    .progress_bar_back{
        height: 1.125rem;
        display: inline-block;
        vertical-align: middle;
        background-color: whitesmoke;
        width: 12rem;
        background-image: linear-gradient(0deg,rgba(0, 0, 0, 0.5) 0%, rgba(166, 166, 166, 0) 33%, rgba(166, 166, 166, 0) 66%, rgba(0, 0, 0, 0.5) 100%);
    }
    .progress_bar{
        height: 100%;
        background-color: limegreen;
        background-image: linear-gradient(0deg,rgba(0, 0, 0, 0.5) 0%, rgba(166, 166, 166, 0) 33%, rgba(166, 166, 166, 0) 66%, rgba(0, 0, 0, 0.5) 100%);
    }
</style>
<div class="progress_bar_back" style="width: {size};">
    <div class="progress_bar" style="width: {value}%;"></div>
</div>