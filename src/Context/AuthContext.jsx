import { createContext, useEffect, useState } from "react"
import { auth } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthInfo = createContext(null);

const AuthContext = ({ children }) => {
    const [authEmail, setAuthEmail]= useState(null);
    // current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthEmail(user?.email);
        });
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [])

    // new account create
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login account
    const loginAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // LogOut account
    const logOut=()=>{
        return signOut(auth);
    }

    // auth povider result
    const result = {
        authEmail,
        createAccount,
        loginAccount,
        logOut,

    };
    return (
        <AuthInfo.Provider value={result}>
            {children}
        </AuthInfo.Provider>
    )
}
export default AuthContext