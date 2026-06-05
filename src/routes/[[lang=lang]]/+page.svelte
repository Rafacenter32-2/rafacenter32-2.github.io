<script lang="ts">
    import { page} from "$app/state"
    import reddit from "$lib/assets/reddit.svg";
    import youtube from "$lib/assets/youtube.png";
    import github from "$lib/assets/github.svg";
    let lingua = $derived((page.params.lang as "pt" | "eng") || 'pt')
    let textos = {
        pt:[
            "Um bobinho que ainda sabe muito mais de tecnologia que deveria",
            "Bem vindo ao meu grão de areia da internet :D",
            "(serio, tem 1,2 bilhões de websites, isso seria um website a cada 8 pessoas do planeta)"
        ],
        eng:[
            "a silly person that still knows too much about tech than i should",
            "Welcome to my sand grain on the internet",
            "(seriously, there is 1.2 billion websites, this would be 1 website for every 8 people on the planet"
        ]
    }
    const links = [
        {plat:"github",url:"https://github.com/Rafacenter32-2",icon:github},
        {plat:"reddit",url:"https://www.reddit.com/user/No-Educator293/",icon:reddit},
        {plat:"youtube",url:"https://www.youtube.com/@RafacenterXP",icon:youtube}
    ]
</script>
<style>

</style>
<div id="enable_background_2"></div>
<main class="flex flex-col items-center">
    <section class="box">
        <h1>
            <img src="/Untitled.png" alt="" class="w-18 inline bg-white rounded-full p-[0.13rem]">
            Rafacenter
        </h1>
        <p class="text-sm">{textos[lingua][0]}</p>
    </section>
    <section class="box">
        <h2 class="text-center">
            {textos[lingua][1]}
        </h2>
        <h3>
            {textos[lingua][2]}
        </h3>
    </section>
    <section class="box">
        <h2 class="text-center">Links:</h2>
        <ul class="flex gap-2">
            {#each links as {icon, plat,url}(url)}
            <li>
                <a href={url} rel="external"><img src={icon} alt={plat} class="h-10 bg-black p-1 rounded-full"></a>
            </li>
            {/each}
        </ul>
    </section>
</main>