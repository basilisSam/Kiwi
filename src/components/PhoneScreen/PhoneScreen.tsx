import { Box } from "@kiwicom/orbit-components";

const PhoneScreen = ({ data }: any) => {
  return (
    <Box background='white' textAlign='center' padding='large' maxWidth='300px'>
      {data?.words.words &&
        data.words.words.map((word: string) => {
          return <span>'{word}'</span>;
        })}
    </Box>
  );
};

export default PhoneScreen;
