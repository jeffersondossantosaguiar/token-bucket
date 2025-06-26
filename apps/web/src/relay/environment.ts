import { Environment, Network, RecordSource, Store } from 'relay-runtime';

//TODO adicionar tipagem
async function fetchQuery(operation, variables) {
  const token = localStorage.getItem('token');

  //TODO Pegar a rota via env
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

  return response.json();
}

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
