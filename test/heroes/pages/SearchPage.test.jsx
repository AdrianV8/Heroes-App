import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";

import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

describe("Pruebas Search Page", () => {

    beforeAll( () => jest.clearAllMocks());

    test("Debe de mostrarse los valores por defecto", () => {

        const { container } = render(
            <MemoryRouter>

                <SearchPage />

            </MemoryRouter>
        
        );
        expect( container ).toMatchSnapshot();
  
    });

    test("Debe de mostrar el héroe y el input con el valor del queryString", () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>

                <SearchPage />

            </MemoryRouter>
        
        );

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg')
  
    });
    test("Debe de mostrar el héroe y mantener oculto mensajes de error y búsqueda", () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>

                <SearchPage />

            </MemoryRouter>
        
        );

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg')

        const searchHero = screen.getByLabelText('search_hero');
        const searchError = screen.getByLabelText('search_error');
        expect( searchHero.style.display ).toBe('none');
        expect( searchError.style.display ).toBe('none');
  
    });

    test("Debe mostrar un error si no se encuentra el heroe", () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>

                <SearchPage />

            </MemoryRouter>
        
        );

        const searchError = screen.getByLabelText('search_error');
        expect( searchError.style.display ).toBe('');
  
    });
  
    test("Debe de llamar en navigate a la pantalla nueva", () => {

        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>

                <SearchPage />

            </MemoryRouter>
        
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByLabelText('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(mockNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)
  
    });

    
});
