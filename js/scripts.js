//Bussiness Logic
var players = []
var switchArray = []

function Contest(names, score) {
  this.name= names;
  this.score = score;
  players.push(this);
}

Array.prototype.sum = function() {
  return this.reduce(function(a,b) {return a + b});
}

// User Interface logic
$(document).ready(function() {
  $("form#cont").submit(function(event) {
    event.preventDefault();
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    var player1 = new Contest(name1, 0);
    var player2 = new Contest(name2, 0);
    $("#pshow1").text(players[0].name + "'s turn").show();
    contestShow();
    $("form").hide();
    $(".play").show();
  });

  $("#roll").click(function(event) {
    event.preventDefault();
    $("#result").show();
    $(".turnTotal").show();
    var random= (Math.floor(Math.random() * 6)+1);
    $("#result").text(random);
    if (random >= 2) {
      switchArray.push(random);
      $("#turnTotal").text(switchArray.sum());
    } else {
      switchP();
    }
  });

  $("#endTurn").click(function(event){
    change();
    if (players[0].score >= 100){
      var win=(players[0].name + " wins! with a score of: " + switchArray.sum());
      alert(win)
      document.location.reload(true)
    } else if (players[1].score >= 100) {
      alert(players[1].name + " wins with a score of: " + switchArray.sum());
      document.location.reload(true);
  }
  });

  function contestShow() {
    $("#name1").text(players[0].name);
    $("#name2").text(players[1].name);
    $("#total1").text(players[0].score);
    $("#total2").text(players[1].score);
  };

  function switchP() {
      if ($("#pshow1").is(":visible")) {
        switchArray = [0];
        $("#turnTotal").text(switchArray);
        setTimeout(function() {alert("Oops! You rolled 1"); }, 50 );
        $("#roll1").hide();
        setTimeout(function() {$("#pshow2").text(players[1].name + "'s turn").show();}, 100 );
        $("#pshow1").hide();
        contestShow();
          }
      else if ($("#pshow2").is(":visible")){
        switchArray = [0];
        $("#turnTotal").text(switchArray);
        setTimeout(function() { alert("Oops! You rolled 1"); }, 50 );
        setTimeout(function() {$("#pshow1").text(players[0].name + "'s turn").show();}, 100 );
        $("#roll1").show();
        $("#pshow2").hide();
        contestShow();
      }
    };
  function change() {
    if ($("#pshow1").is(":visible")) {
      players[0].score = (players[0].score += switchArray.sum());
      switchArray = [0];
      $("#turnTotal").text(switchArray)
      $("#pshow1").hide();
      $("#pshow2").text(players[1].name + "'s turn").show();
      console.log(players[0].score);
      contestShow();
    } else {
      players[1].score = (players[1].score += switchArray.sum());
      switchArray = [0];
      $("#turnTotal").text(switchArray)
      $("#pshow1").hide();
      $("#pshow2").text(players[0].name + "'s turn").show();
      contestShow();
      console.log(players[1].score);
      }
    }
});
