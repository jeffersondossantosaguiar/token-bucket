import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthLayout from '../components/AuthLayout';
import { registerCommit } from '../mutations/RegisterMutation';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //TODO melhorar logica para validar campos
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    registerCommit(
      email,
      password,
      (resp) => {
        const id = resp.createUser?.id;

        if (id) {
          console.log("CRIADO!!!!!!!");
          alert("User criado");
          navigate("/login");
        } else {
          alert("ERRO!");
        }
      },
      (err) => {
        console.error(err);
        alert("Falha ao registrar usuário");
      }
    );
  };

  return (
    <AuthLayout>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder='email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder='Create password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder='Confirm password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type='submit'>Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </AuthLayout>
  );
};


export default Register;