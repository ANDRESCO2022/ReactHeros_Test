import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPages = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath' || '/');
    login('andres cordoba');
    navigate(lastPath, { replace: true });
  };

  return (
    <>
      <div className="container mt-5">
        <h1>login</h1>
        <hr />
        <button className="btn btn-success" onClick={onLogin}>
          login
        </button>
      </div>
    </>
  );
};
