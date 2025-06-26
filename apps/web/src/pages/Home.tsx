import React, { useState } from 'react';

const Home = () => {
  const [pixKey, setPixKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ pixKey });
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
    </div>
  );
};

export default Home;
