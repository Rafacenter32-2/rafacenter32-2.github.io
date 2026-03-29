<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<header id="nav_bar">
	<nav>
		<a href={resolve('/')}>batata</a>
		<a href="https://www.banana.tdah">banana</a>
		<a href="https://example.com/">não sei</a>
	</nav>
</header>
<svelte:body></svelte:body>
<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
