import { render, screen } from "@testing-library/react";
import { it } from "@jest/globals";
import PhoneScreen, {  PhoneScreenProps } from "./PhoneScreen";

it("should render PhoneScreen and print letters into the screen", () => {
  const  props: PhoneScreenProps = {
    data: {
      getWords: {
        words: ["a", "b", "c"],
      },
    },
  };
  render(<PhoneScreen {...props} />);

  screen.getByText("a");
  screen.getByText("b");
  screen.getByText("c");
});
