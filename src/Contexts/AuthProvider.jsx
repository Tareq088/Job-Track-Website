import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
            // clicking refresh, data is lost that time i need a loading component.. data peye gelei loading false hbe
    const [loading, setLoading] = useState(true)
                // for google login need provider
    const googleProvider = new GoogleAuthProvider();
            // create/register/sign up User
    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
            //log In user
    const logInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }    
                // log Out user
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }      
                // on Auth state change
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, (currenUser)=>{
            setUser(currenUser);
            setLoading(false)
            console.log(user)
        });
        return ()=>{unSubscribe()};
    },[user])
                // google login
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    console.log(loading, user)

    const authData ={
        user, setUser, createUser, logInUser, googleSignIn, logOut, loading, setLoading
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;