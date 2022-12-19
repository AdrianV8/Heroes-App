import { AppRouter } from "./router/AppRouter"
import { Navbar } from "./Interfaces";
import { AuthProvider } from "./auth";

export const HeroesApp = () => {
  return (
    /**
     * La iformación del provider, al estar en un punto muy alto de la aplicación, toda
     * la iformación podrá ser vista desde cualquier lugar de la misma
     */
    <AuthProvider>
    
      <AppRouter/>
    
    </AuthProvider>
  )
}
