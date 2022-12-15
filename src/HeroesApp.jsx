import { AppRouter } from "./router/AppRouter"
import { Navbar } from "./Interfaces";
import { AuthProvider } from "./auth";

export const HeroesApp = () => {
  return (
    <AuthProvider>
    
      <AppRouter/>
    
    </AuthProvider>
  )
}
