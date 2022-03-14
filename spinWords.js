const spinWords = (inputStr) => {
  //   split the string into array of word
  const wordsArray = inputStr.split(' ');

  const reversedWordArray = wordsArray.map((word) => {
    if (word.length >= 5) {
      // split word into array of letters then reverse position of all elements in the array
      const reversedLettersList = word.split('').reverse();
      // join letters together to form completed word
      const reversedWord = reversedLettersList.join('');
      return reversedWord;
    } else {
      return word;
    }
  });

  const newStr = reversedWordArray.join(' ');
  return newStr;
};

spinWords('Javascript is fucking hard to master');
