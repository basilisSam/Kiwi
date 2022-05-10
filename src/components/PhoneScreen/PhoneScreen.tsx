import { Box } from "@kiwicom/orbit-components";

export interface PhoneScreenProps {
  data: WordsContainer;
}

export interface WordsContainer {
  getWords: WordsEntity;
}

export interface WordsEntity {
  words: string[];
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
      {/* {data?.getWords.words && data.getWords.words.toString()} */}

      {data?.getWords.words?.map((word: string, index: number) => (
        <Box
          background='cloudNormalHover'
          textAlign='center'
          padding='small'
          margin='XSmall'
          borderRadius='normal'
          display='inline-flex'
          width='auto'
          maxWidth='100px'
          minWidth='100px'
          justify='center'
          key={index}
        >
          {word}
        </Box>
      ))}
    </Box>
  );
};

export default PhoneScreen;
