let moves = {
	//moves for opcode critters
	'false': {
		name: 'false',
		damage: 45,
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

	//QUESTIONS
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
	'Q4': {
		name: 'Q4?',
		damage: 0,
		target: 'self'
	},
	'Q5': {
		name: 'Q5?',
		damage: 0,
		target: 'self'
	},
	'Q6': {
		name: 'q6',
		damage: 0,
		target: 'self'
	},
	'Q7': {
		name: 'q7',
		damage: 0,
		target: 'self'
	},
	'Q8': {
		name: 'q8',
		damage: 0,
		target: 'self'
	},
	'Q9': {
		name: 'Q9',
		damage: 0,
		target: 'self'
	},
	'Q10': {
		name: 'Q10',
		damage: 0,
		target: 'self'
	},

	//ANSWERS
	'Q1A1': {
		name: 'Satoshi',
		damage: 10,
		target: 'true'
	},
	'Q1A2': {
		name: 'q1a2',
		damage: 0,
		target: 'false'
	},
	'Q1A3': {
		name: 's3',
		damage: 0,
		target: 'false'
	},
	'Q1A4': {
		name: 's4',
		damage: 0,
		target: 'false'
	},

	'Q2A1': {
		name: 'choose this',
		damage: 10,
		target: 'true'
	},
	'Q2A2': {
		name: 'q2a2',
		damage: 0,
		target: 'false'
	},
	'Q2A3': {
		name: 's3',
		damage: 0,
		target: 'false'
	},
	'Q2A4': {
		name: 's4',
		damage: 0,
		target: 'false'
	},

	'Q3A1': {
		name: 'q3a1',
		damage: 0,
		target: 'false'
	},
	'Q3A2': {
		name: 'choose this',
		damage: 10,
		target: 'true'
	},
	'Q3A3': {
		name: 's3',
		damage: 0,
		target: 'false'
	},
	'Q3A4': {
		name: 's4',
		damage: 0,
		target: 'false'
	},

	'Q4A1': {
		name: 'choose this',
		damage: 10,
		target: 'true'
	},
	'Q4A2': {
		name: 'q4a2',
		damage: 0,
		target: 'false'
	},
	'Q4A3': {
		name: 's3',
		damage: 0,
		target: 'false'
	},
	'Q4A4': {
		name: 's4',
		damage: 0,
		target: 'false'
	},

	'Q5A1': {
		name: 'q5a1',
		damage: 0,
		target: 'false'
	},
	'Q5A2': {
		name: 'choose this',
		damage: 10,
		target: 'true'
	},
	'Q5A3': {
		name: 's3',
		damage: 0,
		target: 'false'
	},
	'Q5A4': {
		name: 's4',
		damage: 0,
		target: 'false'
	},

	'Q6A1': {
		name: 'Q6a1',
		damage: 0,
		target: 'false'
	},
	'Q6A2': {
		name: 'choose this',
		damage: 10,
		target: 'true'
	},
	'Q6A3': {
		name: 's3',
		damage: 0,
		target: 'false'
	},
	'Q6A4': {
		name: 's4',
		damage: 0,
		target: 'false'
	},

	'Q7A1': {
		name: 'Q7a1',
		damage: 0,
		target: 'false'
	},
	'Q7A2': {
		name: 'choose this',
		damage: 10,
		target: 'true'
	},
	'Q7A3': {
		name: 's3',
		damage: 0,
		target: 'false'
	},
	'Q7A4': {
		name: 's4',
		damage: 0,
		target: 'false'
	},

	'Q8A1': {
		name: 'Q8a1',
		damage: 0,
		target: 'false'
	},
	'Q8A2': {
		name: 'choose this',
		damage: 10,
		target: 'true'
	},
	'Q8A3': {
		name: 's3',
		damage: 0,
		target: 'false'
	},
	'Q8A4': {
		name: 's4',
		damage: 0,
		target: 'false'
	},

	'Q9A1': {
		name: 'Q9a1',
		damage: 0,
		target: 'false'
	},
	'Q9A2': {
		name: 'choose this',
		damage: 10,
		target: 'true'
	},
	'Q9A3': {
		name: 's3',
		damage: 0,
		target: 'false'
	},
	'Q9A4': {
		name: 's4',
		damage: 0,
		target: 'false'
	},

	'Q10A1': {
		name: 'Q10a1',
		damage: 0,
		target: 'false'
	},
	'Q10A2': {
		name: 'choose this',
		damage: 10,
		target: 'true'
	},
	'Q10A3': {
		name: 's3',
		damage: 0,
		target: 'false'
	},
	'Q10A4': {
		name: 's4',
		damage: 0,
		target: 'false'
	},
};