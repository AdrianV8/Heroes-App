import { types } from "../../../src/auth"

describe('Pruebas en Types.js', () => { 
    
    test('Debe de regresar los types correspondientes', () => {
        
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    })

 })