window.onload = () => {
  const formEl = document.querySelector('.water-walls-form');
  const gridEl = document.querySelector('.grid-container');
  const formInputEl = document.getElementById('form-input');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputString = formInputEl.value;
    
    if (inputString.trim().length > 0 && isValidInput(inputString)) {
      const heights = convertInputStringToHeightsArray(inputString);

      if (heights.length <= 40 && checkHeightsLimit(heights, 100)) {
        fetchWaterWalls(heights, gridEl);
      } else {
        console.error('Input is too large. Please try smaller or less integers.');
      }

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

const checkHeightsLimit = (heights, limit) => {
  for (let height of heights) {
    if (height > limit) return false;
  }

  return true;
};

const emptyElement = el => {
  while (el.firstElementChild) {
    el.firstElementChild.remove();
  }
};

const fetchWaterWalls = (heights, gridEl) => {
  fetch(`fetchWaterWalls?heights=${JSON.stringify(heights)}`)
  .then(res => res.json())
  .then(data => {
    renderWaterWalls(data, gridEl);
  })
  .catch(err => console.error(err));
};

const renderWaterWalls = (waterWalls, gridEl) => {
  emptyElement(gridEl);

  for (let wallData of waterWalls) {
    const { height, water, isLeftWall, isRightWall } = wallData;
    
    const colEl = document.createElement('div');
    colEl.classList.add('grid-col');

    for (let i = 0; i < height; i++) {
      const wallEl = document.createElement('div');
      wallEl.classList.add('grid-block');

      if (isLeftWall || isRightWall) {
        wallEl.classList.add('black-wall-block');
      } else {
        wallEl.classList.add('gray-wall-block');
      }

      colEl.appendChild(wallEl);
    }

    for (let i = 0; i < water; i++) {
      const waterEl = document.createElement('div');
      waterEl.classList.add('grid-block', 'water-block');
      
      colEl.appendChild(waterEl);      
    }

    gridEl.appendChild(colEl);
  }
};
