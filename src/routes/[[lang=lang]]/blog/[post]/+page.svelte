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
<!-- TODO: colocar css real aqui -->
<style>
    :global(body){
        background-color: black;
        color: whitesmoke;
        background-image: url("/Background.png");
        background-size: cover;
        background-position: center 30%;
        background-attachment: fixed;
        background-repeat: no-repeat;
        overflow-x: hidden;
    }
</style>
<div class="flex flex-col items-center">
    <article class="box min-w-115">
        <Content />
    </article>
</div>
