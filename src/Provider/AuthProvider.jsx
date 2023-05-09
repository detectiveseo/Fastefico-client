import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../Components/Account/Firebase/firebase.init';

export const authData = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    //create user with emeail and password
    const createUserEmailFuc = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res.user)
        }).catch((err) => {
            alert(err);
        })
    }
    //create user with google popup
    const provider = new GoogleAuthProvider;
    const clickToCreateUserWtihGoogle = () => {
        signInWithPopup(auth, provider)
        .then((res) => {
            console.log(res.user);
        }).catch((err) => {
            alert(err)
        })
    }

    const user = {
        name: "imran",
    }
    const authValue = {
        user,
        createUserEmailFuc,
        clickToCreateUserWtihGoogle,
    }
    return (
        <authData.Provider value={authValue}>
                {children}
        </authData.Provider>
    );
};

export default AuthProvider;