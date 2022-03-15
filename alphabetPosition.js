const alphabetPosition = (inputStr) => {
  // convert to lowercase
  const lowercasedInput = inputStr.toLowerCase();
  // create an array for all alphabet letters. The position of each one will be their index + 1
  const alphabetLettersList = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  // break the string into an array of letters
  const inputLettersList = lowercasedInput.split('');

  // loop though input letter array
  let positionValuesList = inputLettersList.map((letter) => {
    // if the element is in the alphabet letters list
    if (alphabetLettersList.includes(letter)) {
      // replace it with its positions value in the alphabet
      return alphabetLettersList.indexOf(letter) + 1;
    } else {
      // return 0 for now
      return 0;
    }
  });

  // filter out 0 in the position array
  positionValuesList = positionValuesList.filter((value) => value != 0);

  // convert to the array to string and return it
};

alphabetPosition('i am sam');
