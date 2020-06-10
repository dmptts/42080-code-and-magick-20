'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
var wizardsData = [];
var similarWizardList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var getRandomArrIndex = function (arrLength) {
  return Math.floor(Math.random() * arrLength);
};

var generateWizardData = function () {
  return {
    name: WIZARD_NAMES[getRandomArrIndex(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomArrIndex(WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COAT_COLORS[getRandomArrIndex(WIZARD_COAT_COLORS.length)],
    eyesColor: WIZARD_EYES_COLORS[getRandomArrIndex(WIZARD_EYES_COLORS.length)]
  };
};

var generateWizardsArr = function (wizardsQuantity) {
  for (var i = 0; i < wizardsQuantity; i++) {
    wizardsData[i] = generateWizardData();
  }
};

var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizardsQuantity) {
  generateWizardsArr(wizardsQuantity);

  for (var i = 0; i < wizardsQuantity; i++) {
    fragment.appendChild(createWizard(wizardsData[i]));
  }

  similarWizardList.appendChild(fragment);
};

setup.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

renderWizards(4);
