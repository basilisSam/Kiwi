import { useQuery } from "@apollo/client";
import {
  Box,
  defaultTheme, Layout,
  LayoutColumn,
  Loading
} from "@kiwicom/orbit-components";
import { useState } from "react";
import { GET_WORDS } from "../../queries";
import KeyboardContainer from "../KeyboardContainer/KeyboardContainer";
import PhoneScreen from "../PhoneScreen/PhoneScreen";

const Home = () => {
  const phoneDivStyle: any = {
    border: `1px solid  #d1d1e0`,
    boxSizing: "border-box",
    padding: `12px`,
    borderRadius: `25px`,
    width: "350px",
    wordWrap: "break-word",
    backgroundColor: "black",
  };

  const phoneScreenDivStyle: any = {
    minHeight: "250px",
    maxWidth: "300px",
    border: `1px solid#e0e0eb`,
    padding: `${defaultTheme.orbit.paddingTable}`,
    marginBottom: `10px`,
    backgroundColor: "white",
    borderRadius: `15px`,
  };

  const [digits, setDigits] = useState<string>("");
  const keysMap: any = new Map([
    ["1", ["📞"]],
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
    ["*", ["+"]],
    ["0", ["_"]],
    ["#", ["C"]],
  ]);

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
    <Layout type='MMB'>
      <LayoutColumn>
        <Box
          borderRadius='circle'
          margin={"XXXLarge"}
          textAlign='center'
          wrap='wrap'
          align='center'
          display='flex'
          justify='end'
          direction='column'
        >
          <div style={phoneDivStyle}>
            <div style={phoneScreenDivStyle}>
              {loading ? (
                <Loading type='boxLoader' />
              ) : error ? (
                <h1>An has occurred!</h1>
              ) : (
                <PhoneScreen data={data} />
              )}
            </div>
            <div>
              <KeyboardContainer
                keysMap={keysMap}
                handleNumberClick={handleNumberClick}
              />
            </div>
          </div>
        </Box>
      </LayoutColumn>
    </Layout>
  );
};

export default Home;
