function Dice(side) {
  this.play1=side;
  this.play2=side;
  this.play=function () {
    return Math.floor(Math.random() * this.play1) + 1;
    return Math.floor(Math.random() * this.play2) + 1;
  }
};

function Player(score) {
  var player1=document.getElementById('player1')
  player1.innerHTML = score;
};

function Player2(score) {
  var player1=document.getElementById('player1')
  player2.innerHTML = score;
};

var scored = new Dice(6);

var button =document.getElementById('button')
button.onclick = function() {
  var result = scored.play();
  var result2 = scored.play();
  Player("Score: "+result)
  Player2("Score: "+result2)
}
