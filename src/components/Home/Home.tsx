import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_WORDS } from "../../queries";
import KeyboardContainer from "../KeyboardContainer/KeyboardContainer";
import PhoneScreen from "../PhoneScreen/PhoneScreen";

const Home = () => {
  const [digits, setDigits] = useState<string>("");
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
    "#": ["C"],
  };

  const { loading, error, data } = useQuery(GET_WORDS, {
    variables: { digits: Number(digits) },
  });

  const handleNumberClick = (digit: string) => {
    if (notValidKey(digit)) return;
    hashKeyClicked(digit) ? setDigits("") : setDigits(digits + digit);
  };

  const hashKeyClicked = (digit: string): boolean => {
    return digit === "#";
  };

  const notValidKey = (digit: string): boolean => {
    return digit === "1" || digit === "*" || digit === "0";
  };

  return (
    <>
      {loading ? (
        <span> &nbsp;</span>
      ) : error ? (
        <h1>An has occurred!</h1>
      ) : (
        <>
          <PhoneScreen data={data} />
        </>
      )}
      <KeyboardContainer
        keysMap={keysMap}
        handleNumberClick={handleNumberClick}
      />
    </>
  );
};

export default Home;
