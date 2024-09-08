<script>
	import { get, writable } from 'svelte/store';
	$: console.log('legs value:', get(legs));
</script>

<h1>jobs</h1>
<p>We found your dream job</p>

<style>
</style>
