import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';
// const initialState = {
//   logged: false,
// };
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user: user,
  };
};
export const AuthProvider = ({ children }) => {
  const [authstate, dispatch] = useReducer(authReducer, {}, init);
  const login = async (name = '') => {
    const user = { id: 'ABDC', name };
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name,
      },
    };
    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  };
  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch(action);
  };
  return (
    <AuthContext.Provider value={{ ...authstate, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};