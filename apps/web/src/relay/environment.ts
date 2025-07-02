import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime';

async function fetchResponse(operation: RequestParameters, variables: Variables) {
  const token = localStorage.getItem('token');

  //TODO Get API URL by .env
  const response = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  //return response.json();

  const json = await response.json();

  console.log(JSON.stringify(json));

  return json;
}

export const environment = new Environment({
  network: Network.create(fetchResponse),
  store: new Store(new RecordSource()),
});
