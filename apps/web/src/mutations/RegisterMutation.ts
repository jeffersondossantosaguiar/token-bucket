import { commitMutation, graphql } from "relay-runtime"
import { environment } from "../relay/environment"

const mutation = graphql`
  mutation RegisterMutation($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      id
    }
  }
`

export function registerCommit(
  email: string,
  password: string,
  onCompleted: (response: any) => void,
  onError: (error: any) => void
) {
  return commitMutation(environment, {
    mutation,
    variables: { email, password },
    onCompleted,
    onError
  })
}
