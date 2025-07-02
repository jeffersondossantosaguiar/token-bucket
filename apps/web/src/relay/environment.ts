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

  const data = await response.json();
  const errors = data.errors;

  if (errors && errors.length > 0) {
    console.log({ errors });
    throw new Error(errors.map((e: Error) => e.message).join(', ')); //TODO create a error handler
  }

  return data;
}

export const environment = new Environment({
  network: Network.create(fetchResponse),
  store: new Store(new RecordSource()),
});
