var minifigure = document.querySelector('.minifigure');
var faces = document.querySelector('.faces');
var upperBody = document.querySelector('.upper-body');
var lowerBody = document.querySelector('.lower-body');
var explode = document.querySelector('.explode');
var randomize = document.querySelector('.randomize');
var expressionRangeInput = document.querySelector('.expression-range');
var colorRangeInput = document.querySelectorAll('.color-range');
var upperHue = document.getElementById('upper-hue');
var upperSaturation = document.getElementById('upper-saturation');
var upperLightness = document.getElementById('upper-lightness');
var lowerHue = document.getElementById('lower-hue');
var lowerSaturation = document.getElementById('lower-saturation');
var lowerLightness = document.getElementById('lower-lightness');

function addEventListeners() {
  explode.addEventListener('click', explodeMinifigure);
  explode.addEventListener('touchstart', explodeMinifigure);
  randomize.addEventListener('click', randomizeInputs);
  randomize.addEventListener('touchstart', randomizeInputs);
  expressionRangeInput.addEventListener('input', setExpression);
  expressionRangeInput.addEventListener('touchstart', setExpression);

  for (var i = 0; i < colorRangeInput.length; i++) {
    colorRangeInput[i].addEventListener('input', setColors);
    colorRangeInput[i].addEventListener('touchstart', setColors);
  }
}

addEventListeners();

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function explodeMinifigure(event) {
  event.preventDefault(); // Prevent default behavior
  console.log('explodeMinifigure called');
  minifigure.classList.toggle('explode');

  if (minifigure.classList.contains('explode')) {
    explode.innerHTML = 'Rebuild';
  } else {
    explode.innerHTML = 'Explode';
  }
}

function randomizeInputs(event) {
  event.preventDefault(); // Prevent default behavior
  console.log('randomizeInputs called');
  var randomExpression = getRandomNum(0, 5);
  var randomUpperHue = getRandomNum(0, 360);
  var randomUpperSaturation = getRandomNum(0, 100);
  var randomUpperLightness = getRandomNum(0, 90);
  var randomLowerHue = getRandomNum(0, 360);
  var randomLowerSaturation = getRandomNum(0, 100);
  var randomLowerLightness = getRandomNum(0, 90);

  expressionRangeInput.value = randomExpression * 100;
  upperHue.value = randomUpperHue;
  upperSaturation.value = randomUpperSaturation;
  upperLightness.value = randomUpperLightness;
  lowerHue.value = randomLowerHue;
  lowerSaturation.value = randomLowerSaturation;
  lowerLightness.value = randomLowerLightness;

  setExpression();
  setColors();
}

function setExpression(event) {
  console.log('setExpression called');
  var expressionVal = parseInt(expressionRangeInput.value);
  faces.style.transform = 'translateX(-' + expressionVal + '%)';
}

function setColors(event) {
  console.log('setColors called');
  var upperHueVal = parseInt(upperHue.value);
  var upperSaturationVal = parseInt(upperSaturation.value);
  var upperLightnessVal = parseInt(upperLightness.value);
  var lowerHueVal = parseInt(lowerHue.value);
  var lowerSaturationVal = parseInt(lowerSaturation.value);
  var lowerLightnessVal = parseInt(lowerLightness.value);

  upperBody.style.color = 'hsl(' + upperHueVal + ',' + upperSaturationVal + '%,' + upperLightnessVal + '%)';
  lowerBody.style.color = 'hsl(' + lowerHueVal + ',' + lowerSaturationVal + '%,' + lowerLightnessVal + '%)';
}
