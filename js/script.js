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
player1.on("click touchstart", function (event) {
  event.stopPropagation();
  event.preventDefault();
  addScore(player1Value);
});
player2.on("click touchstart", function (event) {
  event.stopPropagation();
  event.preventDefault();
  addScore(player2Value);
});
reset.on("click touchstart", function (event) {
  event.stopPropagation();
  event.preventDefault();
  if (confirm("Es-tu sur de vouloir reset ?")) {
    init();
  }
});