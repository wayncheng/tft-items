const items = {
	// Base Items --------------------------------------
	belt            : {
		id     : 'giantsbelt',
		name   : "Giant's Belt",
		perk   : '+200 Base Health',
		combos : {
			glove   : 'trapclaw',
			sword   : 'zekesherald',
			rod     : 'morellonomicon',
			bow     : 'titanichydra',
			tear    : 'redemption',
			vest    : 'redbuff',
			cloak   : 'zephyr',
			belt    : 'warmogsarmor',
			spatula : 'frozenmallet',
		},
	},
	bow             : {
		id     : 'recurvebow',
		name   : 'Recurve Bow',
		perk   : '+20% Attack Speed',
		combos : {
			glove   : 'repeatingcrossbow',
			sword   : 'giantslayer',
			rod     : 'guinsoosrageblade',
			bow     : 'rapidfirecannon',
			tear    : 'statikkshiv',
			vest    : 'phantomdancer',
			cloak   : 'runaanshurricane',
			spatula : 'bladeoftheruinedking',
			// belt    : 'titanichydra',
		},
	},
	cloak           : {
		id     : 'negatroncloak',
		name   : 'Negatron Cloak',
		perk   : '+20 Magic Resist',
		combos : {
			glove   : 'quicksilver',
			sword   : 'bloodthirster',
			rod     : 'ionicspark',
			tear    : 'hush',
			vest    : 'swordbreaker',
			cloak   : 'dragonsclaw',
			spatula : 'talismanoflight',
			// bow     : 'runaanshurricane',
			// belt    : 'zephyr',
		},
	},
	glove           : {
		id     : 'sparringgloves',
		name   : 'Sparring Gloves',
		perk   : '+10& Dodge Chance, +10% Crit Chance',
		combos : {
			glove   : 'thiefsgloves',
			sword   : 'infinityedge',
			rod     : 'jeweledgauntlet',
			tear    : 'handofjustice',
			vest    : 'iceborngauntlet',
			spatula : 'berserkeraxe',
			// bow     : 'repeatingcrossbow',
			// cloak   : 'quicksilver',
			// belt    : 'trapclaw',
		},
	},
	rod             : {
		id     : 'needlesslylargerod',
		name   : 'Needlessly Large Rod',
		perk   : '+20% Spell Damage',
		// perk   : '+20% Spell Power',
		combos : {
			sword   : 'hextechgunblade',
			rod     : 'rabadonsdeathcap',
			tear    : 'ludensecho',
			vest    : 'locketoftheironsolari',
			spatula : 'infernocinder',
			// glove   : '',
			// bow     : '',
			// cloak   : '',
			// belt    : '',
		},
	},
	spatula         : {
		id     : 'spatula',
		name   : 'Spatula',
		perk   : 'It must do something...',
		// perk   : 'Something',
		combos : {
			sword   : 'youmuusghostblade',
			tear    : 'magescap',
			vest    : 'wardensmail',
			spatula : 'forceofnature',
			// glove   : '',
			// rod     : '',
			// bow     : '',
			// cloak   : '',
			// belt    : '',
		},
	},
	sword           : {
		id     : 'bfsword',
		name   : 'B.F. Sword',
		perk   : '+15 Attack Damage',
		combos : {
			sword : 'deathblade',
			tear  : 'spearofshojin',
			vest  : 'guardianangel',
			// glove   : 'infinityedge',
			// rod     : 'hextechgunblade',
			// bow     : 'giantslayer',
			// cloak   : 'bloodthirster',
			// belt    : 'zekesherald',
			// spatula : 'youmuusghostblade',
		},
	},
	tear            : {
		id     : 'tearofthegoddess',
		name   : 'Tear of the Goddess',
		perk   : '+20 Starting Mana',
		combos : {
			tear : 'seraphsembrace',
			vest : 'frozenheart',
			// glove   : '',
			// sword   : '',
			// rod     : '',
			// bow     : '',
			// cloak   : '',
			// belt    : '',
			// spatula : '',
		},
	},
	vest            : {
		id     : 'chainvest',
		name   : 'Chain Vest',
		perk   : '+25 Armor',
		combos : {
			vest : 'thornmail',
			// sword   : 'guardianangel',
			// glove   : 'iceborngauntlet',
			// rod     : 'locketoftheironsolari',
			// bow     : 'phantomdancer',
			// tear    : 'frozenheart',
			// cloak   : 'swordbreaker',
			// belt    : 'redbuff',
			// spatula : 'wardensmail',
		},
	},

	// Combos -----------------------------------------
	belt_belt       : {
		id        : 'warmogsarmor',
		name      : `Warmog's Armor`,
		perk      : 'Regen 6% missing HP/sec',
		// perk_full : 'Wearer regenerates 6% of missing HP per second',
		perk_full : `Wearer regenerates 6% of their missing Health per second.`,
	},
	belt_bow        : {
		id        : 'titanichydra',
		name      : `Titanic Hydra`,
		perk      : 'Atk deals 3% max HP to target & adjacent enemies behind',
		// perk_full : 'Attack deals 3% max HP to target and adjacent enemies behind them',
		perk_full : `Basic Attacks deal an additional 3% of the wearer's Maximum Health as magic damage to the target and adjacent enemies behind them.`,
	},
	belt_cloak      : {
		id        : 'zephyr',
		name      : 'Zephyr',
		perk      : 'Banish an enemy for 6s on combat start',
		// perk_full : 'On start of combat, banish an enemy for 6 seconds',
		perk_full : `When combat begins, the wearer summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for 6 seconds.`,
	},
	belt_glove      : {
		id        : 'trapclaw',
		name      : `Trap Claw`,
		perk      : 'Start w/ spell shield, stuns breaker for 4s',
		// perk_full : 'Wearer starts combat with spell shield, stuns enemy who breaks it for 4 seconds',
		perk_full : `At the beginning of combat, the wearer gains a shield that blocks the first enemy spell that hits them. The enemy that breaks the shield is stunned for 4 seconds.`,
	},
	belt_rod        : {
		id        : 'morellonomicon',
		name      : `Morellonomicon`,
		perk      : 'Spells burn for 18% of max HP over 10s, 80% heal reduction during burn',
		// perk_full : "Spells deal burn damage equal to 18% of enemy's max HP over 10 seconds and prevents healing",
		perk_full: `When the wearer deals damage with their spell, they burn the target, dealing 18% of the target's Maximum Health as true damage over 10 seconds and reducing healing by 80% for the duration of the burn. A champion can only have one burn effect at a time, preferring the strongest.`
	},
	belt_spatula    : {
		id        : 'frozenmallet',
		name      : `Frozen Mallet`,
		perk      : 'Also Glacial',
		// perk_full : 'Wearer is also glacial',
		perk_full : `Wearer is also a Glacial.`,
	},
	// TODO: figure out if 20% or 15% 
	belt_sword      : {
		id        : 'zekesherald',
		name      : `Zeke's Herald`,
		perk      : 'At start, +20% Atk Speed for allies 2 spaces L&R',
		// perk_full : 'At start, allies 2 spaces to left and right gain +20% attack speed',
		perk_full : `When combat begins, the wearer and all allies within 2 hexes in the same row gain +20% Attack Speed for the rest of combat.`,
	},
	belt_tear       : {
		id        : 'redemption',
		name      : `Redemption`,
		perk      : 'At 30% HP, heal nearby allies for 1200 HP after 2.5s. Triggers once.',
		// perk_full : 'At 30% health, heal all nearby allies for 1200 HP',
		perk_full : `When the wearer falls below 30% Health, nearby allies are healed for 1200 Health after a 2.5 second delay. This effect can trigger once per combat.`,
	},
	belt_vest       : {
		id        : 'redbuff',
		name      : `Red Buff`,
		perk      : 'Atks burn for 18% max HP over 10s & disable healing',
		// perk_full : 'Attacks burn for 18% of max HP over 10 seconds and disable healing',
		perk_full : `Wearer's Basic Attacks burn the target on-hit, dealing 18% of the target's Maximum Health as true damage over 10 seconds and reducing healing by 80% for the duration of the burn. A champion can only have one burn effect at a time, preferring the strongest.`,
	},
	bow_bow         : {
		id        : 'rapidfirecannon',
		name      : `Rapid Fire Cannon`,
		perk      : `Doubles atk range. Atks can't be dodged`,
		perk_full : `Wearer gains +100% Attack Range.`,
		// perk_full : `Attack range is doubled. Wearer's attack cannot be dodged`,
	},
	bow_cloak       : {
		id        : 'runaanshurricane',
		name      : `Runaan's Hurricane`,
		perk      : 'Atks extra enemy & deals 60% dmg (on hit effects)',
		perk_full : `Basic Attacks fire an additional missile at another nearby enemy, dealing 60% of the wearer's Attack damage and applying on-hit effects.`,
		// perk_full : 'Attacks one additional enemy and deals 60% damage (applies on hit effects)',
	},
	bow_glove       : {
		id        : 'lastwhisper',
		name      : `Last Whisper`,
		perk      : 'Crit hits reduce armor by 90% for 3s (no stack)',
		perk_full : `Critical hits reduce the target’s Armor by 90% for 3 seconds. This effect does not stack.`,
		// perk_full : 'Critical hits reduce the target’s Armor by 90% for 3 seconds. This effect does not stack.',
	},
	bow_rod         : {
		id        : 'guinsoosrageblade',
		name      : `Guinsoo's Rageblade`,
		perk      : 'Atks give +5% atk speed (stacks infinitely)',
		perk_full : `Basic Attacks grant the wearer +4% bonus Attack Speed for the rest of combat. This effect can stack any number of times.`,
		// perk      : '+5% atk speed on attacks (stacks infinitely)',
		// perk_full : 'Attacks give 5% attack speed. stacks infinitely',
	},
	bow_spatula     : {
		id        : 'bladeoftheruinedking',
		name      : `Blade of the Ruined King`,
		perk      : 'Also Blademaster',
		perk_full : `Wearer is also a Blademaster.`,
		// perk_full : 'Wearer is also a blademaster',
	},
	bow_sword       : {
		id        : 'giantslayer',
		name      : `Giant Slayer`,
		perk      : "Atks deal +9% enemy's current HP as physical dmg",
		perk_full : `The wearer's basic attacks deal an additional 9% of the target's Maximum Health as true damage.`,
		// perk_full : "Attacks deal additional 9% of enemy's current HP as physical damage",
	},
	// TODO: 80 or 100?
	bow_tear        : {
		id        : 'statikkshiv',
		name      : `Statikk Shiv`,
		perk      : 'Deal 80 magic dmg to 3/4/5 enemies every 3rd atk',
		perk_full : `Every third Basic Attack from the wearer deals 100 magical damage to 3/4/5 enemies (scales with wearer’s Star Level).`,
		// perk_full : 'Deals 80 magic damage to 3/4/5 enemies (scales with wearer’s Star Level)',
	},
	bow_vest        : {
		id        : 'titansresolve',
		name      : `Titan's Resolve`,
		perk      : 'When hit or crits, gain 2% dmg (100% max). At 50 stacks, +25 armor & MR (resets each round)',
		perk_full : `When the wearer is hit or inflicts a critical strike, they gain a 2% stacking damage bonus, up to 100%. At 50 stacks, the wearer gains 25 Armor and MR; and increases in size. Resets every round.`,
		// perk_full : 'When the wearer is hit or inflicts a critical strike, they gain a 2% stacking damage bonus, up to 100%. At 50 stacks, the wearer gains 25 Armor and MR; and increases in size. Resets every round.',
	},

	cloak_cloak     : {
		id        : 'dragonsclaw',
		name      : `Dragon's Claw`,
		perk      : '50% magic dmg resistance',
		perk_full : `Wearer gains 50% resistance to magic damage.`,
		// perk_full : '50% resistance to magic damage',
	},
	cloak_glove     : {
		id        : 'quicksilver',
		name      : `Quicksilver`,
		perk      : 'Immune to crowd control [UNIQUE]',
		perk_full : `[UNIQUE] The wearer is immune to crowd control.`,
		// perk_full : '[UNIQUE] The wearer is immune to crowd control',
	},
	cloak_rod       : {
		id        : 'ionicspark',
		name      : `Ionic Spark`,
		perk      : 'Zap enemies that cast spell w/in 3 hex for 200% max mana as magic dmg',
		perk_full : `Enemies within 3 hexes that cast a spell are zapped, taking magic damage equal to 200% of their max Mana.`,
		// perk_full : 'Enemies within 3 hexes that cast a spell are zapped, taking magic damage equal to 200% of their max Mana',
	},
	cloak_spatula   : {
		id        : 'talismanoflight',
		name      : `Talisman of Light`,
		perk      : 'Also Light',
		perk_full : `Wearer is also a Light.`,
		// perk_full : 'Wearer is also light',
	},
	cloak_sword     : {
		id        : 'bloodthirster',
		name      : `Bloodthirster`,
		perk      : 'Atks heal for 50% of dmg',
		perk_full : `Basic Attacks heal the wearer for 40% of the damage dealt.`,
		// perk_full : 'Attacks heal for 50% of damage',
	},
	cloak_tear      : {
		id        : 'hush',
		name      : `Hush`,
		perk      : 'Atks have 20% chance to mana lock for 4s',
		perk_full : `Basic Attacks have a 20% chance to silence the target on-hit, prevent the enemy from gaining mana for 4 seconds.`,
		// perk_full : 'Attacks have 20% chance to mana lock for 4 seconds',
	},
	cloak_vest      : {
		id        : 'swordbreaker',
		name      : `Swordbreaker`,
		perk      : 'Atks have 25% chance to disarm for 3s',
		perk_full : `Wearer's Basic Attacks have a 25% chance to disarm the target for 3 seconds, preventing that enemy from Basic Attacking.`,
		// perk_full : 'Attacks have 25% chance to disarm for 3 seconds',
	},

	glove_glove     : {
		id        : 'thiefsgloves',
		name      : `Thief's Gloves`,
		perk      : 'Start w/ 2 temp items (takes all slots)',
		perk_full : `At the beginning of each planning phase, the wearer equips 2 temporary items. Temporary items increase in power based on your player level.`,
		// perk      : 'At start, gain 2 temp items (takes all slots)',
		// perk_full : 'Takes all item slots. on round start, gain 2 temporary items',
	},
	glove_rod       : {
		id        : 'jeweledgauntlet',
		name      : `Jeweled Gauntlet`,
		perk      : 'Abilities can crit strike',
		perk_full : `The wearer's spells can critically strike.`,
		// perk_full : 'Your abilities can critically strike',
	},
	glove_spatula   : {
		id        : 'berserkeraxe',
		name      : `Berserker Axe`,
		perk      : 'Also Berserker',
		perk_full : `Wearer is also a Berserker.`,
		// perk_full : 'Wearer is also berserker',
	},
	glove_sword     : {
		id        : 'infinityedge',
		name      : `Infinity Edge`,
		perk      : 'Crit strikes deal +125% dmg',
		perk_full : `The wearer gains +125% Critical Strike Damage.`,
		// perk_full : 'Critical strikes deal +125% damage',
	},
	glove_tear      : {
		id        : 'handofjustice',
		name      : `Hand of Justice`,
		perk      : 'Start w/ +50% dmg or +50 life on hit for round',
		perk_full : `At the beginning of each planning phase, the wearer gains one of the following: Basic Attacks and Spells deal +50% Damage or Basic Attacks heal 50 Health on-hit.`,
		// perk      : 'On start, +50% dmg or +50 life on hit until round end',
		// perk_full : 'On round start, gain +50% damage or +50 life on hit until end of round',
	},
	glove_vest      : {
		id        : 'iceborngauntlet',
		name      : `Iceborn Gauntlet`,
		perk      : `On spell cast, next basic atk freezes target for 2.5s`,
		perk_full : `After casting a spell, the wearer’s next basic attack freezes the target for 1.5 seconds.`,
		// perk_full : `After casting a spell, the wearer's next basic attack freezes the target for 2.5 seconds.`,
	},

	rod_rod         : {
		id        : 'rabadonsdeathcap',
		name      : `Rabadon's Death Cap`,
		perk      : '+75% ability dmg',
		perk_full : `Wearer gains +50% Spell Power Amplification. (All sources of Spell Power are 50% more effective)`,
		// perk_full : "Wearer's ability damage increased by 75%",
	},
	rod_spatula     : {
		id        : 'infernocinder',
		name      : `Inferno Cinder`,
		perk      : 'Also Inferno',
		perk_full : `Wearer is also Inferno.`,
		// perk_full : 'Wearer is also Inferno',
	},
	rod_sword       : {
		id        : 'hextechgunblade',
		name      : `Hextech Gunblade`,
		perk      : 'Heal for 33% of dmg dealt',
		perk_full : `Basic Attacks and spells heal the wearer for 25% of the damage dealt.`,
		// perk_full : 'Basic Attacks and spells heal the wearer for 25% of the damage dealt.',
		// perk_full : 'Heal for 33% of all damage dealt',
	},
	rod_tear        : {
		id        : 'ludensecho',
		name      : `Luden's Echo`,
		perk      : 'Deals 125/175/250 magic dmg',
		perk_full : `When the wearer deals damage with their spell, the first target hit and up to 3 nearby enemies are dealt an additional 120/160/200 magic damage (scales with wearer’s Star Level).`,
		// perk_full : 'Deals 125/175/250 magic damage (scales with wearer’s Star Level)',
	},
	rod_vest        : {
		id        : 'locketoftheironsolari',
		name      : `Locket of the Iron Solari`,
		perk      : 'Shields allies 2 L&R in row for 250/275/350 dmg for 8s',
		perk_full : `Shields allies within two hexes in the same row for 250/275/300 damage for 8 seconds (scales with wearer’s Star Level)`,
		// perk_full : 'Shields allies within two hexes in the same row for 250/275/350 damage for 8 seconds (scales with wearer’s Star Level)',
	},
	spatula_spatula : {
		id        : 'forceofnature',
		name      : `Force of Nature`,
		perk      : '+1 team size',
		perk_full : `Wearer's team gains +1 maximum team size.`,
		// perk_full : 'Gain + team size',
	},
	spatula_sword   : {
		id        : 'youmuusghostblade',
		name      : `Youmuu's Ghostblade`,
		perk      : 'Also Assassin',
		perk_full : `Wearer is also an Assassin.`,
		// perk_full : 'Wearer is also assassin',
	},
	spatula_tear    : {
		id        : 'magescap',
		name      : `Mage's Cap`,
		perk      : 'Also Mage',
		perk_full : `Wearer is also a Mage.`,
		// perk_full : 'Wearer is also a mage',
	},
	spatula_vest    : {
		id        : 'wardensmail',
		name      : `Warden's Mail`,
		perk      : 'Also Warden',
		perk_full : `Wearer is also a Warden.`,
		// perk_full : 'Wearer is also a warden',
	},
	sword_sword     : {
		id        : 'deathblade',
		name      : `Deathblade`,
		perk      : 'On kill/assist, +15 atk (stacks infinitely)',
		perk_full : `Whenever the wearer kills or participates in killing an enemy, gain +15 Attack Damage for the remainder of combat. This effect can stack any number of times.`,
		// perk_full : 'Whenever the wearer kills or participates in killing an enemy, gain +15 Attack Damage for the remainder of combat. This effect can stack any number of times.',
		// perk_full : 'On kill or assist, gain +15 attack, stacks infinitely',
	},
	sword_tear      : {
		id        : 'spearofshojin',
		name      : `Spear of Shojin`,
		perk      : 'After cast, +18% max mana per atk',
		perk_full : `After casting their spell, the wearer's Basic Attacks restore 18% of their Maximum Mana.`,
		// perk_full : 'After casting, gain 18% of max mana per attack',
	},
	// TODO: 400HP or up to 500?
	sword_vest      : {
		id        : 'guardianangel',
		name      : `Guardian Angel`,
		perk      : 'Revives w/ 400HP after 2s',
		perk_full : `When the wearer dies, they cleanse negative effects and revive with up to 500 Health after a 2 second delay. This effect can trigger once per combat.`,
		// perk_full : 'Revives champ with 400 HP after 2 seconds',
	},
	tear_tear       : {
		id        : 'seraphsembrace',
		name      : `Seraph's Embrace`,
		perk      : '+20 mana each time a spell is cast',
		perk_full : `After casting their spell, the wearer restores 20 Mana.`,
		// perk_full : 'Regain 20 mana each time a spell is cast',
	},
	tear_vest       : {
		id        : 'frozenheart',
		name      : `Frozen Heart`,
		perk      : `Nearby enemy atk speed slowed 40%. (Stack increases effect radius)`,
		perk_full : `Nearby enemies' attack speed is slowed by 40%. (Stacking increases the radius of this effect, not the amount of the slow)`,
		// perk_full : `Nearby enemies' attack speed is slowed by 40%. (Stacking increases the radius of this effect, not the amount of the slow)`,
	},
	vest_vest       : {
		id        : 'bramblevest',
		name      : `Bramble Vest`,
		perk      : 'Negates bonus dmg from crit. When hit by basic atk, deal 100/140/200 magic dmg to nearby enemies (Max every 1s)',
		perk_full : `Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal 80/120/160 magic damage to all nearby enemies (once every 1 second maximum). Scales with wearer’s Star Level.`,
		// perk_full : 'Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal 100/140/200 magic damage to all nearby enemies (once every 1 second maximum). Scales with wearer’s Star Level.',
	},
};

module.exports = items;

// const arr = [];
// for (let key in items) {
// 	const item = items[key];
// 	const {perk} = item;
// 	const a = `${perk.length}\t${perk}`;
// 	arr.push(a);
// }
// arr.sort();
// arr.forEach(x => console.log(x));
