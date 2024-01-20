let titlesfx = new Audio('./assets/sfx/pokemonopening.mp3');
let battlesfx = new Audio('./assets/sfx/pokemonbattle.mp3');
let victorysfx = new Audio('./assets/sfx/pokemonvictory.mp3');

let playerPokemon;
let enemyPokemon;

let questionCounter = 0;

addListeners();

function startButton() {
	document.getElementById('startbutton').style.zIndex = '-1';
	document.getElementById('battle').style.visibility = 'visible';
	document.getElementById('opening').style.zIndex = '1';
	titlesfx.play();
	setTimeout(function() {
		titlesfx.pause();
		transition();
	}, 9000);
}

function transition() {
	document.getElementById('black').src = './assets/img/black.png';
	document.getElementById('black').style.zIndex = '1';
	document.getElementById('opening').style.zIndex = '-1';
	setTimeout(function() {
	battlesfx.play();
	}, 1000);

	setTimeout(function() {
	document.getElementById('black').style.zIndex = '-1';
	initGame();
	}, 3800)
}

//Starts the game with the player as the Taproot Wizard battling against Mew/OP_CAT
function initGame() {
	enemyParty.push(pokemon[0]);
	playerParty.push(pokemon[1]);
	// playerParty.push(pokemon[2]);
	// playerParty.push(pokemon[3]);
	// playerParty.push(pokemon[4]);
	// playerParty.push(pokemon[5]);
	// playerParty.push(pokemon[6]);
	// playerParty.push(pokemon[7]);
	// playerParty.push(pokemon[8]);
	// playerParty.push(pokemon[9]);
	// playerParty.push(pokemon[10]);
	playerPokemon = playerParty[0];
	console.log(playerPokemon);
	enemyPokemon = enemyParty[0];

	showPokemon();
}

function showPokemon(){
	current = questionCounter;
	console.log(enemyPokemon);
	document.getElementById('pkmnback').src = playerPokemon.imgback;
	document.getElementById('pkmn').src = enemyPokemon.imgfront;
	document.getElementById('pkmnback-name').textContent = playerPokemon.pokename;
	document.getElementById('pkmn-name').textContent = enemyPokemon.pokename;
	document.getElementById('pkmnback-maxhp').textContent = playerPokemon.maxhealth;
	document.getElementById('pkmnback-hp').textContent = playerPokemon.health;
	document.getElementById('attack1').textContent = playerPokemon.moves[(questionCounter*4)+0].name;
	document.getElementById('attack2').textContent = playerPokemon.moves[(questionCounter*4)+1].name;
	document.getElementById('question').textContent = enemyPokemon.moves[questionCounter].name

	// This animates the health bar when attacked
	var percentage = playerPokemon.health / playerPokemon.maxhealth;
	document.getElementById('player-hp-bar').style.width = ((161 * percentage) + "px");
	percentage = enemyPokemon.health / enemyPokemon.maxhealth;
	document.getElementById('enemy-hp-bar').style.width = ((161 * percentage) + "px");
}

// function switchPokemon() {
// 	console.log('switched pokemon');
// }

// function itemButton() {
// }

function fightButton() {
	document.getElementById('b2').src = "./assets/img/pkmnbattle2.png";
	document.getElementById('attackcancel').style.zIndex = '1';
	document.getElementById('attack1').style.zIndex = '1';
	document.getElementById('attack2').style.zIndex = '1';
	document.getElementById('question').style.zIndex = '1';
}

// function pkmnButton() {
// }

function cancelButton() {
	document.getElementById('attackcancel').style.zIndex = '-1';
	document.getElementById('attack1').style.zIndex = '-1';
	document.getElementById('attack2').style.zIndex = '-1';
	document.getElementById('question').style.zIndex = '-1';
	document.getElementById('b2').src = "";

}

function attack1() {
	// playerPokemon.attack(enemyPokemon, playerPokemon.moves[0]);
	document.getElementById('attackcancel').style.zIndex = '-1';
	document.getElementById('attack1').style.zIndex = '-1';
	document.getElementById('attack2').style.zIndex = '-1';
	document.getElementById('question').style.zIndex = '-1';
	document.getElementById('b2').src = "";
	if (playerPokemon.moves[(questionCounter*4)+0].target == 'true') {
		document.getElementById('pkmn').style.animation = 'blink 0.15s 5';
		setTimeout(function() {
			document.getElementById('pkmn').style.animation = '';
		}, 1000);
		playerPokemon.attack(enemyPokemon, playerPokemon.moves[44]);
		questionCounter++;
		// playerPokemon.faint(playerPokemon, playerParty);
	}
	else {
		enemyPokemon.attack(playerPokemon,enemyPokemon.moves[11]);//hardcoded to 1 bc that's where 'false' is rn
		playerPokemon.loser(playerPokemon, playerParty);
		document.getElementById('pkmnback').style.animation = 'blink 0.15s 5';
		setTimeout(function() {
			document.getElementById('pkmnback').style.animation = '';
		}, 1000);
	}
	enemyPokemon.faint(enemyPokemon, enemyParty);
	removeListeners();
	setTimeout(function() {
		enemyAttack();
		addListeners();
	}, 1000);

	showPokemon();
}

function attack2() {
	// playerPokemon.attack(enemyPokemon, playerPokemon.moves[1]);
	document.getElementById('attackcancel').style.zIndex = '-1';
	document.getElementById('attack1').style.zIndex = '-1';
	document.getElementById('attack2').style.zIndex = '-1';
	document.getElementById('question').style.zIndex = '-1';
	document.getElementById('b2').src = "";
	if (playerPokemon.moves[(questionCounter*4)+1].target == 'true') {
		document.getElementById('pkmn').style.animation = 'blink 0.15s 5';
		setTimeout(function() {
			document.getElementById('pkmn').style.animation = '';
		}, 1000);
		playerPokemon.attack(enemyPokemon, playerPokemon.moves[44]);
		questionCounter++;
		// playerPokemon.faint(playerPokemon, playerParty);
	}
	else {
		enemyPokemon.attack(playerPokemon,enemyPokemon.moves[11]);//hardcoded to 1 bc that's where 'false' is rn
		playerPokemon.loser(playerPokemon, playerParty);
		document.getElementById('pkmnback').style.animation = 'blink 0.15s 5';
		setTimeout(function() {
			document.getElementById('pkmnback').style.animation = '';
		}, 1000);
	}
	console.log(enemyPokemon.health);
	enemyPokemon.faint(enemyPokemon, enemyParty);
	removeListeners();
	setTimeout(function () {
		enemyAttack();
		addListeners();
	}, 1000);
	showPokemon();
}

function enemyAttack() {
	// var attackMove = Math.floor(Math.random() * enemyPokemon.moves.length);
	//Only inflict damage if the answer is wrong
	// var attackMove = if 
	// console.log('attacked with',enemyPokemon.moves[attackMove].name);
	// enemyPokemon.attack(playerPokemon,enemyPokemon.moves[attackMove]);
	// if (enemyPokemon.moves[attackMove].target != 'self') {
	// 	document.getElementById('pkmnback').style.animation = 'blink 0.15s 5';
	// 	setTimeout(function() {
	// 		document.getElementById('pkmnback').style.animation = '';
	// 	}, 1000);
	// }
	// showPokemon();
	// playerPokemon.loser(playerPokemon, playerParty);
}

function addListeners() {
	document.getElementById('startbutton').addEventListener('click', startButton);
	document.getElementById('fight').addEventListener('click', fightButton);
	document.getElementById('attackcancel').addEventListener('click', cancelButton);
	document.getElementById('attack1').addEventListener('click', attack1);
	document.getElementById('attack2').addEventListener('click', attack2);
	// document.getElementById('items').addEventListener('click', potion);
}

function removeListeners() {
	document.getElementById('fight').removeEventListener('click', fightButton);
	document.getElementById('attackcancel').removeEventListener('click', cancelButton);
	document.getElementById('attack1').removeEventListener('click', attack1);
	document.getElementById('attack2').removeEventListener('click', attack2);
	// document.getElementById('items').removeEventListener('click', potion);
}

function endGame() {
	document.getElementById('ending').src = './assets/img/pkmnvictory.png';
	document.getElementById('ending').style.zIndex = '1';
	document.getElementById('endingtext').style.zIndex = '1';
	battlesfx.pause();
	victorysfx.play();
}

function endGameWin() {
	document.getElementById('ending').src = './assets/img/pkmnvictory2.png';
	document.getElementById('choosealive').src = './assets/img/choosealive.png';
	document.getElementById('choosedead').src = './assets/img/choosedead.png';
	document.getElementById('ending').style.zIndex = '1';
	document.getElementById('winnertext').style.zIndex = '1';
	battlesfx.pause();
	victorysfx.play();
}