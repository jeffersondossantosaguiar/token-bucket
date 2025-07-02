import { commitMutation, graphql } from 'relay-runtime';
import { environment } from '../environment';

const mutation = graphql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export function loginCommit(
  email: string,
  password: string,
  onCompleted: (response: any) => void,
  onError: (error: Error) => void
) {
  return commitMutation(environment, {
    mutation,
    variables: { email, password },
    onCompleted,
    onError,
  });
}
