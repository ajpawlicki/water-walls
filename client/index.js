window.onload = () => {
  const formEl = document.querySelector('.water-walls-form');
  const gridEl = document.querySelector('.grid-container');
  const formInputEl = document.getElementById('form-input');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputString = formInputEl.value;
    
    if (inputString.trim().length > 0 && isValidInput(inputString)) {
      const heights = convertInputStringToHeightsArray(inputString);

      renderHeights(heights, gridEl);
    } else {
      console.error('Please input comma separated list of integers.');
    }
  });
};

const isValidInput = str => {
  const validChars = '0123456789, ';

  for (let char of str) {
    if (validChars.indexOf(char) === -1) return false;
  }

  return true;
};

const convertInputStringToHeightsArray = inputString => {
  return inputString
    .split(',')
    .map(item => +item)
    .filter(num => !Number.isNaN(num));
};

const emptyElement = el => {
  while (el.firstElementChild) {
    el.firstElementChild.remove();
  }
};

const renderHeights = (heights, gridEl) => {
  emptyElement(gridEl);

  for (let height of heights) {
    const colEl = document.createElement('div');
    colEl.classList.add('grid-col');

    for (let i = 0; i < height; i++) {
      const wallEl = document.createElement('div');
      wallEl.classList.add('grid-block', 'grid-wall-block');

      colEl.appendChild(wallEl);
    }

    const waterEl = document.createElement('div');
    waterEl.classList.add('grid-block', 'grid-water-block');
    colEl.appendChild(waterEl);

    gridEl.appendChild(colEl);
  }
};

const fetchWaterBlocks = heights => {

};

const renderWaterBlocks = heights => {

};
