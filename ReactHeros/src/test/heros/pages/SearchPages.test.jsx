import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPages } from '../../../heros';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('pruebas  en <SearchPages/>', () => {
  beforeEach(() => jest.clearAllMocks());
  test('debe de mostrarse correctamente  con los  valores por  defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPages />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
  test('debe de mostrar  a batman y el query con el queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPages />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman');
    const img = screen.getByRole('img');
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
    const alertDanger = screen.getByLabelText('alert-danger');
    expect(alertDanger.style.display).toBe('none');
  });
  test('debe de  mostrar un error  si no se  encuentra el hero', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPages />
      </MemoryRouter>
    );
    const alertDanger = screen.getByLabelText('alert-danger');
    expect(alertDanger.style.display).toBe('');
  });
  test('debe  de llamar el navigate a la  pantalla nueva', () => {
    const inputValue = 'superman';
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPages />
      </MemoryRouter>
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { name: 'searchText', value: inputValue },
    });
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
  });
});
