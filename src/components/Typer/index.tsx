import React, { useEffect, useState } from "react";
import TyperDisplay from "../TyperDisplay";

const Typer = (): JSX.Element => {
  const [words, setWords] = useState<String[]>([
    "Koala",
    "Horse",
    "Duck",
    "Penguin",
    "Cat on a roof",
    "Dogs",
    "Koala",
    "Horse",
    "Duck",
    "Penguin",
    "Cat on a roof",
    "Dogs",
    "Koala",
    "Horse",
    "Duck",
    "Penguin",
    "Cat on a roof",
    "Dogs",
  ]);
  const [typedWords, setTypedWords] = useState<String[]>([]);
  const [typedLetters, setTypedLetters] = useState<String[]>([]);

  const [lettersToType, setLettersToType] = useState<String[]>(() => {
    setWords(words.slice(1));
    return words[0].split("");
  });

  const pressedKey = useKeyPress();

  if (pressedKey === lettersToType[0]) {
    setTypedLetters([...typedLetters, lettersToType[0]]);
    setLettersToType([...lettersToType.slice(1)]);
  }

  if (lettersToType.length === 0) {
    setTypedWords([...typedWords, typedLetters.join("")]);
    setWords([...words.slice(1)]);
    setTypedLetters([]);
    setLettersToType(words[0].split(""));
  }

  return (
    <>
      <TyperDisplay 
        wordsToType={words}
        typedWords={typedWords}
        lettersToType={lettersToType}
        typedLetters={typedLetters}
      />
    </>
  );
};

function useKeyPress() {
  const [pressedKey, setPressedKey] = useState("");

  const keyPressHandeler = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  useEffect(() => {
    window.addEventListener("keypress", keyPressHandeler);
    return () => {
      window.removeEventListener("keypress", keyPressHandeler);
    };
  });

  return pressedKey;
}

export default Typer;
