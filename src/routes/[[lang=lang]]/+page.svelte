<script lang="ts">
    import { page} from "$app/state"

    let lingua = $derived((page.params.lang as "pt" | "eng") || 'pt')
    let textos = {
        pt:[
            "bobinho"
        ],
        eng:[
            "silly"
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
    }
</style>
<main class="flex flex-col items-center gap-1.5">
    <section class="box">
        <h1>
            <img src="/Untitled.png" alt="" class="w-18 inline bg-white rounded-full p-[0.13rem]">
            Rafacenter
        </h1>
        <p>{textos[lingua][0]}</p>
    </section>
</main>