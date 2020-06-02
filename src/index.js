
const lengthOfLastWord = s => {
  const splitWords = s.trim().split(/[ ]+/);
  return splitWords[splitWords.length - 1].length || 0;
};

module.exports = lengthOfLastWord;