import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, it } from "@jest/globals";
import KeyboardContainer from "./KeyboardContainer";

afterEach(cleanup);

let handleNumberClick = jest.fn();

const keysMap: any = new Map([["2", ["a", "b", "c"]]]);

it("should render letters and key number into a button", () => {
  render(<KeyboardContainer keysMap={keysMap} />);

  screen.getByText("2 abc");
  screen.getByRole("button");
});

it("should check if method passed to component is called on button click", () => {
  render(
    <KeyboardContainer
      keysMap={keysMap}
      handleNumberClick={handleNumberClick}
    />
  );

  const button = screen.getByRole("button");
  fireEvent.click(button);

  expect(handleNumberClick).toBeCalled();
});
