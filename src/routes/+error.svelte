<script lang="ts">
    import { page } from "$app/state";
    const images: Record<string, {default: string}> = import.meta.glob('$lib/assets/error bloopers/*.png', {eager: true})
    const errorimgs: Record<string, string> = {}
    for (const path in images) {

        const errorCode: string = path.split('/').pop()?.replace('.png','') || ""
        errorimgs[errorCode] = images[path].default
    }
    const errorimg = errorimgs[String(page.status)]
</script>
<style>
    #thing{
        font-size: 200px;
        position: absolute;
        top: 50%;
        left: 50%;
        font-weight: bolder;
        transform: translateX(-50%) translateY(-60%);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
<div id="enable_background_2"></div>
<div id="thing">
    <img src={errorimg} alt="" style="width: 320px; height: auto;">
    <span style="margin: -60px;">{page.status}</span>
</div>