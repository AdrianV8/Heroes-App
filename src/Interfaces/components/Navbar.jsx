import { useContext } from 'react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';


export const Navbar = () => {

    /**
     * useNavigate -> Custom hook de react-router-dom. Permite navegar hacia una pantalla en especifica y borrar
     * la pantalla anterior del historial para evitar accesos no deseados
     * Sintaxis -> [nombre-asignado]([Página destino], { replace: true/false } )
     *              Argumeto 1: Página destino
     *              Argumento 2: Objeto: Replace. true para borrar la pantalla anterior
     */
    const navigate = useNavigate();

    // Rescatamos el user del context
    const { user, logout} = useContext(AuthContext)
    
    const onLogOut = () =>{

        logout();

        navigate('/login',{
            replace: true
        })
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className= { ({isActive}) => `nav-link ${isActive ? 'text-warning' : ''} 'nav-item' `}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className= { ({isActive}) => `nav-link ${isActive ? 'text-warning' : ''} 'nav-item' `}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className= { ({isActive}) => `nav-link ${isActive ? 'text-warning' : ''} 'nav-item' `}
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span 
                        className='nav-item nav-link text-success'
                    >
                        {
                            // Si no se pone ? dará error porque no puede leer una propiedad de undefined
                            // ? -> en caso de que haya datos que se muestre
                            user?.name
                        }
                    </span>

                    <button
                        aria-label="btn-logout"
                        className="nav-item nav-link btn" 
                        onClick={onLogOut}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}