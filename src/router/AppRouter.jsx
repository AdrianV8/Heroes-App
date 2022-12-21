import { Navigate, Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { HeroesRoutes} from "../heroes"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage/>} />
            
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
