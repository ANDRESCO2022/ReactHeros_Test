import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../../auth/context/AuthContext';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { Navbar } from '../../../ui/Components/Navbar';
const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));
describe('pruebas  en <Navbar/>', () => {
  const contextValue = {
    logged: true,
    user: {
      id: 'asad',
      name: 'andres',
    },
    logout: jest.fn(),
  };
  beforeEach(() => jest.clearAllMocks());
  test('debe de mostrar el nombre del usuario', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getAllByText('andres')).toBeTruthy();
  });
  test(' debe de mostrar el nombre del usuario', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    const logoutBtn = screen.getByRole('button');
    fireEvent.click(logoutBtn);
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login');
  });
});
