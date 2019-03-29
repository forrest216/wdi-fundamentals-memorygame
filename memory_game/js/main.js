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

var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
	alert('You found a match!');
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

var playAgain = function(){
	location.reload();
};

document.getElementsByTagName('button')[0].addEventListener('click', playAgain);

createBoard();

/*var cardOne = cards[0];
	var cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);*/
//if (cardsInPlay.length === 2){

//cardElement.innerHTML = 'src=' + cards[i].cardImage + ' alt=' + cards[i].rank + " of " + cards[i].suit;	