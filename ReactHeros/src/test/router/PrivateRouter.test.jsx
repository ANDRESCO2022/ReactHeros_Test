import { render, screen } from '@testing-library/react';
import { PrivateRouter } from '../../router/PrivateRouter';
import { AuthContext } from '../../auth';
import { MemoryRouter } from 'react-router-dom';

describe('pruebas  en <PrivateRoute/>', () => {
  test('debe  de mostrar  el children si esta autenticado', () => {
    Storage.prototype.setItem = jest.fn();
    const contextValue = {
      logged: true,
      use: {
        id: 'ABC',
        name: 'andres',
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRouter>
            <h1>Ruta privada</h1>
          </PrivateRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Ruta privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/search?q=batman'
    );
  });
});
