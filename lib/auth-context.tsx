// 1.provider for distributing auth context
// 2.hook for consuming auth context
import React from "react";
import { Models } from "react-native-appwrite";

type AuthContextType = {
    user: Models.User <Models.Preferences> | null;
    signUp:(email:string,password:string) => Promise<void>;
    signIn:(email:string,password:string) => Promise<void>;
}




const AuthContext = React.createContext<AuthContextType | undefined>(undefined);


const AuthProvider = ({children}:{children:React.ReactNode}) => {

    const signUp = async (email:string,password:string) => {
        try{

        }catch(error){
            
        }
    }

    const signIn = async (email:string,password:string) => {}

    const user = null; // Replace with actual user state management








  return (
    <AuthContext.Provider value={{user,signUp,signIn}}>
        {children}
    </AuthContext.Provider>
    
  )
}
export default AuthProvider

export function useAuth(){

}

function CreateContext(undefined: undefined) {
    throw new Error("Function not implemented.")
}
