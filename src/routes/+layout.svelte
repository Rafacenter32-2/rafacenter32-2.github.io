<script lang="ts">
	import './layout.css';
	import { resolve } from '$app/paths';
	import { page} from "$app/state"
    let lingua = $derived((page.params.lang as "pt" | "eng") || 'pt')
	let lingua_link = $derived(lingua === "pt" ? "" : "eng")
	const TL = (pt:string,eng:string)=>{if (lingua === "eng") {return eng}else if(lingua === "pt"){return pt}}

	let { children } = $props();
	function get_page_name(url:string) {
		let name = url.split("/").at(-1)
		if (name == "" || typeof name == "undefined" || name == "pt") {
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
		<span class="text-white text-shadow-[0_0_7px_rgb(0,0,0),0_0_9px_rgb(255,255,255),0_0_5px_rgb(255,255,255)] select-none font-black">{get_page_name(page.url.pathname)}</span>
		<a href={resolve('/'+lingua_link)}>{TL("inicio","start")}</a>
		<a href={resolve('/'+lingua_link+'/projetos')}>{TL("projetos","projects")}</a>
		<a href={resolve('/'+lingua_link+'/blog')}>blog</a>
		<a href="https://example.com/">{TL("não sei","idk")}</a>
	</nav>
</header>
<svelte:body></svelte:body>
<svelte:head>
	<link rel="icon" href="/puffy.png"/>
	<title>Rafacenter Web</title>
</svelte:head>
{@render children()}
