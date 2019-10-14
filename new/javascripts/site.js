function bookSlider() {
  let range = document.querySelector('.slider--book');
  let rangeValue = range.value;
  let weightValue = document.querySelector('.book__weightheading');

  range.onchange = function() {
    rangeValue = range.value;
    weightValue.innerText = rangeValue;
    weightValue.style.fontWeight = rangeValue;
  };

  rangeValue = range.value;
  weightValue.innerText = rangeValue;
  weightValue.style.fontWeight = rangeValue;
}

function axisSlider() {
  let range = document.querySelector('.slider--page');
  let rangeValue = range.value;
  let weightValue = document.querySelector('.page__weightheading');

  range.onchange = function() {
    rangeValue = range.value;
    weightValue.innerText = rangeValue;
    weightValue.style.fontWeight = rangeValue;
  };

  rangeValue = range.value;
  weightValue.innerText = rangeValue;
  weightValue.style.fontWeight = rangeValue;
}

// function romanSlider() {
//   let range = document.querySelector('.slider--page');
//   let rangeValue = range.value;
//   let weightValue = document.querySelectorAll('.design__characters-roman');

//   range.onchange = weightValue.forEach(function(i) {
//     rangeValue = range.value;
//     console.log(rangeValue);
//   });

//   rangeValue = range.value;
//   weightValue = rangeValue;
// }

bookSlider();
axisSlider();
// romanSlider();
