/**
 * Rutas privadas para evitar el acceso a la aplicación si no está logueado
 */

import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context"

export const PrivateRoute = ({ children }) => {

    const { pathname, search } = useLocation();
    const lastPath = pathname + search;

    localStorage.setItem('lastPath', lastPath);

    // Rescatamos el logged del contexto y verificamos que si está logueado o no
    const { logged } = useContext( AuthContext );

  return (logged) ? children : <Navigate to="/login" />
}
