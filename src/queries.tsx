import {gql} from "@apollo/client"


const GET_ISSUE = gql`
query GET_ISSUE($issueNumber: Int!) {
    repository(owner:"reactjs", name:"reactjs.org") {
      issue(number: $issueNumber) {
            title
            body
            number
            state
            comments(first:2) {
              edges{
                  node{
                      id
                      body  
                      publishedAt
                  }
              }
            }
        }
      }
    }`


export {
    GET_ISSUE
}