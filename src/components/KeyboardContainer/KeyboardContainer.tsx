import { Grid } from "@kiwicom/orbit-components";
import Button from "@kiwicom/orbit-components/lib/primitives/ButtonPrimitive";
import KeyboardButton from "../KeyboardButton/KeyboardButton";

const KeyboardContainer = ({ keysMap, handleNumberClick }: any) => {
  return (
    <Grid
      columns='repeat(3, 1fr)'
      rows='repeat(2, 1fr)'
      rowGap='10px'
      columnGap='10px'
    >
      {[...keysMap.keys()].map((key: string) => {
        return (
          <KeyboardButton
            key={key}
            handleNumberClick={handleNumberClick}
            keyNumber={key}
            letters={keysMap.get(key)}
          ></KeyboardButton>
        );
      })}
    </Grid>
  );
};

export default KeyboardContainer;
