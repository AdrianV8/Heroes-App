import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router"

describe('Pruebas PublicRoute', () => {
    
    test('Debe de mostrar el children si no está autenticado', () => {
        
        
        const contextValue = {
            logged: false,
        };

        render( 
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider> 
        );

        expect( screen.getByText('Ruta pública') ).toBeTruthy();


    });

    test('Debe de navegar si está autenticado', () => {
        
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
                <MemoryRouter initialEntries={['/login']}>
                    {/* Simulamos las rutas que tiene en función de si está logueado o no */}
                    <Routes>

                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta pública</h1>
                            </PublicRoute>   
                        } />

                        <Route path='marvel' element={<h1>Página privada de Marvel</h1>} />

                    </Routes>


                </MemoryRouter>

            </AuthContext.Provider> 
        );

        expect( screen.getByText('Página privada de Marvel') ).toBeTruthy();

    })

})