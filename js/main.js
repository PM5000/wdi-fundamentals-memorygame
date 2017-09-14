console.log("Up and running!");

//(U8)Create an array cards. Strings should be "queen", "queen", "king", and "king"
//i(U10)Delete the four strings from the cards array.
//i(U10)In the cards array, create four objects, one for each card.
var cards = [{
    rank: "Queen",
    suit: "Hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "Queen",
    suit: "Diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "King",
    suit: "Hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "King",
    suit: "Diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
//(U8)Create an array cardsInPlay, & set its value to an empty array []
var cardsInPlay = [];
//iiii(U9) Right below the cardsInPlay array and right above the flipCard
//iiii(U9) function, create a function checkForMatch. This function will not have any parameters.
//iiii(U9)Move the following lines of code into the checkForMatch function.
checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
};

//i(U9) In your main.js file, after the lines with the cards and cardsInPlay arrays,
//i(U9) create a function flipCard.
//i(U9)The function should accept one parameter: cardId.
//ii(U9)Within the flipCard function, add a console.log()
//ii(U9)statement to display the card that was flipped over.
//ii(U10)In the flipCard function, find this console.log
//ii(U10)statement: console.log("User flipped " + cards[cardId]);
//ii(U10)Update the portion cards[cardId]. this code is accessing the entire
//ii(U10)first object in the cards array.
//ii(U10)update this code so that we are accessing the rank property of this object
//ii(U10)..Update this to cards[cardId].rank
var flipCard = function(cardId) {
  console.log("User Flipped" + cards[cardId].rank);
  // Add card to array of cards that are in play
  //iii(U10)update the cards[cardId] portion of cardsInPlay.push(cards[cardId]);.
  //iii(U10)You'll want to push the name of the card...
  //iii(U10)("queen" or "king") to the cardsInPlay array.
  //iii(U10)use the rank property like we did in the last step
  cardsInPlay.push(cards[cardId].rank);
  //iii(U10) Add two console.log() statements. One should log the cardImage
  //iii(U10)and the other should log the suit for the flipped card.
  console.log(cards[cardId].cardImage)
  console.log(cards[cardId].suit)
  //Leave or no? Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    //Leave or no? If so, call the checkForMatch function
    checkForMatch();
  }
};
//iii(U9)On the line after the flipCard function, call the flipCard function,
//iii(U9)passing in 0 as an argument.
flipCard(0);
//iii(U9)on the next line, call the flipCard function again, passing in 2 as an argument.
flipCard(2);

//i(U9) Move all the code that you wrote for the last unit's assignment, except for the
//i(U9) cards and cardsInPlay arrays into the flipCard function.


//(U8)Write an if statement that checks to see if the length of the cardsInPlay array is 2.
//(U8)For the condition, you can use the length property to find out how many items
//(U8)are in the cardsInPlay array and then use the === operator to see if the length
//(U8)is equal to 2.
//???if (cardsInPlay.length === 2) {
//(U8)Inside of the if statement you created in the last step, create an if...else
//(U8)statement that checks for equality between the two cards in the cardsInPlay array.
//(U8)For the condition, check to see if the first card in the cardsInPlay array
//(U8)(cardsInPlay[0]) is equal to the second card in the cardsInPlay array.
//????  if (cardsInPlay[0] === cardsInPlay[1]) {
//(U8)If values are equal, execute an alert with the message "You found a match!"
//???    alert("You found a match!");
//(U8)If values are not equal, execute an alert with the message "Sorry, try again."
//???  } else {
//???  alert("Sorry, try again.");
//???}
//???}
