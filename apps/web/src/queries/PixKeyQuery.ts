import { fetchQuery, graphql } from 'relay-runtime';
import { environment } from '../relay/environment';
import { PixKeyQuery as PixKeyCheckQueryType } from './__generated__/PixKeyQuery.graphql';

const PixKeyQuery = graphql`
  query PixKeyQuery($key: String!) {
    keyCheck(key: $key) {
      key
      keyType
      account {
        participant
        branch
        accountNumber
        accountType
        openingDate
      }
      owner {
        type
        taxIdNumber
        name
      }
      creationDate
      keyOwnershipDate
    }
  }
`;

export async function fetchPixKey(key: string): Promise<PixKeyCheckQueryType['response']> {
  const result = await fetchQuery<PixKeyCheckQueryType>(environment, PixKeyQuery, {
    key,
  }).toPromise();

  if (!result) {
    throw new Error('No data returned from PixKeyQuery');
  }

  return result;
}
