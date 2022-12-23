import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router"

describe('Pruebas PrivateRoute', () => {

    test('Debe de navegar si está autenticado', () => {

        Storage.prototype.setItem = jest.fn();
        
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Adrian'
            }
        };
        
        render( 
            <AuthContext.Provider value={contextValue}>
                {/* Indicamos la ruta en la que partimos */}
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>   
                </MemoryRouter>

            </AuthContext.Provider> 
        );

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/marvel");

    })

})