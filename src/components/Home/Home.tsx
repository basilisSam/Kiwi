import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_WORDS } from "../../queries";
import { getWords } from "../../service/phoneWords";
import KeyboardContainer from "../KeyboardContainer/KeyboardContainer";
import PhoneScreen from "../PhoneScreen/PhoneScreen";

const Home = () => {
  const keysMap: any = {
    "1": ["📞"],
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
    "*": ["+"],
    "0": ["_"],
    "#": ["⬆"],
  };

  const { loading, error, data } = useQuery(GET_WORDS, {
    variables: { digits: 23 },
  });

  const handleNumberClick = (letters: any) => {
    getWords(letters);
  };

  return (
    <>
      <PhoneScreen />
      <KeyboardContainer
        keysMap={keysMap}
        handleNumberClick={handleNumberClick}
      />
    </>
  );
};

export default Home;
