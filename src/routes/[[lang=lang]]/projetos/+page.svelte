<script lang="ts">
	// import { resolve } from "$app/paths";
    import { page} from "$app/state"
    import projects from "$lib/projects/projects.json"
    let lingua = $derived((page.params.lang as "pt" | "eng") || 'pt')
    let translated_project = $derived(projects.lingua[lingua])
    let textos = {
        pt:[
            "Projetos",
        ],
        eng:[
            "Projects",
        ]
    }
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
<main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
    <section class="box">
        <h1>{textos[lingua][0]}</h1>
    </section>
    {#each translated_project as qwas(qwas.id)}
    <a data-sveltekit-reload href={qwas.url} rel="external" class="block box max-w-full! duration-300! hover:scale-103! active:scale-95! hover:rotate-2 active:-rotate-1">
        <section>
            <img src={qwas.image} alt="" class="block mx-auto h-37.5">
            <h2 class="text-center">{qwas.title}</h2>
            <p>{qwas.desc}</p>
        </section>
    </a>    
    {/each}
</main>