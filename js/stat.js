/* eslint-disable no-unused-expressions */
'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_PADDING = 55;
var CLOUD_GAP = 10;
var HEADING_HEIGHT = 85;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomSaturation = function () {
  return 'hsl(240, ' + Math.floor(Math.random() * Math.floor(101)) + '%, 50%)';
};

var getBarColor = function (value) {
  return value === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomSaturation();
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_PADDING, 30);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_PADDING, 50);

  var maxTime = getMaxElement(times);

  var renderBar = function (index) {
    var barX = CLOUD_X + CLOUD_PADDING + (BAR_WIDTH + BAR_GAP) * index;

    ctx.fillRect(barX, CLOUD_Y + HEADING_HEIGHT + BAR_MAX_HEIGHT - ((BAR_MAX_HEIGHT * times[index]) / maxTime), BAR_WIDTH, (BAR_MAX_HEIGHT * times[index]) / maxTime);

    ctx.fillStyle = '#000';

    ctx.fillText(players[index], barX, CLOUD_Y + HEADING_HEIGHT + BAR_MAX_HEIGHT + 5);

    ctx.fillText(Math.floor(times[index]), barX, CLOUD_Y + HEADING_HEIGHT + BAR_MAX_HEIGHT - ((BAR_MAX_HEIGHT * times[i]) / maxTime) - 20);
  };

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = getBarColor(players[i]);
    renderBar(i);
  }
};
