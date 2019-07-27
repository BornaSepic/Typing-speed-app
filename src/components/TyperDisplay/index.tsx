import React, { useRef, useEffect, useState, Ref } from "react";
import * as Styled from "./style";

interface TyperDisplayProps {
  wordsToType: String[];
  typedWords: String[];
  lettersToType: String[];
  typedLetters: String[];
}

const TyperDisplay = (props: TyperDisplayProps): JSX.Element => {
  const [offsetWidth, setOffsetWidth] = useState(0);

  const ref: Ref<HTMLSpanElement> = useRef(null);
  useEffect(() => {
    console.log(offsetWidth, ref);
    if (!ref.current) {
      return;
    }
    setOffsetWidth(ref.current.getBoundingClientRect().width);
  });

  return (
    <Styled.TyperDisplayWrapper offsetWidth={offsetWidth}>
      <h3>
        <Styled.TypedWordsWrapper ref={ref}>
          {props.typedWords.join(" ")}
        </Styled.TypedWordsWrapper>
        <Styled.CurrentWordWrapper>
          {props.typedLetters}
          <Styled.LetterToTypeWrapper>
            {props.lettersToType}
          </Styled.LetterToTypeWrapper>
        </Styled.CurrentWordWrapper>
        {props.wordsToType.join(" ")}
      </h3>
    </Styled.TyperDisplayWrapper>
  );
};

export default TyperDisplay;
