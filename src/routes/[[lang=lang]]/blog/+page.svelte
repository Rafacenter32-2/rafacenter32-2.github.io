<script lang="ts">
    let {data} = $props()
	import { resolve } from "$app/paths";
    import { page} from "$app/state"
    let pathname = $derived(page.url.pathname)
    //let lingua = $derived((page.params.lang as "pt" | "eng") || 'pt')
    //let textos = {
    //    pt:[
    //        "Projetos",
    //    ],
    //    eng:[
    //        "Projects",
    //    ]
    //}
</script>
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
<main class="flex flex-col items-center">
    <section class="box">
        <h1>meu Blog ^-^</h1>
    </section>
    <section class="box">
    {#each data.posts as posts, i (posts.slug)}
        <!-- TODO: fazer isso um link -->
        <a href={resolve(`${pathname}/${posts.slug!}`)} class="text-cyan-400 underline font-semibold">{posts.title}</a>
        {#if i !== data.posts.length - 1}

        <div class="w-full h-0.5 bg-lime-600 mt-1 rounded-full"></div>
        {/if}
    {/each}
    </section>
</main>