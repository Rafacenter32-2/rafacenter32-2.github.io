<script lang="ts">
    let {data} = $props()
    /*
	import { resolve } from "$app/paths";
    import { page} from "$app/state"
    let lingua = $derived((page.params.lang as "pt" | "eng") || 'pt')
    let textos = {
        pt:[
            "Projetos",
        ],
        eng:[
            "Projects",
        ]
    }
    */
   let Content = $derived(data.content)
</script>
<style>
    
</style>
<div id="enable_background_2"></div>
<div class="flex flex-col items-center">
    <article class="box w-full! max-w-3/4!">
        <div class="bg-white text-black text-shadow-none rounded-xl p-1.5">
            <Content />
        </div>
    </article>
</div>
