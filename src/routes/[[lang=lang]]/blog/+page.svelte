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
<main>
    <section class="box">
        <h1>meu Blog ^-^</h1>
    </section>
    {#each data.posts as posts(posts.slug)}
        <section class="box">
        <!-- TODO: fazer isso um link -->
            {posts.title}
        </section>
    {/each}
</main>