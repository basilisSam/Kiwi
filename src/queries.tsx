import { gql } from "@apollo/client";

const GET_WORDS = gql`
  query GET_WORDS($digits: Float!) {
    words(digits: $digits) {
      words
    }
  }
`;

export { GET_WORDS };
