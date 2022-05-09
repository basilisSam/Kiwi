import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, it } from "@jest/globals";
import Home from "./Home";
import { GET_WORDS } from "../../queries";
import { GraphQLError } from "graphql";
import { MockedProvider } from "@apollo/react-testing";
import { PhoneScreenProps } from "../PhoneScreen/PhoneScreen";

afterEach(cleanup);

it("should render Home component and check if logo appears", () => {
  const mocks: any = {
    request: {
      query: GET_WORDS,
    },
    result: {},
  };
  render(
    <MockedProvider mocks={[mocks]} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  screen.getByAltText("My logo");
});

it("should render Home component and check if response data appear to screen", async () => {
  const mocks: any = {
    request: {
      query: GET_WORDS,
      variables: { digits: 0 },
    },
    result: {
      data: {
        getWords: {
          words: ["a", "b", "c"],
        },
      },
    },
  };
  render(
    <MockedProvider mocks={[mocks]} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  await waitFor(() => {
    screen.getByText("a,b,c");
  });
});

it("should render Home component and check if error message appear to screen", async () => {
  const mocks: any = {
    request: {
      query: GET_WORDS,
      variables: { digits: 0 },
    },
    result: {
      errors: [new GraphQLError("Error!")],
    },
  };
  render(
    <MockedProvider mocks={[mocks]} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  await waitFor(() => {
    screen.getByText("An error has occurred!");
  });
});

it("should render Home component and check if loading appear to screen", () => {
  const mocks: any = [];
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  screen.getByTestId("loadingComponent");
});
