/* global document */
/* jslint plusplus: true */
var cardsArray = [
    {'name': 'Card1', 'img': 'images/card1.png' },
    {'name': 'Card2', 'img': 'images/card2.png' },
    {'name': 'Card3', 'img': 'images/card3.png' },
    {'name': 'Card4', 'img': 'images/card4.png' },
    {'name': 'Card5', 'img': 'images/card5.png' },
    {'name': 'Card6', 'img': 'images/card6.png' },
    {'name': 'Card7', 'img': 'images/card7.png' },
    {'name': 'Card8', 'img': 'images/card8.png' },
    {'name': 'Card9', 'img': 'images/card9.png' },
    {'name': 'Card10', 'img': 'images/card10.png' },
    {'name': 'Card11', 'img': 'images/card11.png' },
    {'name': 'Card12', 'img': 'images/card12.png' }
];

var gameGrid = cardsArray.concat(cardsArray);

// Grabe the div with an id of game-board and assign a variable game
var game = document.getElementById('game-board');
// Create a section element and assign it to a variable grid
var grid = document.createElement('section');
// Give section element a class of grid.
grid.setAttribute('class', 'grid');
// Append the grid section to the game-board div
game.appendChild('grid');

// Loop through each item to our cards array
var i = 0;
for (i = 0; i < gameGrid.length; i++) {
    // create a div element and assign to variable card
    var card = document.createElement('div');
    // apply a car class to that div
    card.classList.add('card');
    // set the data-name attribute of the div to the cardsArray name
    card.dataset.name = gameGrid[i].name;
    // apply the background of the div to the cardsArray image
    card.style.backgroundImage = 'url(${gameGrid[i].img})';
    // append the div to the grid section
    grid.appendChild(card);
}