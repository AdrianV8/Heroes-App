import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/Interfaces";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate

}));

describe('Pruebas Navbar', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 'ABC',
            name: 'Adrian'
        },
        logout: jest.fn(),

    }

    beforeEach( () => jest.clearAllMocks() );
    
    test('Debe de mostrar en nombre de usuario en el Navbar', () => {
        
        render( 
            <AuthContext.Provider value={ contextValue }>

                <MemoryRouter initialEntries={['/login']}>

                    <Navbar/>

                </MemoryRouter>

            </AuthContext.Provider >
        );
        expect( screen.getByText(contextValue.user.name) ).toBeTruthy();
        
    })

    test('Debe de desloguearse al pulsar el botón', () => {

        render( 
            <AuthContext.Provider value={ contextValue }>

                <MemoryRouter initialEntries={['/login']}>

                    <Navbar/>

                </MemoryRouter>

            </AuthContext.Provider >
        );
        expect(screen.getByLabelText('btn-logout')).toBeTruthy();
        fireEvent.click(screen.getByLabelText('btn-logout'));
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith("/login", {"replace": true});
        
    })


})