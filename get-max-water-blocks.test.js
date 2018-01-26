const { getRightMaxHeight, getWaterBlocks, getMaxWaterBlocks } = require('./get-max-water-blocks');

describe('Testing getMaxWaterBlocks logic and helper functions', () => {
  
  describe('getRightMaxHeight', () => {
    it('Returns 0 if start index is equal to or greater than input array length', () => {
      expect(getRightMaxHeight([], 0)).toBe(0);
      expect(getRightMaxHeight([1], 1)).toBe(0);
      expect(getRightMaxHeight([1], 10)).toBe(0);
    });

    it('Finds max height to the right in an array in ascending order', () => {
      expect(getRightMaxHeight([1,2,3,4,5], 0)).toBe(5);
      expect(getRightMaxHeight([1,2,3,4,5], 1)).toBe(5);
      expect(getRightMaxHeight([1,2,3,4,5], 2)).toBe(5);
      expect(getRightMaxHeight([1,2,3,4,5], 3)).toBe(5);
      expect(getRightMaxHeight([1,2,3,4,5], 4)).toBe(5);
    });

    it('Finds max height to the right in an array in descending order', () => {
      expect(getRightMaxHeight([5,4,3,2,1], 0)).toBe(5);
      expect(getRightMaxHeight([5,4,3,2,1], 1)).toBe(4);
      expect(getRightMaxHeight([5,4,3,2,1], 2)).toBe(3);
      expect(getRightMaxHeight([5,4,3,2,1], 3)).toBe(2);
      expect(getRightMaxHeight([5,4,3,2,1], 4)).toBe(1);
    });
  });

  describe('getWaterBlocks', () => {
    it('Returns an array', () => {
      expect(Array.isArray( getWaterBlocks([1,2,3,4]) )).toBeTruthy();
    });

    it('Has zeroes at zeroth and last index', () => {
      const waterBlocks = getWaterBlocks([1,2,3,4]);

      expect(waterBlocks[0]).toBe(0);
      expect(waterBlocks[waterBlocks.length - 1]).toBe(0);
    });

    it('Has all zeroes in an ascending array', () => {
      const waterBlocks = getWaterBlocks([1,2,3,4]);
      const expected = [0,0,0,0];

      expect(waterBlocks).toEqual(expected);
    });

    it('Has all zeroes in a descending array', () => {
      const waterBlocks = getWaterBlocks([4,3,2,1]);
      const expected = [0,0,0,0];

      expect(waterBlocks).toEqual(expected);
    });

    it('Correctly gets water blocks from an input array of alternating heights', () => {
      const waterBlocks = getWaterBlocks([2,1,2,1,2]);
      const expected = [0,1,0,1,0];

      expect(waterBlocks).toEqual(expected);
    });

    it('Correctly gets water blocks from an input array of random heights', () => {
      const waterBlocks = getWaterBlocks([5,1,2,8]);
      const expected = [0,4,3,0];

      expect(waterBlocks).toEqual(expected);
    });
  });

  describe('getMaxWaterBlocks', () => {
    it('Throws an error if input array is undefined or input array length is less than 3', () => {
      expect(() => getMaxWaterBlocks()).toThrow();
      expect(() => getMaxWaterBlocks([0,0])).toThrow('Need an input array length of at least 3.');
    });

    it('Returns an array with length 3', () => {
      const maxWaterBlocks = getMaxWaterBlocks([1,2,3]);

      expect(maxWaterBlocks).toHaveLength(3);
    });

    it('Returns an array with all zeroes for an input array with no water blocks', () => {
      const maxWaterBlocks = getMaxWaterBlocks([1,2,3]);
      const maxWaterBlocks2 = getMaxWaterBlocks([0,0,0]);
      const expected = [0,0,0];


      expect(maxWaterBlocks).toEqual(expected);
      expect(maxWaterBlocks2).toEqual(expected);
    });

    it('Gets the correct number of max water blocks from an input array of random heights', () => {
      const maxWaterBlocks = getMaxWaterBlocks([3,1,2,7,4,6]);
      const expected = [1,4,3];

      expect(maxWaterBlocks).toEqual(expected);
    });

    it('Gets the correct number of max water blocks from a longer input array of random heights', () => {
      const maxWaterBlocks = getMaxWaterBlocks([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]);
      const expected = [3,8,11];
      
      expect(maxWaterBlocks).toEqual(expected);
    });

  });

});
