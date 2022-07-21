function PuzzleWord(prop) {
  let wordLen = prop.word.length;
  let puzzleText = [];

  for (let i = 0; i < wordLen; i++) {
    if (prop.guessLetters.includes(prop.word[i])) {
      puzzleText.push(prop.word[i]);
    } else puzzleText.push("_");
  }

  return (
    <div>
      <h1>{puzzleText.join(" ")}</h1>
    </div>
  );
}

export default PuzzleWord;
