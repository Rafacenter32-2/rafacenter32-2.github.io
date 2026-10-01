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

	const siteName = "Rafacenter";
    const domain = "https://rafacenter32-2.github.io"; // Change to your actual domain
    let currentUrl = $derived(`${domain}${page.url.pathname}`);
    let description = $derived(
        lingua === "eng" 
            ? "Official website, portfolio, and blog of Rafacenter." 
            : "Website oficial, portfólio e blog do Rafacenter."
	);
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
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Rafacenter" />
	<!-- Canonical & Multilingual Alternate Links -->
    <link rel="canonical" href={currentUrl} />
    <link rel="alternate" hreflang="pt" href={`${domain}${page.url.pathname.replace("/eng", "")}`} />
    <link rel="alternate" hreflang="en" href={`${domain}/eng${page.url.pathname.replace("/eng", "")}`} />
    <link rel="alternate" hreflang="x-default" href={`${domain}${page.url.pathname.replace("/eng", "")}`} />

    <!-- Open Graph (For Social Media & Search Cards) -->
    <meta property="og:site_name" content={siteName} />
    <meta property="og:title" content="Rafacenter | Official Website" />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={currentUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={`${domain}/puffy.png`} />
    <meta property="og:locale" content={lingua === "eng" ? "en_US" : "pt_BR"} />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Rafacenter | Official Website" />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${domain}/puffy.png`} />

</svelte:head>
{@render children()}
