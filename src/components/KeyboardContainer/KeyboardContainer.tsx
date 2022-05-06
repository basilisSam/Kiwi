import { Grid } from "@kiwicom/orbit-components";
import Button from "@kiwicom/orbit-components/lib/primitives/ButtonPrimitive";
import KeyboardButton from "../KeyboardButton/KeyboardButton";

const KeyboardContainer = ({ keysMap,handleNumberClick }: any) => {
  return (
    <Grid
      columns="repeat(3, 1fr)"
      rows="repeat(2, 1fr)"
      rowGap="10px"
      columnGap="10px"
    >
    
      {Object.keys(keysMap).map((keyNumber) => {
        return <KeyboardButton key={keyNumber} handleNumberClick={handleNumberClick} keyNumber={keyNumber} letters={keysMap[keyNumber]}></KeyboardButton>;
      })}
    </Grid>
  );
};

export default KeyboardContainer;