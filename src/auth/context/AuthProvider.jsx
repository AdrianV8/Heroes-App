import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

import { types } from "../types/types"

/**
 * AuthProvider utiliza AuthContext para proveer la información a toda la aplicación
 */

// Mantener el usuario en el localStorage
const init = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  return{
    // Si el user existe pasará a ser true
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer( authReducer, {}, init);

  /**
   * 
   * @param {*} name Recibe el nombre del usuario para el login
   */
  const onLogin = (name='') =>{

    const user = {
      id: 'ABC',
      name
    }

    const action = {
      type: types.login,
      payload: user,
    }

    // LocalStorage solo puede grabar strings
    localStorage.setItem('user', JSON.stringify( user ))
    
    // Llamamos a la acción (action) en el dispatch, que será el encargado de mandarla al useReducer
    dispatch(action);
  }
    
  return (
    // Exponemos la función de login
    <AuthContext.Provider value={{
      ...authState,
      login: onLogin
    }}>
        {children}
    </AuthContext.Provider>
  )
}
