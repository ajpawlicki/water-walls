# water-walls
Find the max number of water blocks between two walls.

## Setup

### Strategy
While iterating through heights, find max height to the left and max height to the right at each iteration. The number of water blocks at that point is the min of the max left and max right less the current height if greater than zero. Find the largest number of consecutive water blocks.

### Input
`[3, 1, 2, 7, 4, 6]`

### Output
`[1, 4, 3]`

### Transformation steps
* At `heights[0]`, no max to the left => `waterBlocks[0] = 0`
* At `heights[1]`, left max = 3, right max = 7 => `waterBlocks[1] = 3 - heights[1] = 3 - 1 = 2`
* At `heights[2]`, left max = 3, right max = 7 => `waterBlocks[2] = 3 - heights[2] = 3 - 2 = 1`
* At `heights[3]`, left max = 3, right max = 6 => `waterBlocks[3] = 3 - heights[3] = 3 - 7 = -4 = 0`
* At `heights[4]`, left max = 7, right max = 6 => `waterBlocks[4] = 6 - heights[4] = 6 - 4 = 2`
* At `heights[5]`, no max to the right => `waterBlocks[5] = 0`
* Iterate through waterBlocks array and find maxBlocks, leftWall, and rightWall

### Time complexity
0(n^2)
