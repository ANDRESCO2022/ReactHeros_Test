import { authReducer } from '../../../auth/context/authReducer';
import { types } from '../../../auth/types/types';

describe('pruebas en el autReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
  test('debe de llamar al login  autenrticar el usuario  ', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'andres',
        id: '123',
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, user: action.payload });
  });
  test('debe  de  borrar  el nombre  del usuario y  logeado en falso  ', () => {
    const state = {
      logged: true,
      user: { id: '12', name: 'andres' },
    };
    const action = {
      type: types.logout,
    };
    const newState = authReducer(state, action);
    expect(newState).toMatchObject({ logged: false });
  });
});
