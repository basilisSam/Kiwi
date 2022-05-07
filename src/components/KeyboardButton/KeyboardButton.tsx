import Button from "@kiwicom/orbit-components/lib/Button";

const KeyboardButton = ({ keyNumber, letters, handleNumberClick }: any) => {
  return (
    <Button circled onClick={() => handleNumberClick(keyNumber)}>
      {keyNumber} {letters}
    </Button>
  );
};

export default KeyboardButton;
