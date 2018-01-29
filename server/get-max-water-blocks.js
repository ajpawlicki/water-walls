const getMaxWaterBlocks = heights => {
  if (!heights || heights.length < 3) throw new Error('Need an input array length of at least 3.');
  
  let leftWall = 0;
  let rightWall = 0;
  let maxLeftWall = 0;
  let maxWaterBlocks = 0;
  let currentWaterBlocks = 0

  const waterBlocks = getWaterBlocks(heights);

  for (let i = 0; i < waterBlocks.length; i++) {
    if (waterBlocks[i] === 0) {
      if (currentWaterBlocks > maxWaterBlocks) {
        maxWaterBlocks = currentWaterBlocks;
        rightWall = i + 1;
        maxLeftWall = leftWall;
      }

      currentWaterBlocks = 0;
      leftWall = i + 1;
    } else {
      currentWaterBlocks += waterBlocks[i];
    }
  }

  return [ maxLeftWall, rightWall, maxWaterBlocks ];
};

const getWaterBlocks = heights => {
  const waterBlocks = [];
  let leftMaxHeight = 0;
  const rightMaxHeights = getRightMaxHeights(heights);

  for (let i = 0; i < heights.length; i++) {
    const minOfHeights = Math.min(leftMaxHeight, rightMaxHeights[i]);
    
    waterBlocks[i] = Math.max(0, minOfHeights - heights[i]);

    leftMaxHeight = Math.max(leftMaxHeight, heights[i]);
  }

  return waterBlocks;
};

const getRightMaxHeight = (heights, start) => {
  if (start >= heights.length) return 0;

  let rightMaxHeight = heights[start];
  
  for (let i = start + 1; i < heights.length; i++) {
    rightMaxHeight = Math.max(heights[i], rightMaxHeight);
  }

  return rightMaxHeight;
};

const getRightMaxHeights = heights => {
  const rightMaxHeights = [];
  let rightMaxHeight = 0;

  for (let i = heights.length - 1; i >= 0; i--) {
    rightMaxHeights[i] = rightMaxHeight;
    
    rightMaxHeight = Math.max(rightMaxHeight, heights[i]);
  }

  return rightMaxHeights;
}

module.exports = {
  getRightMaxHeight,
  getRightMaxHeights,
  getMaxWaterBlocks,
  getWaterBlocks
};
