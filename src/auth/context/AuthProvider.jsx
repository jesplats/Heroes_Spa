import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { types } from "../types/types";

export const AuthProvider = ({ children }) => {
  // Estado inicial del contexto
  const initialState = {
    logged: false,
  };

  let init=()=>{
    let   user=JSON.parse(localStorage.getItem('user'));  
  return {
    logged:!!false,
    user:user,
  }
  }

  // Hook useReducer para manejar el estado
  const [authState, dispatch] = useReducer(authReducer, initialState,init);

 let login=(name='')=>{
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name,
      },
    };
    dispatch(action);
  }

  return (
    // Proveer el estado y la función dispatch al contexto
    <AuthContext.Provider value={{ 
      ...authState,
      login:login,
     }}>
      {children}
    </AuthContext.Provider>
  );
};