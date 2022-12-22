import { types } from "../../../src/auth";
import { authReducer } from "../../../src/auth";


describe('Pruebas authReducer', () => { 
    
    const initialState = { logged: false };

    test('Debe de retornar el estado inicial', () => { 
        const newState = authReducer(initialState, {})
        
        expect(newState).toEqual(initialState);
    })

    test('Debe de llamar al login autenticar y establecer el user', () => { 

        const user = { id: 'ABC', name: 'Adrian' };
        const action = { type: types.login, payload: user }
        
        const newState = authReducer(initialState, action)
        expect(newState).toEqual({logged: true, user: action.payload});
    })

    test('Debe de borrar el name del usuario y logged en false', () => { 
        // Simulamos que hay un usuario loggeado (valores del state)

        const state = { logged: false, user: {id: 'ABC', name: 'Adrian'} };
        const action = { type: types.logout}
        
        const newState = authReducer(state, action)

        expect(newState).toEqual({ logged: false});
    })

 })