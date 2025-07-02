import { ReactNode } from 'react';
import { useNavigate } from 'react-router';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <header>
        <h1>Consulta Pix</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Header;
