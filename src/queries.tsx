import { gql } from "@apollo/client";

const GET_WORDS = gql`
  query GET_WORDS($digits: Float!) {
    getWords(digits: $digits) {
      words
    }
  }
`;

export { GET_WORDS };
