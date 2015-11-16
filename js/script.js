'use strict';

var player1 = $("#player1");
var player2 = $("#player2");
var player1Value = $("#player1-value");
var player2Value = $("#player2-value");

var init = function () {
  player1Value.html("0");
  player2Value.html("0");
};
init();
var reset = $("#reset");
var addScore = function (player) {
  player.html(parseInt(player.html()) + 1);
};
player1.on("click", function () {
  addScore(player1Value);
});
player2.on("click", function () {
  addScore(player2Value);
});
reset.on("click", function () {
  if (confirm("Es-tu sur de vouloir reset ?")) {
    init();
  }
});