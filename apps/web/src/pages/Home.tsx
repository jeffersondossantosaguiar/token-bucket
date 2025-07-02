import React, { useState } from 'react';
import { fetchPixKey } from '../relay/queries/PixKeyQuery';

const Home = () => {
  const [pixKey, setPixKey] = useState('');
  const [result, setResult] = useState<any | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await fetchPixKey(pixKey);

      const pix = data.keyCheck;

      if (pix) {
        setResult(pix);
      } else {
        alert('Dados inválidos');
      }
    } catch (error) {
      console.error('Erro ao buscar chave Pix:', error);
      alert('Erro ao buscar chave Pix');
    }
  };

  return (
    <div>
      <h2>Pagar com Pix</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Chave Pix"
          value={pixKey}
          onChange={(e) => setPixKey(e.target.value)}
          required
        />
        <button type="submit">Continuar</button>
      </form>

      {result && (
        <div>
          <h3>Dados da chave:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;
