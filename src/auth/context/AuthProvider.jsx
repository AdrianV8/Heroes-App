import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

import { types } from "../types/types"

const initialState = {
    logged: false,
}

export const AuthProvider = ({ children }) => {

  const [ authState, dispatch ] = useReducer( authReducer, initialState);

  /**
   * 
   * @param {*} name Recibe el nombre del usuario para el login
   */
  const onLogin = (name='') =>{

    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name,
      }
    }
    
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
