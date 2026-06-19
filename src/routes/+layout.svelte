<script lang="ts">
	import './layout.css';
	import { resolve } from '$app/paths';
	import { page} from "$app/state"
    let lingua = $derived((page.params.lang as "pt" | "eng") || 'pt')
	let lingua_link = $derived(lingua === "pt" ? "" : "eng")
	let lingua_reverse = $derived(lingua === "eng" ? "pt" : "eng") 
	let lingua_reverse_link = $derived(lingua_reverse === "pt" ? "" : "eng")
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
	<nav class="flex">
		<span class="text-white text-shadow-[0_0_7px_rgb(0,0,0),0_0_9px_rgb(255,255,255),0_0_5px_rgb(255,255,255)] select-none font-black has_separator">{get_page_name(page.url.pathname)}</span>
		<a href={resolve('/'+lingua_link)} class="has_separator">{TL("inicio","start")}</a>
		<a href={resolve('/'+lingua_link+'/projetos')} class="has_separator">{TL("projetos","projects")}</a>
		<a href={resolve('/'+lingua_link+'/blog')} class="has_separator">blog</a>
		<a href="https://example.com/">{TL("não sei","idk")}</a>
		<a href={resolve('/'+lingua_reverse_link+page.url.pathname.replace("/eng",""))} class="ml-auto">{lingua.toUpperCase()} &gt; {lingua_reverse.toUpperCase()}</a>
	</nav>
</header>
<svelte:body></svelte:body>
<svelte:head>
	<link rel="icon" href="/puffy.png"/>
	<title>Rafacenter Web</title>
</svelte:head>
{@render children()}
