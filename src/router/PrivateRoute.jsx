/**
 * Rutas privadas para evitar el acceso a la aplicación si no está logueado
 */

import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context"

export const PrivateRoute = ({ children }) => {

    // Rescatamos el logged del contexto y verificamos que si está logueado o no
    const { logged } = useContext( AuthContext );

  return (logged) ? children : <Navigate to="/login" />
}
