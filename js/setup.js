document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var randomArrayElement = function(array) {
  var randomElement = Math.floor(Math.random() * array.length);
  return randomElement;
}

var randomWizard = function() {
  var firstNameRand = randomArrayElement(WIZARD_FIRST_NAMES);
  var lastNameRand = randomArrayElement(WIZARD_LAST_NAMES);
  var coatColorRand = randomArrayElement(WIZARD_COAT_COLORS);
  var eyesColorRand = randomArrayElement(WIZARD_EYES_COLORS);

  var fullName = WIZARD_FIRST_NAMES[firstNameRand] + " " + WIZARD_LAST_NAMES[lastNameRand];

  var newWizard = {
    wizardName: fullName,
    coatColor: WIZARD_COAT_COLORS[coatColorRand],
    eyesColor: WIZARD_EYES_COLORS[eyesColorRand]
  }

  WIZARD_FIRST_NAMES.splice(firstNameRand, 1);
  WIZARD_LAST_NAMES.splice(lastNameRand, 1);
  WIZARD_COAT_COLORS.splice(coatColorRand, 1);
  WIZARD_EYES_COLORS.splice(eyesColorRand, 1);

  return newWizard;
}

var addWizard = function() {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var newWizard = randomWizard();

    wizardElement.querySelector('.setup-similar-label').textContent = newWizard.wizardName;
    wizardElement.querySelector('.wizard-coat').style.fill = newWizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = newWizard.eyesColor;

    similarListElement.appendChild(wizardElement);
  }
}

addWizard();
