'use strict';

var TEXT_COLOR = '#000000';
var TEXT_FONT = '16px PT Mono';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 170;
var CLOUD_Y = 10;
var GAP = 20;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var BAR_GAP = 50;
var startGraphPoint = CLOUD_Y + GAP + 4 * FONT_GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
}

var randomInteger = function(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP / 2, CLOUD_Y + GAP / 2, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#FFFFFF');

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура! Вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = (BAR_MAX_HEIGHT * times[i]) / maxTime;
    var startBarPoint = startGraphPoint + BAR_MAX_HEIGHT - barHeight;

    if (players[i] === 'Вы') {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      ctx.fillStyle = "hsl(244, " + randomInteger(0, 100) + "%, 47%)";
    }

    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, startBarPoint, BAR_WIDTH, barHeight);

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, startBarPoint + barHeight + FONT_GAP);
  }
};
