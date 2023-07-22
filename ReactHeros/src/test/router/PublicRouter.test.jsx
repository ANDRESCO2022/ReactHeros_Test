import { render, screen } from '@testing-library/react';
import { PublicRouter } from '../../router/PublicRouter';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
describe('pruebas en <publicRoter/>', () => {
  test('debe de mostrar el children si no esta autenticado', () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRouter>
          <h1>Ruta publica</h1>
        </PublicRouter>
      </AuthContext.Provider>
    );
  });
  test('debe navegar si esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'andres',
        id: 'asdf',
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRouter>
                  <h1>Ruta publica</h1>
                </PublicRouter>
              }
            />
            <Route path="marvel" element={<h1>pagina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('pagina Marvel')).toBeTruthy();
  });
});
