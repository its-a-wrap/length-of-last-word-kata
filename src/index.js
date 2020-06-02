
const lengthOfLastWord = s => {
  if (!s) return 0;
  const splitWords = s.trim().split(/[ ]+/);
  return splitWords[splitWords.length - 1].length;
};

module.exports = lengthOfLastWord;