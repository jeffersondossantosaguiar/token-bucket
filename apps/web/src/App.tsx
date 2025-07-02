import { Route, Routes } from 'react-router';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    <Route
      path="/"
      element={
        <PrivateRoute>
          <Header>
            <Home />
          </Header>
        </PrivateRoute>
      }
    />
  </Routes>
);

export default App;
