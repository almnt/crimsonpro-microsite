var guiOne = new dat.GUI({ autoPlace: false });
var guiTwo = new dat.GUI({ autoPlace: false });
var guiThree = new dat.GUI({ autoPlace: false });
var guiFour = new dat.GUI({ autoPlace: false });
var guiFive = new dat.GUI({ autoPlace: false });

var customContainerOne = document.querySelector('.gui-wrapper__one');
var customContainerTwo = document.querySelector('.gui-wrapper__two');
var customContainerThree = document.querySelector('.gui-wrapper__three');
var customContainerFour = document.querySelector('.gui-wrapper__four');
var customContainerFive = document.querySelector('.gui-wrapper__five');

customContainerOne.appendChild(guiOne.domElement);
customContainerTwo.appendChild(guiTwo.domElement);
customContainerThree.appendChild(guiThree.domElement);
customContainerFour.appendChild(guiFour.domElement);
customContainerFive.appendChild(guiFive.domElement);

// gui.add('test', 'yay', 0, 10);

function sliderMagic(rangeClass, characterClass, addInnerText) {
  let range = document.querySelector(rangeClass);
  let rangeValue = range.value;
  let characters = document.querySelectorAll(characterClass);

   updateCharacters(rangeValue, characters, addInnerText);

  range.addEventListener('input', function() {
    rangeValue = range.value;
    updateCharacters(rangeValue, characters, addInnerText)
  });
}

function updateCharacters(rangeValue, characters, addInnerText) {
  characters.forEach(function (item, index) {
  if (addInnerText) {
    item.innerText = rangeValue;
  }

  item.style.fontVariationSettings = "'wght'" + rangeValue;
  });
}

sliderMagic('.slider--book', '.book__weightheading', true);
sliderMagic('.slider--page', '.page__weightheading', true);
sliderMagic('.slider--sample-one', '.design__characters-roman-one');
sliderMagic('.slider--sample-two', '.design__characters-roman-two');
sliderMagic('.slider--sample-three', '.design__characters-italic-three');
sliderMagic('.slider--sample-four', '.design__characters-italic-four');
