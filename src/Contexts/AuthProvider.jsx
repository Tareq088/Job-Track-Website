import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
            // create User
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authData ={
        user, setUser, createUser
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;