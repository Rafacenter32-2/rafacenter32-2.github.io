<script lang="ts">
	import './layout.css';
	import { resolve } from '$app/paths';
	import { page} from "$app/state"
	import menu from "$lib/assets/menu.svg";
    let lingua = $derived((page.params.lang as "pt" | "eng") || 'pt')
	let lingua_link = $derived(lingua === "pt" ? "" : "eng")
	const TL = (pt:string,eng:string)=>{if (lingua === "eng") {return eng}else if(lingua === "pt"){return pt}}
	let start_open:boolean = $state(false)

	let { children } = $props();
	function get_page_name(url:string) {
		let name = url.split("/").at(-1)
		if (name == "" || typeof name == "undefined") {
			name = "inicio"
		}else if (name == "eng") {
			name= "start"
		}

		name = decodeURIComponent(name)
		
		return name
	}
</script>
<header id="nav_bar">
	<nav>
		<button class="inline-block" onclick={()=>{start_open = !start_open}}>
			<span class="bg-white rounded-lg cursor-pointer active:bg-gray-400 {start_open ? 'invert':''}">
				<img src={menu} alt="" class="w-6 h-6 inline -mt-0.75">
			</span>
		</button>
		<span class="text-white text-shadow-[0_0_7px_rgb(0,0,0),0_0_9px_rgb(255,255,255),0_0_5px_rgb(255,255,255)] select-none font-black">{get_page_name(page.url.pathname)}</span>
		<a href={resolve('/')}>{TL("inicio","start")}</a>
		<a href={resolve('/'+lingua_link+'/projetos')}>{TL("projetos","projects")}</a>
		<a href={resolve('/'+lingua_link+'/blog')}>blog</a>
		
	</nav>
</header>
<svelte:body></svelte:body>
<svelte:head>
	<link rel="icon" href="/puffy.png"/>
	<title>Rafacenter Web</title>
</svelte:head>
{@render children()}
