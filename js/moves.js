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

	//QUESTIONS
	'Q1': {
		name: 'Which best describes the programmability of Bitcoin Script?',
		damage: 0,
		target: 'self'
	},
	'Q2': {
		name: 'What is an opcode?',
		damage: 0,
		target: 'self'
	},
	'Q3': {
		name: 'What does OP_CAT do?',
		damage: 0,
		target: 'self'
	},
	'Q4': {
		name: 'Who created OP_CAT?',
		damage: 0,
		target: 'self'
	},
	'Q5': {
		name: 'Under which condition does OP_CAT fail?',
		damage: 0,
		target: 'self'
	},
	'Q6': {
		name: 'Why was OP_CAT removed from Bitcoin?',
		damage: 0,
		target: 'self'
	},
	'Q7': {
		name: 'How can OP_CAT be added back to Bitcoin?',
		damage: 0,
		target: 'self'
	},
	'Q8': {
		name: 'How can Covenants be achieved?',
		damage: 0,
		target: 'self'
	},
	'Q9': {
		name: 'Order these from most restrictive to most expressive:',
		damage: 0,
		target: 'self'
	},
	'Q10': {
		name: 'Can OP_CAT be used for unintended purposes?',
		damage: 0,
		target: 'self'
	},

	//damage from wizard TODO set damage
	'answer_true': {
		name: 'answer_true',
		damage: 10,
		target: 'enemy'
	},	


	//ANSWERS
	'Q1A1': {
		name: 'There is zero programmability',
		damage: 0,
		target: 'false'
	},
	'Q1A2': {
		name: 'Programmability is limited',
		damage: 10,
		target: 'true'
	},
	'Q1A3': {
		name: 'Programmability is arbitrary / Turing-complete',
		damage: 0,
		target: 'false'
	},
	'Q1A4': {
		name: 'It depends on your hardware',
		damage: 0,
		target: 'false'
	},

	'Q2A1': {
		name: 'A tip to miners',
		damage: 0,
		target: 'false'
	},
	'Q2A2': {
		name: 'An asset type',
		damage: 0,
		target: 'false'
	},
	'Q2A3': {
		name: 'An instruction in Bitcoin Script',
		damage: 10,
		target: 'true'
	},
	'Q2A4': {
		name: 'An Ordinals-esq metaprotocol',
		damage: 0,
		target: 'false'
	},

	'Q3A1': {
		name: 'Duplicate the last stack value',
		damage: 0,
		target: 'false'
	},
	'Q3A2': {
		name: 'Combine two stack values',
		damage: 10,
		target: 'true'
	},
	'Q3A3': {
		name: 'Include arbitrary data',
		damage: 0,
		target: 'false'
	},
	'Q3A4': {
		name: 'All A, B, and C',
		damage: 0,
		target: 'false'
	},

	'Q4A1': {
		name: 'Satoshi',
		damage: 10,
		target: 'true'
	},
	'Q4A2': {
		name: 'Eric and Udi',
		damage: 0,
		target: 'false'
	},
	'Q4A3': {
		name: 'Craig Wright',
		damage: 0,
		target: 'false'
	},
	'Q4A4': {
		name: 'Ocean Mining Pool',
		damage: 10,
		target: 'true'
	},

	'Q5A1': {
		name: 'OP_DUP is used in the same tx',
		damage: 0,
		target: 'false'
	},
	'Q5A2': {
		name: 'There is only 1 stack value',
		damage: 0,
		target: 'false'
	},
	'Q5A3': {
		name: 'The resulting value is > 520 bytes',
		damage: 0,
		target: 'false'
	},
	'Q5A4': {
		name: 'Both B and C',
		damage: 10,
		target: 'true'
	},

	'Q6A1': {
		name: 'Satoshi did not want rollups',
		damage: 0,
		target: 'false'
	},
	'Q6A2': {
		name: 'Satoshi did not want NFTs',
		damage: 0,
		target: 'false'
	},
	'Q6A3': {
		name: 'Both A and B',
		damage: 0,
		target: 'false'
	},
	'Q6A4': {
		name: 'Nobody knows, Satoshi didnt say',
		damage: 10,
		target: 'true'
	},

	'Q7A1': {
		name: 'Revert & re-mine all blocks since it was removed',
		damage: 0,
		target: 'false'
	},
	'Q7A2': {
		name: 'A soft fork',
		damage: 10,
		target: 'true'
	},
	'Q7A3': {
		name: 'A hard fork',
		damage: 0,
		target: 'false'
	},
	'Q7A4': {
		name: 'Inscribe the code onto everyones node',
		damage: 0,
		target: 'false'
	},

	'Q8A1': {
		name: 'Either OP_CAT or OP_CTV',
		damage: 10,
		target: 'true'
	},
	'Q8A2': {
		name: 'Only through OP_CAT',
		damage: 0,
		target: 'false'
	},
	'Q8A3': {
		name: 'Only through OP_CTV',
		damage: 0,
		target: 'false'
	},
	'Q8A4': {
		name: 'Only both combined',
		damage: 0,
		target: 'false'
	},

	'Q9A1': {
		name: 'OP_CAT, OP_TXHASH, OP_CTV',
		damage: 0,
		target: 'false'
	},
	'Q9A2': {
		name: 'OP_CAT, OP_CTV, OP_TXHASH',
		damage: 0,
		target: 'false'
	},
	'Q9A3': {
		name: 'OP_CTV, OP_TXHASH, OP_CAT',
		damage: 0,
		target: 'false'
	},
	'Q9A4': {
		name: 'OP_CTV, OP_CAT, OP_TXHASH',
		damage: 10,
		target: 'true'
	},

	'Q10A1': {
		name: 'No. OP_DUP and bloat issues were fixed',
		damage: 0,
		target: 'false'
	},
	'Q10A2': {
		name: 'No. All edge cases are caught in Signet',
		damage: 0,
		target: 'false'
	},
	'Q10A3': {
		name: 'Yes. There are always unknowns',
		damage: 10,
		target: 'true'
	},
	'Q10A4': {
		name: 'No. Satoshi himself created it',
		damage: 0,
		target: 'false'
	},

	'Q11A1': {
		name: 'Q11a1-final',
		damage: 0,
		target: 'false'
	},
	'Q11A2': {
		name: 'a2-final',
		damage: 10,
		target: 'true'
	},
	'Q11A3': {
		name: 'a3-final',
		damage: 0,
		target: 'false'
	},
	'Q11A4': {
		name: 'a4-final',
		damage: 0,
		target: 'false'
	},
};