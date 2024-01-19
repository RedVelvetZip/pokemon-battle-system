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
	useItem(target, item) {
		if (item.target == 'self') {
			this.decrementHealth(this.maxhealth * item.damage);
		}
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
};

pokemon = [];
pokemon.push(new Pokemon('OP_CAT', 99, 117, [moves['inquisition'], moves['maxi laser eyes']], './assets/img/mew07.png', './assets/img/mew07.png'));
pokemon.push(new Pokemon('OP_CTV', 99, 117, [moves['inquisition'], moves['maxi laser eyes']], './assets/img/mew07.png', './assets/img/mew07.png'));
pokemon.push(new Pokemon('WIZARD', 2, 20, [moves['choice 1'], moves['choice 2'], moves['choice 3'], moves['choice 4']], './assets/img/wizard02.png', './assets/img/wizard02.png'));
pokemon.push(new Pokemon('WIZARD', 4, 40, [moves['choice 1'], moves['choice 2'], moves['choice 3'], moves['choice 4']], './assets/img/wizard02.png', './assets/img/wizard02.png'));
pokemon.push(new Pokemon('WIZARD', 8, 60, [moves['choice 1'], moves['choice 2'], moves['choice 3'], moves['choice 4']], './assets/img/wizard02.png', './assets/img/wizard02.png'));
pokemon.push(new Pokemon('WIZARD', 16, 80, [moves['choice 1'], moves['choice 2'], moves['choice 3'], moves['choice 4']], './assets/img/wizard02.png', './assets/img/wizard02.png'));
pokemon.push(new Pokemon('WIZARD', 32, 100, [moves['choice 1'], moves['choice 2'], moves['choice 3'], moves['choice 4']], './assets/img/wizard02.png', './assets/img/wizard02.png'));
pokemon.push(new Pokemon('WIZARD', 64, 120, [moves['choice 1'], moves['choice 2'], moves['choice 3'], moves['choice 4']], './assets/img/wizard02.png', './assets/img/wizard02.png'));
pokemon.push(new Pokemon('WIZARD', 128, 256, [moves['choice 1'], moves['choice 2'], moves['choice 3'], moves['choice 4']], './assets/img/wizard02.png', './assets/img/wizard02.png'));


let playerParty = [];
let enemyParty = [];