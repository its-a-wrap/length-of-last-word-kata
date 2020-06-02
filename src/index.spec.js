const { expect } = require('chai');
const lengthOfLastWord = require('./index');

describe('GIVEN lengthOfLastWord function', () => {
  describe('AND the input string is empty', () => {
    it('SHOULD return 0 if no last word exists', () => {
      const output = lengthOfLastWord('');
      expect(output).to.be.eql(0);
    });
  });

  describe('AND and the input string contains word(s)', () => {
    it('SHOULD return the length of the last word in the string', () => {
      const output = lengthOfLastWord('The cat jumped over the fox');
      expect(output).to.be.eql(3);
    });
  });

  describe('AND one word with trailing whitespace is given as the input', () => {
    it('SHOULD return the length of the word', () => {
      const output = lengthOfLastWord('a ');
      expect(output).to.be.eql(1);
    })
  });
});
