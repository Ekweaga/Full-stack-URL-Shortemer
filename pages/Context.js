import { createContext,useState,useEffect } from "react";
import { onAuthStateChanged ,getAuth} from "firebase/auth";

export const Auth = createContext()

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState({})
   
const auth = getAuth()

    useEffect(()=>{
     onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            
        })
    },[auth])
    return(
        <Auth.Provider value={{user}}>
            {children}
        </Auth.Provider>
    )
}