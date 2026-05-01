<script lang="ts">
	import './layout.css';
	import { resolve } from '$app/paths';
	import { page} from "$app/state"
    let lingua = $derived((page.params.lang as "pt" | "eng") || 'pt')
	let lingua_link = $derived(lingua === "pt" ? "" : "eng")

	let { children } = $props();
</script>

<header id="nav_bar">
	<nav>
		<a href={resolve('/')}>inicio</a>
		<a href={resolve('/'+lingua_link+'/projetos')}>projetos</a>
		<a href="https://example.com/">não sei</a>
	</nav>
</header>
<svelte:body></svelte:body>
<svelte:head>
	<link rel="icon" href="puffy.png"/>
	<title>Rafacenter Web</title>
</svelte:head>
{@render children()}
