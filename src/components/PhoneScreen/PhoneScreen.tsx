import { Box } from "@kiwicom/orbit-components";

export interface PhoneScreenProps{
  data:WordsContainer
}

export interface WordsContainer {
  getWords:WordsEntity
}

export interface  WordsEntity {
  words:string []
}

const PhoneScreen = ({ data }: PhoneScreenProps) => {
  return (
    <Box
      background='white'
      height='250px'
      textAlign='center'
      padding='small'
      maxWidth='300px'
      overflow='auto'
      wrap='nowrap'
    >
      {data?.getWords.words && data.getWords.words.toString()}
    </Box>
  );
};

export default PhoneScreen;
