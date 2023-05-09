import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Components/Account/Firebase/firebase.init';

export const authData = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setuser] = useState([])
    const [loader, setLoader] = useState(false);
    //set loader
    const handleLoader = (value) => {
        setLoader(value);
    }
    //create user with emeail and password
    const createUserEmailFuc = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
                setuser(res.user)
        }).catch((err) => {
            alert(err);
        })
    }
    //create user with google popup
    const provider = new GoogleAuthProvider;
    const clickToCreateUserWtihGoogle = () => {
        signInWithPopup(auth, provider)
        .then((res) => {
                setuser(res.user);
        }).catch((err) => {
            alert(err)
        })
    }
    //user manage
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    //user signOut
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {}).catch((err) => {alert(err)})
    }

    
    const authValue = {
        user,
        handleLoader,
        createUserEmailFuc,
        clickToCreateUserWtihGoogle,
        handleSignOut
    }
    return (
        <authData.Provider value={authValue}>
                {children}
        </authData.Provider>
    );
};

export default AuthProvider;