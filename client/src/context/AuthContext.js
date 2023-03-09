import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "63ffdf2f787c2a954678b742",
    username:"Vlad Panda",
    email:"shumovskairyna@gmail.com",
    profilePicture:"person/5.jpeg",
    coverPicture:"",
    followers:[],
    followings:[],
    isAdmin:false,
  },
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
       {children}
    </AuthContext.Provider>
  );
};