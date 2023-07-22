// import { render, screen } from '@testing-library/react';
// import { AuthContext } from '../../auth';
// import { MemoryRouter } from 'react-router-dom';
// //import { AppRouter } from '../../router/AppRouter';
// describe('verificar la  configuracion de jest ', () => {
//   test('debe  de mostrar el login  si no esta autenticado ', () => {
//     const constexValue = {
//       logged: false,
//     };
//     render(
//       <MemoryRouter initialEntries={['/marvel']}>
//         <AuthContext.Provider value={constexValue}></AuthContext.Provider>
//       </MemoryRouter>
//     );
//   });
// });
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../auth';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../router/AppRouter';
describe('Pruebas en <AppRouter/>', () => {
  test('debe  de mostrar el login  si no esta autenticado ', () => {
    const constexValue = {
      logged: false,
    };
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={constexValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText('login').length).toBe(2);
  });
  test('debe de mostrar el componente de marver si esta  autenticado', () => {
    const constexValue = {
      logged: true,
      id: 'abc',
      name: 'andres',
    };
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={constexValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
  });
});
