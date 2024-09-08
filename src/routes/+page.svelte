<script>
	// @ts-nocheck

	import { page, navigating } from '$app/stores';
	import { writable, get } from 'svelte/store';
	import { findJobs } from '$lib';
	import { Confetti } from 'svelte-confetti';

	const legs = writable('How many legs do you have?');
	const arms = writable('How many arms do you have?');
	const eyes = writable('How many eyes do you have?');
	const skill = writable('Select your special skill');
	let my_modal_2;
	let loading = false;
	let job;
	let description;
	let complete = false;

	$: {
		const result = findJobs($arms, $legs, $eyes, $skill);
		job = result.job;
		description = result.description;
	}

	const showJobsModal = () => {
		loading = true;
		setTimeout(() => {
			loading = false;
			my_modal_2.showModal();
			complete = true;
		}, 1000);
	};

	const toggleComplete = () => {
		complete = !complete;
	};
</script>

<div class="mt-12 text-center">
	<h1 class="p-4 text-3xl">Find a Monstrous Job Today!</h1>

	<form>
		<select
			class="block w-full max-w-xs m-auto my-8 text-center select select-secondary"
			name="legs"
			autocomplete="off"
			on:change={(e) => {
				legs.set(e.target.value);
			}}
		>
			<option selected disabled>How many legs do you have?</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
			<option>6</option>
			<option>7</option>
			<option>8+</option>
		</select>

		<select
			class="block w-full max-w-xs m-auto text-center select select-secondary"
			name="arms"
			autocomplete="off"
			on:change={(e) => {
				arms.set(e.target.value);
			}}
		>
			<option selected disabled>How many arms do you have?</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
			<option>6</option>
			<option>7</option>
			<option>8+</option>
		</select>

		<select
			class="block w-full max-w-xs m-auto my-8 text-center select select-secondary"
			name="eyes"
			autocomplete="off"
			on:change={(e) => {
				eyes.set(e.target.value);
			}}
		>
			<option selected disabled>How many eyes do you have?</option>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
			<option>6</option>
			<option>7</option>
			<option>8+</option>
		</select>

		<select
			class="block w-full max-w-xs m-auto my-8 text-center select select-secondary"
			name="arms"
			autocomplete="off"
			on:change={(e) => {
				skill.set(e.target.value);
				const logSkill = get(skill);
				console.log(logSkill);
			}}
		>
			<option selected disabled>Select your special skill</option>
			<option>Poison</option>
			<option>Cuddly</option>
			<option>Super Strength</option>
			<option>Regeneration</option>
			<option>Flight</option>
			<option>Shapeshifting</option>
			<option>Teleportation</option>
			<option>Mind Control</option>
		</select>

		<button class="ml-48 btn btn-primary" on:click={showJobsModal}>
			{loading ? `...Finding Jobs` : 'Find My Calling'}
		</button>
	</form>

	<dialog id="my_modal_2" class="modal" bind:this={my_modal_2}>
		<div class="modal-box">
			{#if complete}
				<div style="position: absolute, top: 0, left: 50%, z-index: 10000">
					<Confetti cone x={[0.25, 2.5]} y={[0.25, 0.75]} colorRange={[100, 200]} infinite />
					<Confetti
						cone
						x={[0.25, 2.5]}
						y={[0.25, 0.75]}
						delay={[500, 550]}
						colorRange={[200, 300]}
						infinite
					/>
					<Confetti
						cone
						x={[1, 2.5]}
						y={[0.25, 0.75]}
						delay={[250, 300]}
						colorRange={[100, 200]}
						infinite
					/>
					<Confetti
						cone
						x={[1, 2.5]}
						y={[0.25, 0.75]}
						amount="20"
						delay={[0, 550]}
						colorRange={[200, 300]}
						infinite
					/>
				</div>
			{/if}
			<h3 class="text-lg font-bold">Your dream job is a {job}</h3>
			<p class="py-4">{description}</p>
		</div>
		<form method="dialog" class="modal-backdrop">
			<button on:click={toggleComplete}>close</button>
		</form>
	</dialog>
</div>
