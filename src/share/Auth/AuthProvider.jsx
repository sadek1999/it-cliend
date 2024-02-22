import  { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../assets/firebase/firebase.config';




export const authContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loding, setloding] = useState(true)
    
    const provider = new GoogleAuthProvider();

    const googlelogin = () => {
        return signInWithPopup(auth, provider)
    }

    const singup = (email, password, name, profile,) => {
    
        // setimg(profile)
        // setname(name)
        return createUserWithEmailAndPassword(auth, email, password)
         

    
    }

    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        // console.log("call for log out")
        return signOut(auth)
    }

    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            // console.log(currentUser.email)
            setuser(currentUser);
            setloding(false)
            
            
            //
        })
        return unSuscribe;
    }, [])
console.log(loding)
    const authInfo = {
        user,
        loding,
       
        singup,
        login,
        logout,
        googlelogin
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}

        </authContext.Provider>
    );
};

export default AuthProvider;