var characters = [
    {
		name: 'Peashooter',
		picture: 'http://vignette3.wikia.nocookie.net/plantsvszombies/images/8/85/Peashooter1.png/revision/latest?cb=20111029120055',
		hitPoints: 100,
		alive: true, 
		attackPower: 25,
		defaultPower: 6,
		counterPwer: 6
    }, 
    {
		name: "Sunflower",
		picture: 'http://vignette4.wikia.nocookie.net/plantsvszombies/images/e/e2/Sunflower1.png/revision/latest?cb=20090521221033',
		hitPoints: 100,
		alive: true, 
		attackPower: 25,
		defaultPower: 6,
		counterPwer: 6
    }, 
    {
		name: "Cherry-Bomb",
		picture: 'http://vignette2.wikia.nocookie.net/plantsvszombies/images/0/0d/Cherry_Bomb1.png/revision/latest?cb=20090521215844',
		hitPoints: 100,
		alive: true, 
		attackPower: 25,
		defaultPower: 6,
		counterPwer: 6
    }, 
    {
		name: "Chomper",
		picture: 'http://vignette2.wikia.nocookie.net/plantsvszombies/images/a/a3/Chomper1.png/revision/latest?cb=20090521220057',
		hitPoints: 100,
		alive: true, 
		attackPower: 25,
		defaultPower: 6,
		counterPwer: 6
    }, 
    {
		name: "Kernel-pult",
		picture: 'http://vignette4.wikia.nocookie.net/plantsvszombies/images/c/c4/Kernel-pult1.png/revision/latest?cb=20090521220358',
		hitPoints: 100,
		alive: true, 
		attackPower: 25,
		defaultPower: 6,
		counterPwer: 6
    }
  ];

var names = ['Peashooter', 'Sunflower', 'Cherry-Bomb', 'Chomper', 'Kernel-pult'];
var yourChar = "";    
var enemyChar = "";  

$(document).ready(function(){
	// 1. create a new div element and put it into a variable named character
	var character = document.createElement('div');

	// 2. use the setAttribute function on the character variable and set the id of it to menu
	character.setAttribute('id', 'menu');

	// 3. add the character to the page with the appendChild function
	document.body.appendChild(character);

		for (var i = 0; i < characters.length; i++) {

		//4. create a div and store it inside a variable named newCharacterDiv
		var newCharacterDiv = document.createElement('div');

		//5. use the setAttribute function on the newCharacterDiv variable and set the class of it to character
		newCharacterDiv.setAttribute('class', 'character');
		newCharacterDiv.setAttribute('data-name', characters[i].name);
		newCharacterDiv.setAttribute('onclick', 'moveButton(this)');
		var html = "<p>" + characters[i].name + "</p>"
		html = html + "<p><img width=\"100\" src=\"" + characters[i].picture + "\" alt=\" + " + characters[i].name + " + \" />"
		html = html + "<p>Hit Points: " + characters[i].hitPoints + "</p>";

		//6. set the innerHTML of the newCharacterDiv to html
		newCharacterDiv.innerHTML = html;

		//7. add the newCharacterDiv to the character
		character.appendChild(newCharacterDiv);

		}
});

 var good = false;

    function moveButton(elem) {
      if ($(elem).parent().attr("id") == "menu" && !good) {
        $(elem).detach().appendTo('#good');
      } else if ($(elem).parent().attr("id") == "evil") {
        $(elem).detach().appendTo('#enemy');
      } else {
        $(elem).detach().appendTo('#evil');
      }
      
      $("#menu").find(".character").detach().appendTo('#evil');
      
      good = true;
    }

function fightButton(elem) {
	characters[enemyChar].hitPoints -= characters[yourChar].attackPower;
	alert(enemyChar);
}

// The player will now be able to hit the attack button to fight against that defender.

// Whenever the attack button is hit, the player character is going to attack the defender character once. The defender character will now counter attack the player character once.

// When the player character "attacks", the defender will lose "Health Points" displayed at the bottom of the defender's picture.

// When the defender "counter attacks", the player character will lose hp displayed at the bottom of the player character's picture.

// Keep hitting the attack to try and defeat the defender

// When the defender's "Health Points" are reduced to 0 or below, they are removed from the "defender area". The player character can now pick a new enemy to attack.

// The player wins the game by defeating all enemy characters, and loses the game the game if the player character's "Health Points" are 0 or below.






// Game design notes:

// Each character in the game has 3 attributes: Health Points, Attack Power, and Counter Attack Power.

// Each time the player attacks, their character's Attack Power increases by its base Attack Power. So if the base Attack Power is 6, each attack will increase the Attack Power by 6. (12, 18, 24, 30 etc...)

// The enemy character only has Counter Attack Power and their Counter Attack Power never changes.

// The Health Points, Attack Power, and Counter Attack Power of each character will be different.

// None of the characters in the game can heal or recover Health Points, so the point of the game is to pick a character and fight an enemy that has low Counter Attack Power first and build up your own Attack Power before you lose all your Health Points.

// Depending on game play, you can win or lose with any of the characters in the game.