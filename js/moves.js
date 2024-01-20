let moves = {
	//moves for opcode critters
	'false': {
		name: 'false',
		damage: 35,
		target: 'enemy'
	},
	'correct': {
		name: 'correct',
		damage: -0,
		target: 'self'
	},

	//answer choices for wizards
	'choice 1': {
		name: 'CHOICE 1',
		damage: 0,
		target: 'enemy'
	},
	'choice 2': {
		name: 'CHOICE 2',
		damage: 0,
		target: 'enemy'
	},
	'choice 3': {
		name: 'CHOICE 3',
		damage: 0,
		target: 'enemy'
	},
	'choice 4': {
		name: 'CHOICE 4',
		damage: 0,
		target: 'enemy'
	},

	//questions
	'Q1': {
		name: 'Who invented OP_CAT??',
		damage: 0,
		target: 'self'
	},
	'Q2': {
		name: 'What does concatenate mean?',
		damage: 0,
		target: 'self'
	},
	'Q3': {
		name: 'What it dooooo question 3',
		damage: 0,
		target: 'self'
	},

	'Q1A1': {
		name: 'Satoshi',
		damage: 10,
		target: 'true'
	},
	'Q1A2': {
		name: 'someone2',
		damage: 0,
		target: 'false'
	},
	'Q1A3': {
		name: 'someone3',
		damage: 0,
		target: 'false'
	},
	'Q1A4': {
		name: 'someone4',
		damage: 0,
		target: 'false'
	},
};