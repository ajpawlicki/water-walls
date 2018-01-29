const getMaxWaterBlocks = heights => {
  if (!heights || heights.length < 3) throw new Error('Need an input array length of at least 3.');

  const leftMaxHeights = getLeftMaxHeights(heights);
  const rightMaxHeights = getRightMaxHeights(heights);

  let left = 0; right = heights.length - 1;
  let leftWaterBlocks = 0, rightWaterBlocks = 0, maxWaterBlocks = 0;

  while (left <= right) {
    if (heights[left] < leftMaxHeights[left]) {
      leftWaterBlocks += Math.min(leftMaxHeights[left], rightMaxHeights[left]) - heights[left];
    } else {
      if (leftWaterBlocks > maxWaterBlocks) {
        maxWaterBlocks = leftWaterBlocks;
      }
      
      leftWaterBlocks = 0;
    }

    if (left === right) break;

    if (heights[right] < rightMaxHeights[right]) {
      rightWaterBlocks += Math.min(leftMaxHeights[right], rightMaxHeights[right]) - heights[right];
    } else {
      if (rightWaterBlocks > maxWaterBlocks) {
        maxWaterBlocks = rightWaterBlocks;
      }
      
      rightWaterBlocks = 0;
    }

    left++;
    right--;
  }

  // calculate leftover left + right
  maxWaterBlocks = Math.max(leftWaterBlocks + rightWaterBlocks, maxWaterBlocks);

  return maxWaterBlocks;
};

const getLeftMaxHeights = heights => {
  const leftMaxHeights = [];
  let leftMaxHeight = 0;

  for (let i = 0; i < heights.length; i++) {
    leftMaxHeights[i] = leftMaxHeight;

    leftMaxHeight = Math.max(leftMaxHeight, heights[i]);
  }

  return leftMaxHeights;
};

const getRightMaxHeights = heights => {
  const rightMaxHeights = [];
  let rightMaxHeight = 0;

  for (let i = heights.length - 1; i >= 0; i--) {
    rightMaxHeights[i] = rightMaxHeight;

    rightMaxHeight = Math.max(rightMaxHeight, heights[i]);
  }

  return rightMaxHeights;
};

module.exports = getMaxWaterBlocks;

console.log(getMaxWaterBlocks([5, 3, 7, 2, 6, 6, 4, 5, 9, 1, 2])); // 12
console.log(getMaxWaterBlocks([5, 3, 7, 2, 6, 4, 5, 9, 1, 2])); // 11
