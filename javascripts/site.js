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
