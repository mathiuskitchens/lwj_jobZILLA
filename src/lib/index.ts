// place files you want to import through the `$lib` alias in this folder.
export const findJobs = (arms: number, legs: number, eyes: number, skill: string) => {
	let job = '';
	let description = '';

	if (arms > 6 && legs > 6 && eyes > 6 && skill === 'Mind Control') {
		job = 'Galactic Overlord';
		description =
			'Lead interplanetary armies while sipping space lattes. Must love mind-controlling minions and occasionally monologuing about your plans to rule the universe.';
	} else if (arms > 6) {
		if (skill === 'Shapeshifting') {
			job = 'Contortionist Magician';
			description =
				'Bend, twist, and change into anything imaginable – including your audience’s worst nightmares! Bonus points if you can juggle while doing it.';
		} else if (skill === 'Super Strength') {
			job = 'Octo-Arm Wrestling Champion';
			description =
				'Dominate arm wrestling competitions with not one, not two, but EIGHT arms. Opponents may cry. You won’t. Collect trophies while flexing... all eight of them.';
		} else {
			job = 'Human Babysitter (Extra Hands Required)';
			description =
				'Handle twice as many kids with half the stress! With extra arms, you can juggle snack time, tantrums, and diaper changes – all while maintaining your sanity (maybe).';
		}
	} else if (legs > 6) {
		if (skill === 'Teleportation') {
			job = 'Professional Delivery Speedster';
			description =
				'Deliver packages faster than Amazon Prime – instant delivery, no shipping fees. Must have experience dodging traffic and teleporting into people’s living rooms without knocking.';
		} else if (skill === 'Flight') {
			job = 'Spider-Pilot';
			description =
				'Take to the skies as the world’s first spider with wings! Must be okay with people screaming every time you land.';
		} else {
			job = 'Centipede Walker';
			description =
				'Perfect for those who love long walks on the beach – with all the legs. Be prepared for awkward stares and questions like "How do you find shoes?"';
		}
	} else if (eyes > 6) {
		if (skill === 'Cuddly') {
			job = 'Overseer of Snuggle Control';
			description =
				'Ensure that all monsters are snuggling within regulation limits. Must maintain the perfect balance between cute and creepy. Excessive blinking is encouraged.';
		} else if (skill === 'Poison') {
			job = 'Venomous Visionary';
			description =
				'Create cutting-edge toxic concoctions while never missing a detail. Must have at least 7 eyes to ensure no safety violations. Antidotes are optional.';
		} else {
			job = 'Multi-Eyed Quality Control Supervisor';
			description =
				'Monitor production lines with unparalleled precision. With eyes literally everywhere, nothing escapes your gaze. Boring job, but at least you’ll see it from every angle.';
		}
	} else if (arms > 4) {
		if (skill === 'Regeneration') {
			job = 'Regenerating Construction Worker';
			description =
				'Never worry about workplace injuries again! Lose an arm? Grow it back! Perfect for demolition jobs, extreme sports, or anytime you need to “lend a hand.”';
		} else if (skill === 'Poison') {
			job = 'Toxic Cook (Dishes with a Kick)';
			description =
				'Serve dishes that really stick with your customers… mostly because they can’t move after eating them. Must have knowledge of food safety or a really good lawyer.';
		} else {
			job = 'Professional Hugger';
			description =
				'Spread joy (or terror) by offering hugs with all four-plus arms. Perfect for those who think two-armed hugs just aren’t enough. Disclaimer: Some restrictions apply for "too tight."';
		}
	} else if (legs > 4) {
		if (skill === 'Mind Control') {
			job = 'Overmind Marathon Runner';
			description =
				'Run marathons without breaking a sweat – or even moving your legs. Control the minds of fellow runners to do the hard work for you. Cheat? Maybe. Effective? Definitely.';
		} else if (skill === 'Teleportation') {
			job = 'Running Delivery Agent';
			description =
				'The world’s fastest (and laziest) delivery agent. Deliver packages instantly, but only if you feel like it. Great for people who hate running but still want the title.';
		} else {
			job = 'Super-Fast Dog Walker';
			description =
				'Walk 100 dogs at once with those extra legs! Just be sure they don’t tie you up in their leashes. Ideal for dog lovers with a high tolerance for chaos.';
		}
	} else if (eyes > 4) {
		if (skill === 'Flight') {
			job = 'All-Seeing Drone Pilot';
			description =
				'Fly drones with the precision of a hawk and the vision of an optometrist’s dream. Perfect for spying, delivering pizzas, or causing general airborne chaos.';
		} else if (skill === 'Shapeshifting') {
			job = 'Master of Disguises';
			description =
				'Blend into any environment. Turn into anything or anyone – especially when you want to avoid awkward conversations. Ideal for introverts with a flair for the dramatic.';
		} else {
			job = 'Night Security Guard (No Need for Flashlights)';
			description =
				'Guard the night shift with your unparalleled night vision. Ideal for nocturnal creatures or anyone who thinks humans with two eyes are wildly underqualified.';
		}
	} else if (skill === 'Poison') {
		if (arms > 2) {
			job = 'Poisonous Bartender (Deadly Cocktails)';
			description =
				'Shake up cocktails that pack a punch – and maybe a little venom. Customer satisfaction guaranteed... for at least 30 minutes, after which the antidote may be needed.';
		} else {
			job = 'Mercenary (Toxic Takedowns)';
			description =
				'Silent, deadly, and toxic – just like your job title. Perform high-risk tasks where your touch is lethal and your customer satisfaction is rated by how few people survive.';
		}
	} else if (skill === 'Cuddly') {
		job = 'Professional Snuggler';
		description =
			'Get paid to snuggle! Your softness knows no bounds, and your hugs are so cozy they could put someone into a blissful coma (in a good way).';
	} else if (skill === 'Super Strength') {
		job = 'Heavyweight Champion (Undefeated)';
		description =
			'Crush your opponents, lift entire cars, and become an unstoppable force in the ring. Be ready to smile for cameras – and maybe snap a few bones (but only in the ring).';
	} else if (skill === 'Regeneration') {
		job = 'Demolition Worker (No Harm, No Foul)';
		description =
			'Blow stuff up and walk away without a scratch. Got caught in the blast? No problem, just grow your limbs back and get back to work. Explosive fun for the whole crew!';
	} else if (skill === 'Flight') {
		job = 'Skydiving Instructor (Without a Parachute)';
		description =
			'Teach people to fall with style... while you casually fly beside them. Perfect for thrill seekers who prefer to mock gravity rather than obey it.';
	} else if (skill === 'Shapeshifting') {
		job = 'Master of Disguise';
		description =
			'Blend into any group, any environment. Perfect for avoiding awkward social events or sneaking into places where you definitely don’t belong.';
	} else if (skill === 'Teleportation') {
		job = 'Instant Delivery Specialist';
		description =
			'Become the fastest delivery expert in the world. Deliver pizzas, packages, or even yourself anywhere in seconds. Must love instant gratification (and tipping isn’t mandatory).';
	} else if (skill === 'Mind Control') {
		job = 'Politician (Mind Your Voters)';
		description =
			'Persuade voters without even talking. No speeches needed when you can bend minds to your will. Ideal for political campaigns and world domination on the side.';
	} else {
		job = '...hmmm...unemployed monster I guess?...';
		description =
			'It’s not you, it’s the economy. Monsters everywhere are finding it tough to get jobs these days. But hey, the crypt under the bridge is always hiring!';
	}

	return { job, description };
};
