const getMaxWaterBlocks = heights => {  
  let leftWall = 0;
  let rightWall = null;
  let maxLeftWall = null;
  let maxWaterBlocks = 0;
  let currentWaterBlocks = 0

  const waterBlocks = getWaterBlocks(heights);

  for (let i = 0; i < waterBlocks.length; i++) {
    if (waterBlocks[i] === 0) {
      if (currentWaterBlocks > maxWaterBlocks) {
        maxWaterBlocks = currentWaterBlocks;
        rightWall = i;
        maxLeftWall = leftWall;
      }

      currentWaterBlocks = 0;
      leftWall = i;
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
  getRightMaxHeights,
  getMaxWaterBlocks,
  getWaterBlocks
};
