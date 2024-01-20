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
				endGame();
			}
			return currentPokemon;
		}
	}

	cycle(currentPokemon, party) {
		var foundPokemon = false;
		var tempHealth = this.health;
		// if (this.health <= 0) {
		console.log('fainted!');
		this.alive = false;
		for (var i = 0; i < party.length; i++) {
			if (party[i].alive == true) {
				foundPokemon = true;
				currentPokemon = party[i];
				currentPokemon.health = tempHealth;//added
				break;
			}
		}
		// if (foundPokemon == false) {
		// 	endGame();
		// }
		return currentPokemon;
		// }
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

// pokemon.push(new Pokemon('OP_CAT', 99, 117, [moves['correct'], moves['false'], moves['Q1']], './assets/img/mew07.png', './assets/img/mew07.png'));
pokemon.push(new Pokemon('OP_CAT', 99, 91, [moves['Q1'], moves['Q2'], moves['Q3'], moves['Q4'], moves['Q5'], moves['correct'], moves['false']], './assets/img/mew07.png', './assets/img/mew07.png'));

// pokemon.push(new Pokemon('OP_CTV', 99, 117, [moves['correct'], moves['false']], './assets/img/templeape01.png', './assets/img/templeape01.png'));

pokemon.push(new Pokemon('WIZARD1', 10, 100, [moves['Q1A1'], moves['Q1A2'], moves['Q1A3'], moves['Q1A4']], './assets/img/wizard02.png', './assets/img/wizard02.png'));
pokemon.push(new Pokemon('WIZARD2', 20, 100, [moves['Q2A1'], moves['Q2A2'], moves['Q2A3'], moves['Q2A4']], './assets/img/wizard02.png', './assets/img/wizard02.png'));
// pokemon.push(new Pokemon('WIZARD3', 30, 100, [moves['Q3A1'], moves['Q3A2'], moves['Q3A3'], moves['Q3A4']], './assets/img/wizard02.png', './assets/img/wizard02.png'));
// pokemon.push(new Pokemon('WIZARD4', 40, 100, [moves['Q4A1'], moves['Q4A2'], moves['Q4A3'], moves['Q4A4']], './assets/img/wizard02.png', './assets/img/wizard02.png'));
// pokemon.push(new Pokemon('WIZARD5', 50, 100, [moves['Q5A1'], moves['Q5A2'], moves['Q5A3'], moves['Q5A4']], './assets/img/wizard02.png', './assets/img/wizard02.png'));
pokemon.push(new Pokemon('WIZARD0', 50, 100, 
[
	moves['Q1A1'], moves['Q1A2'], moves['Q1A3'], moves['Q1A4'],
	moves['Q2A1'], moves['Q2A2'], moves['Q2A3'], moves['Q2A4'],
	moves['Q3A1'], moves['Q3A2'], moves['Q3A3'], moves['Q3A4'],
	moves['Q4A1'], moves['Q4A2'], moves['Q4A3'], moves['Q4A4'],
	moves['Q5A1'], moves['Q5A2'], moves['Q5A3'], moves['Q5A4'],
], 
'./assets/img/wizard02.png', './assets/img/wizard02.png'));


let playerParty = [];
let enemyParty = [];