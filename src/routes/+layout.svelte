<script>
	import { page, navigating } from '$app/stores';

	import '../app.css';
</script>

<div class="navbar bg-primary text-primary-content">
	<a class="m-2 text-2xl btn btn-ghost" href="/" aria-current={$page.url.pathname === '/'}
		>👾 Job-ZILLA</a
	>
</div>

<slot></slot>

<footer class="fixed bottom-0 p-4 footer footer-center bg-primary text-base-content">
	<aside>
		<p>Copyright © {new Date().getFullYear()} - All right reserved by Matt Kitchens</p>
	</aside>
</footer>

<style>
</style>
