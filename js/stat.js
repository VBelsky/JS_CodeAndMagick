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

var renderCloudHead = function (ctx) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_FONT;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, GAP + 2 * FONT_GAP);
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  arr.forEach(function(arrElement) {
    if (arrElement > maxElement) {
      maxElement = arrElement;
    }
  });

  return maxElement;
}

var randomInteger = function(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var getRandomColor = function(min, max) {
  var randomBlue = "hsl(244, " + randomInteger(min, max) + "%, 47%)";
  return randomBlue;
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP / 2, CLOUD_Y + GAP / 2, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#FFFFFF');
  renderCloudHead(ctx);

  var maxTime = getMaxElement(times);

  players.forEach(function(player, id) {
    var barHeight = (BAR_MAX_HEIGHT * times[id]) / maxTime;
    var startBarPointX = CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * id;
    var startBarPointY = startGraphPoint + BAR_MAX_HEIGHT - barHeight;
    var startCaptionPointY = startBarPointY + barHeight + FONT_GAP;

    if (player === 'Вы') {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      ctx.fillStyle = getRandomColor(0, 100);
    }

    ctx.fillRect(startBarPointX, startBarPointY, BAR_WIDTH, barHeight);

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(player, startBarPointX, startCaptionPointY);
  });
}
