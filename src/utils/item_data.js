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
		perk   : '+20% Spell Power',
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
		perk   : 'Something',
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
		perk   : '+20 Attack Damage',
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
		perk   : '+20% Starting Mana',
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
		perk   : '+20 Armor',
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
		perk_full : 'Wearer regenerates 6% of missing HP per second',
	},
	belt_bow        : {
		id        : 'titanichydra',
		name      : `Titanic Hydra`,
		perk      : 'Atk deals 3% max HP to target & adjacent enemies behind',
		perk_full : 'Attack deals 3% max HP to target and adjacent enemies behind them',
	},
	belt_cloak      : {
		id        : 'zephyr',
		name      : 'Zephyr',
		perk      : 'Banish an enemy for 6s on combat start',
		perk_full : 'On start of combat, banish an enemy for 6 seconds',
	},
	belt_glove      : {
		id        : 'trapclaw',
		name      : `Trap Claw`,
		perk      : 'Start w/ spell shield, stuns breaker for 4s',
		perk_full : 'Wearer starts combat with spell shield, stuns enemy who breaks it for 4 seconds',
	},
	belt_rod        : {
		id        : 'morellonomicon',
		name      : `Morellonomicon`,
		perk      : 'Spells burn for 18% of max HP over 10s, prevents healing',
		perk_full : "Spells deal burn damage equal to 18% of enemy's max HP over 10 seconds and prevents healing",
	},
	belt_spatula    : {
		id        : 'frozenmallet',
		name      : `Frozen Mallet`,
		perk      : 'Also Glacial',
		perk_full : 'Wearer is also glacial',
	},
	belt_sword      : {
		id        : 'zekesherald',
		name      : `Zeke's Herald`,
		perk      : 'At start, +20% Atk Speed for allies 2 spaces L&R',
		perk_full : 'At start, allies 2 spaces to left and right gain +20% attack speed',
	},
	belt_tear       : {
		id        : 'redemption',
		name      : `Redemption`,
		perk      : 'At 30% HP, heal nearby allies for 1200 HP',
		perk_full : 'At 30% health, heal all nearby allies for 1200 HP',
	},
	belt_vest       : {
		id        : 'redbuff',
		name      : `Red Buff`,
		perk      : 'Atks burn for 18% max HP over 10s & disable healing',
		perk_full : 'Attacks burn for 18% of max HP over 10 seconds and disable healing',
	},
	bow_bow         : {
		id        : 'rapidfirecannon',
		name      : `Rapid Fire Cannon`,
		perk      : `Doubles atk range. Atks can't be dodged`,
		perk_full : `Attack range is doubled. Wearer's attack cannot be dodged`,
	},
	bow_cloak       : {
		id        : 'runaanshurricane',
		name      : `Runaan's Hurricane`,
		perk      : 'Atks extra enemy & deals 60% dmg (on hit effects)',
		perk_full : 'Attacks one additional enemy and deals 60% damage (applies on hit effects)',
	},
	bow_glove       : {
		id        : 'lastwhisper',
		name      : `Last Whisper`,
		perk      : 'Crit hits reduce armor by 90% for 3s (no stack)',
		perk_full : 'Critical hits reduce the target’s Armor by 90% for 3 seconds. This effect does not stack.',
	},
	bow_rod         : {
		id        : 'guinsoosrageblade',
		name      : `Guinsoo's Rageblade`,
		perk      : 'Atks give +5% atk speed (stacks infinitely)',
		// perk      : '+5% atk speed on attacks (stacks infinitely)',
		perk_full : 'Attacks give 5% attack speed. stacks infinitely',
	},
	bow_spatula     : {
		id        : 'bladeoftheruinedking',
		name      : `Blade of the Ruined King`,
		perk      : 'Also Blademaster',
		perk_full : 'Wearer is also a blademaster',
	},
	bow_sword       : {
		id        : 'giantslayer',
		name      : `Giant Slayer`,
		perk      : "Atks deal +9% enemy's current HP as physical dmg",
		perk_full : "Attacks deal additional 9% of enemy's current HP as physical damage",
	},
	bow_tear        : {
		id        : 'statikkshiv',
		name      : `Statikk Shiv`,
		perk      : 'Deal 80 magic dmg to 3/4/5 enemies',
		perk_full : 'Deals 80 magic damage to 3/4/5 enemies (scales with wearer’s Star Level)',
	},
	bow_vest        : {
		id        : 'titansresolve',
		name      : `Titan's Resolve`,
		perk      : 'When hit or crits, gain 2% dmg (100% max). At 50 stacks, +25 armor & MR (resets each round)',
		perk_full :
			'When the wearer is hit or inflicts a critical strike, they gain a 2% stacking damage bonus, up to 100%. At 50 stacks, the wearer gains 25 Armor and MR; and increases in size. Resets every round.',
	},
	cloak_cloak     : {
		id        : 'dragonsclaw',
		name      : `Dragon's Claw`,
		perk      : '50% magic dmg resistance',
		perk_full : '50% resistance to magic damage',
	},
	cloak_glove     : {
		id        : 'quicksilver',
		name      : `Quicksilver`,
		perk      : 'Immune to crowd control [UNIQUE]',
		perk_full : '[UNIQUE] The wearer is immune to crowd control',
	},
	cloak_rod       : {
		id        : 'ionicspark',
		name      : `Ionic Spark`,
		perk      : 'Zap enemies that cast spell w/in 3 hex for 200% max mana as magic dmg',
		perk_full :
			'Enemies within 3 hexes that cast a spell are zapped, taking magic damage equal to 200% of their max Mana',
	},
	cloak_spatula   : {
		id        : 'talismanoflight',
		name      : `Talisman of Light`,
		perk      : 'Also Light',
		perk_full : 'Wearer is also light',
	},
	cloak_sword     : {
		id        : 'bloodthirster',
		name      : `Bloodthirster`,
		perk      : 'Atks heal for 40% of dmg',
		perk_full : 'Attacks heal for 40% of damage',
	},
	cloak_tear      : {
		id        : 'hush',
		name      : `Hush`,
		perk      : 'Atks have 20% chance to mana lock for 4s',
		perk_full : 'Attacks have 20% chance to mana lock for 4 seconds',
	},
	cloak_vest      : {
		id        : 'swordbreaker',
		name      : `Swordbreaker`,
		perk      : 'Atks have 25% chance to disarm for 3s',
		perk_full : 'Attacks have 25% chance to disarm for 3 seconds',
	},
	glove_glove     : {
		id        : 'thiefsgloves',
		name      : `Thief's Gloves`,
		// perk      : 'At start, gain 2 temp items (takes all slots)',
		perk      : 'Start w/ 2 temp items (takes all slots)',
		perk_full : 'Takes all item slots. on round start, gain 2 temporary items',
	},
	glove_rod       : {
		id        : 'jeweledgauntlet',
		name      : `Jeweled Gauntlet`,
		perk      : 'Abilities can crit strike',
		perk_full : 'Your abilities can critically strike',
	},
	glove_spatula   : {
		id        : 'berserkeraxe',
		name      : `Berserker Axe`,
		perk      : 'Also Berserker',
		perk_full : 'Wearer is also berserker',
	},
	glove_sword     : {
		id        : 'infinityedge',
		name      : `Infinity Edge`,
		perk      : 'Crit strikes deal +125% dmg',
		perk_full : 'Critical strikes deal +125% damage',
	},
	glove_tear      : {
		id        : 'handofjustice',
		name      : `Hand of Justice`,
		// perk      : 'On start, +50% dmg or +50 life on hit until round end',
		perk      : 'Start w/ +50% dmg or +50 life on hit for round',
		perk_full : 'On round start, gain +50% damage or +50 life on hit until end of round',
	},
	glove_vest      : {
		id        : 'iceborngauntlet',
		name      : `Iceborn Gauntlet`,
		perk      : `On spell cast, next basic atk freezes target for 1.5s`,
		perk_full : `After casting a spell, the wearer's next basic attack freezes the target for 1.5 seconds.`,
	},
	rod_rod         : {
		id        : 'rabadonsdeathcap',
		name      : `Rabadon's Death Cap`,
		perk      : '+75% ability dmg',
		perk_full : "Wearer's ability damage increased by 75%",
	},
	rod_spatula     : {
		id        : 'infernocinder',
		name      : `Inferno Cinder`,
		perk      : 'Also Inferno',
		perk_full : 'Wearer is also Inferno',
	},
	rod_sword       : {
		id        : 'hextechgunblade',
		name      : `Hextech Gunblade`,
		perk      : 'Heal for 25% of dmg dealt',
		perk_full : 'Heal for 25% of all damage dealt',
	},
	rod_tear        : {
		id        : 'ludensecho',
		name      : `Luden's Echo`,
		perk      : 'Deals 120/160/200 magic dmg',
		perk_full : 'Deals 120/160/200 magic damage (scales with wearer’s Star Level)',
	},
	rod_vest        : {
		id        : 'locketoftheironsolari',
		name      : `Locket of the Iron Solari`,
		perk      : 'Shields allies 2 L&R in row for 250/275/300 dmg for 8s',
		perk_full :
			'Shields allies within two hexes in the same row for 250/275/300 damage for 8 seconds (scales with wearer’s Star Level)',
	},
	spatula_spatula : {
		id        : 'forceofnature',
		name      : `Force of Nature`,
		perk      : '+1 team size',
		perk_full : 'Gain + team size',
	},
	spatula_sword   : {
		id        : 'youmuusghostblade',
		name      : `Youmuu's Ghostblade`,
		perk      : 'Also Assassin',
		perk_full : 'Wearer is also assassin',
	},
	spatula_tear    : {
		id        : 'magescap',
		name      : `Mage's Cap`,
		perk      : 'Also Mage',
		perk_full : 'Wearer is also a mage',
	},
	spatula_vest    : {
		id        : 'wardensmail',
		name      : `Warden's Mail`,
		perk      : 'Also Warden',
		perk_full : 'Wearer is also a warden',
	},
	sword_sword     : {
		id        : 'deathblade',
		name      : `Deathblade`,
		perk      : 'On kill/assist, +15 atk (stacks infinitely)',
		perk_full : 'On kill or assist, gain +15 attack, stacks infinitely',
	},
	sword_tear      : {
		id        : 'spearofshojin',
		name      : `Spear of Shojin`,
		perk      : 'After cast, +18% max mana per atk',
		perk_full : 'After casting, gain 18% of max mana per attack',
	},
	sword_vest      : {
		id        : 'guardianangel',
		name      : `Guardian Angel`,
		perk      : 'Revives w/ 400HP after 2s',
		perk_full : 'Revives champ with 400 HP after 2 seconds',
	},
	tear_tear       : {
		id        : 'seraphsembrace',
		name      : `Seraph's Embrace`,
		perk      : '+20 mana each time a spell is cast',
		perk_full : 'Regain 20 mana each time a spell is cast',
	},
	tear_vest       : {
		id        : 'frozenheart',
		name      : `Frozen Heart`,
		perk      : `Nearby enemy atk speed slowed 40%. (Stack increases effect radius)`,
		perk_full : `Nearby enemies' attack speed is slowed by 40%. (Stacking increases the radius of this effect, not the amount of the slow)`,
	},
	vest_vest       : {
		id        : 'bramblevest',
		name      : `Bramble Vest`,
		perk      :
			'Negates bonus dmg from crit. When hit by basic atk, deal 80/120/160 magic dmg to nearby enemies (Max every 1s)',
		perk_full :
			'Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal 80/120/160 magic damage to all nearby enemies (once every 1 second maximum). Scales with wearer’s Star Level.',
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
