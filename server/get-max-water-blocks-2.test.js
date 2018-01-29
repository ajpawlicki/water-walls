const getMaxWaterBlocks = require('./get-max-water-blocks-2');

describe('Testing linear implementation of getMaxWaterBlocks', () => {
  
  xdescribe('getMaxWaterBlocks', () => {
    it('Throws an error if input array is undefined or input array length is less than 3', () => {
      expect(() => getMaxWaterBlocks()).toThrow();
      expect(() => getMaxWaterBlocks([0,0])).toThrow('Need an input array length of at least 3.');
    });

    it('Returns an array with length 3', () => {
      const maxWaterBlocks = getMaxWaterBlocks([1,2,3]);

      expect( Array.isArray(maxWaterBlocks) ).toBeTruthy();
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
