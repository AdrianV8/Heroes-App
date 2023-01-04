import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router"

describe('Pruebas AppRouter', () => {

    const onLogin = jest.fn();
    
    test('Debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false,
        }
            
        render( 
            <AuthContext.Provider value={ contextValue }>

                <MemoryRouter initialEntries={['/marvel']}>

                    <AppRouter/>

                </MemoryRouter>

            </AuthContext.Provider >
        );

        expect( screen.getAllByText('Login').length ).toBe(2);
    })

    test('Debe de mostrar el componente de marvel si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Adrian'
            }

        }

        render( 
            <AuthContext.Provider value={ contextValue }>

                <MemoryRouter initialEntries={['/login']}>

                    <AppRouter/>

                </MemoryRouter>

            </AuthContext.Provider >
        );
        expect( screen.getByText(contextValue.user.name) ).toBeTruthy();
    })


})