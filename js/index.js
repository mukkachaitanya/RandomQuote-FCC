var quotes = [
  {
  "content": "You can do anything, but not everything.",
  "author": "David Allen"
}, {
  "content": "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
  "author": "Antoine de Saint-Exupéry"
}, {
  "content": "The richest man is not he who has the most, but he who needs the least.",
  "author": "Unknown"
}, {
  "content": "You miss 100 percent of the shots you never take.",
  "author": "Wayne Gretzky"
}, {
  "content": "You must be the change you wish to see in the world.",
  "author": "Gandhi"
}, {
  "content": "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.",
  "author": "Lin-Chi"
}, {
  "content": "To the man who only has a hammer, everything he encounters begins to look like a nail.",
  "author": "Abraham Maslow"
}, {
  "content": "We are what we repeatedly do; excellence, then, is not an act but a habit.",
  "author": "Aristotle"
}, {
  "content": "A wise man gets more use from his enemies than a fool from his friends.",
  "author": "Baltasar Gracian"
}, {
  "content": "Do not seek to follow in the footsteps of the men of old; seek what they sought.",
  "author": "Basho"
}, {
  "content": "Even if you’re on the right track, you’ll get run over if you just sit there.",
  "author": "Will Rogers"
}];
var color = ["#006BA6", "0496FF", "#ffbc42", "#d81159", "8F2D56", "21A0A0", "E53D00", "FCFFF7", "#FF5964"];

var noOfQuotes = quotes.length;
var noOfColors = color.length;

function setColor() {
  var randomNo = Math.floor(Math.random() * (noOfColors ));
  $("body").css("background-color", color[randomNo]);
  $(".content").css("color", color[randomNo]);
}

function setQuote() {
  setColor();
  var randomNo = Math.floor(Math.random() * (noOfQuotes ));
  
  $("#quote").fadeOut(function(){
    $(this).html(quotes[randomNo].content).fadeIn();
  });
  
  $("#author").fadeOut(function(){
    $(this).html(quotes[randomNo].author).fadeIn();
  });
  
}

$("document").ready(function() {
  $("#more_quotes").on("click", setQuote);
});