console.log("Up and running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

function shuffle(cards) {
    var j, x, i;
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = cards[i];
        cards[i] = cards[j];
        cards[j] = x;
    }
    return cards;
}

var cardsInPlay = [];

var checkForMatch = function(){
	var currentScore = parseInt(document.getElementById('score').innerHTML, 10);
	if (cardsInPlay[0] === cardsInPlay[1]){
	alert('You found a match!');
	document.getElementById('score').innerHTML = currentScore += 1;
	} else {
	alert('Sorry, try again!');
}};

var flipCard = function(){ 
	var cardId = this.getAttribute('data-id');//returns a number equal to the [i] of the clicked card
	console.log('User flipped ' + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);//enters card rank into cardsInPlay array
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
	checkForMatch();
}};

var createBoard = function(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var clearBoard = function(){
	var imgNode = document.getElementById('game-board');
		while(imgNode.hasChildNodes()){
			imgNode.removeChild(imgNode.firstChild);
			cardsInPlay.pop();
		}
	}
	
var playAgain = function(){
	clearBoard();
	createBoard();
	shuffle(cards);
};
document.getElementsByTagName('button')[0].addEventListener('click', playAgain);
shuffle(cards);
createBoard();