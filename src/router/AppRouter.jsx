import { Navigate, Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { HeroesRoutes} from "../heroes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="login" element={
              <PublicRoute>
                <LoginPage/>
              </PublicRoute>
            } />
            
            {/* Protegemos la ruta principal de la aplicación en caso de no estar logueado */}
            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            }/>
            
        </Routes>  
    </>
  )
}
