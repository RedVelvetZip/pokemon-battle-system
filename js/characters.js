class Pokemon {
	constructor(pokename, level, maxhealth, moves, imgfront, imgback) {
		this.pokename = pokename;
		this.level = level;
		this.health = maxhealth;
		this.maxhealth = maxhealth;
		this.moves = moves;
		this.imgfront = imgfront;
		this.imgback = imgback;
		this.alive = true;
	}

	decrementHealth(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			if (this.owner == 'player') {
				playerPokemon = this.faint(playerPokemon, playerParty);
			}
			if (this.owner == 'enemy') {
				enemyPokemon = this.faint(enemyPokemon, enemyParty);
			}
		}
		if (this.health > this.maxhealth) {
			this.health = this.maxhealth;
		}
	}
	attack(target, move) {
		if (move.target == 'self') {
			this.decrementHealth(Math.round(this.maxhealth * move.damage));
		} else {
		target.decrementHealth(move.damage);
		}
	}
	wrongAnswer(target, move) {
		
	}
	// Faint function will pull the next pokemon in the array into the battle
	faint(currentPokemon, party) {
		var foundPokemon = false;
		if (this.health <= 0) {
			console.log('fainted!');
			this.alive = false;
			for (var i = 0; i < party.length; i++) {
				if (party[i].alive == true) {
					foundPokemon = true;
					currentPokemon = party[i];
					console.log(currentPokemon.pokename)
					break;
				}
			}
			if (foundPokemon == false) {
				endGameWin();
			}
			return currentPokemon;
		}
	}

	loser(currentPokemon, party) {
		// var foundPokemon = false;
		// var tempHealth = this.health;
		if (this.health <= 0) {
			// console.log('fainted!');
			// this.alive = false;
			// for (var i = 0; i < party.length; i++) {
			// 	if (party[i].alive == true) {
			// 		foundPokemon = true;
			// 		currentPokemon = party[i];
			// 		currentPokemon.health = tempHealth;//added
			// 		break;
			// 	}
			// }
			// if (foundPokemon == false) {
				endGame();
			}
			return currentPokemon;
		// }
	}
};

pokemon = [];

pokemon.push(new Pokemon('OP_CAT', 99, 93, [moves['Q1'], moves['Q2'], moves['Q3'], moves['Q4'], moves['Q5'], moves['Q6'], moves['Q7'], moves['Q8'], moves['Q9'], moves['Q10'], moves['correct'], moves['false']], './assets/img/mew07.png', './assets/img/mew07.png'));
pokemon.push(new Pokemon('WIZARD', 50, 100, 
[
	moves['Q1A1'], moves['Q1A2'], moves['Q1A3'], moves['Q1A4'],
	moves['Q2A1'], moves['Q2A2'], moves['Q2A3'], moves['Q2A4'],
	moves['Q3A1'], moves['Q3A2'], moves['Q3A3'], moves['Q3A4'],
	moves['Q4A1'], moves['Q4A2'], moves['Q4A3'], moves['Q4A4'],
	moves['Q5A1'], moves['Q5A2'], moves['Q5A3'], moves['Q5A4'],
	moves['Q6A1'], moves['Q6A2'], moves['Q6A3'], moves['Q6A4'],
	moves['Q7A1'], moves['Q7A2'], moves['Q7A3'], moves['Q7A4'],
	moves['Q8A1'], moves['Q8A2'], moves['Q8A3'], moves['Q8A4'],
	moves['Q9A1'], moves['Q9A2'], moves['Q9A3'], moves['Q9A4'],
	moves['Q10A1'], moves['Q10A2'], moves['Q10A3'], moves['Q10A4'],
	moves['Q11A1'], moves['Q11A2'], moves['Q11A3'], moves['Q11A4'],
	moves['answer_true']
], 
'./assets/img/wizard02.png', './assets/img/wizard02.png'));

// pokemon.push(new Pokemon('OP_CTV', 99, 117, [moves['correct'], moves['false']], './assets/img/templeape01.png', './assets/img/templeape01.png'));

let playerParty = [];
let enemyParty = [];