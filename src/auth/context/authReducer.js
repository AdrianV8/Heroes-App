import { types } from "../types/types";

export const authReducer = ( state = {}, action ) =>{

    switch (action.type) {
        
        // Parte del login
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };
        
        // Parte del logout
        case types.logout:
            return {
                logged: false,
            };


        default:
            return state;
    }


}