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
<main class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <section class="box">
        <h1>meu Blog ^-^</h1>
    </section>
    {#each data.posts as posts (posts.slug)}
    <section class="box">  
        <a href={resolve(`${pathname}/${posts.slug!}`)}>
            <div class="flex flex-col">
                <img src={posts.img} alt="" class="rounded-2xl">
                <div>
                    <h1 class=" font-semibold">
                        {posts.title}
                    </h1>
                    <p class="text-xs">
                        {posts.preview}
                    </p>
                </div>
            </div>
        </a>
    </section>

    {/each}
</main>