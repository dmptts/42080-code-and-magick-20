'use strict';

var setup = document.querySelector('.setup');

setup.classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomArrIndex = function (arrLength) {
  return Math.floor(Math.random() * arrLength);
};

var createWizards = function (wizardsQuantity) {
  var wizards = [];

  for (var i = 0; i <= wizardsQuantity - 1; i++) {
    wizards[i] = {
      name: wizardNames[getRandomArrIndex(wizardNames.length)] + ' ' + wizardSurnames[getRandomArrIndex(wizardSurnames.length)],
      coatColor: wizardCoatColors[getRandomArrIndex(wizardCoatColors.length)],
      eyesColor: wizardEyesColors[getRandomArrIndex(wizardEyesColors.length)]
    };
  }

  return wizards;
};

createWizards(4);
