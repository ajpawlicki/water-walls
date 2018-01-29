const express = require('express');
const app = express();

const { getWaterBlocks, getMaxWaterBlocks } = require('./get-max-water-blocks');

app.use(express.static(__dirname + '/../client/'));

app.get('/fetchWaterWalls', (req, res) => {
  let { heights } = req.query;
  heights = JSON.parse(heights);

  const waterBlocks = getWaterBlocks(heights);
  const [ leftWall, rightWall, maxWaterBlocks ] = getMaxWaterBlocks(heights);

  const waterWalls = heights.map((height, index) => {
    return {
      height: height,
      water: waterBlocks[index]
    };
  });

  if (leftWall !== null) waterWalls[leftWall].isLeftWall = true;
  if (rightWall !== null) waterWalls[rightWall].isRightWall = true;

  res.send(waterWalls);
});

app.listen(7000, () => console.log('Listening on port 7000.'));
