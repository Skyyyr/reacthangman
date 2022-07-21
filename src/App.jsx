import { useState } from "react";
import "./App.css";
import Hangman from "./components/Hangman.jsx";
import PuzzleWord from "./components/PuzzleWord.jsx";
import GuessForm from "./components/GuessForm.jsx";
import IncorrectLetters from "./components/IncorrectLetters.jsx";
import words from "./data/words.json";

function App() {
  // states
  const [puzzle, setPuzzle] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);

  // event handlers
  const handleGuess = (guess) => {
    if (!guess.match(/[a-z]/i)) {
      return alert("Only letters, please! ");
    } else if (guessedLetters.includes(guess)) {
      return alert("You cannot guess the same letter again")
    }
    const updatedGuessedLetters = [...guessedLetters, guess];
    setGuessedLetters(updatedGuessedLetters);
    console.log("Guess letter count" + guessedLetters.length)
  };

  // other functions
  function getPuzzle() {
    const wordsLen = words.length;
    let randomWord = words[Math.floor(Math.random() * wordsLen)];
    setPuzzle(randomWord);
  }

  if (puzzle === "") {
    getPuzzle();
  }

  return (
    <div className="App">
      <Hangman word={puzzle} guessLetters={guessedLetters}/>
      <PuzzleWord word={puzzle} guessLetters={guessedLetters} />
      <br />
      <GuessForm clickFunction={handleGuess} />
      <IncorrectLetters word={puzzle} guessLetters={guessedLetters} />
    </div>
  );
}

export default App;
