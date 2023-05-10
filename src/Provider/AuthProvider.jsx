import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GithubAuthProvider, onAuthStateChanged, updateProfile, signOut, GoogleAuthProvider } from "firebase/auth";
import app from '../Components/Account/Firebase/firebase.init';

export const authData = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setuser] = useState([])
    const [loader, setLoader] = useState(true);
    //set loader
    const handleLoader = (value) => {
        setLoader(value);
    }
    //create user with emeail and password
    const createUserEmailFuc = (email, password, name, image) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const currentUser = res.user;
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: image,
            }).then(() => {
                setuser(currentUser);
                setLoader(false);
            }).catch((err) => {
                alert(err)
            })
        }).catch((err) => {
            alert(err);
        })
    }

    // singin user with password and email 
    const singInWithPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setuser(res.user)
        }).catch((err) => {
            alert(err)
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
    //create user with github popup
    const githubProvider = new GithubAuthProvider;
    const clickToCreateUserWtihGitHub = () => {
        signInWithPopup(auth, githubProvider)
        .then((res) => {
            const credential = GithubAuthProvider.credentialFromResult(res);
            const token = credential.accessToken
            setuser(res.user);
        }).catch((err) => {
            alert(err);
        })
    }

   
    //user manage
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setLoader(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    // update profile 
    const handleProfile = (name, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        }).then((res) => {
            console.log(res)
        }).catch((err) => alert(err))
    }

    //user signOut
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {}).catch((err) => {alert(err)})
    }

    
    const authValue = {
        user,
        handleLoader,
        createUserEmailFuc,
        singInWithPassword,
        clickToCreateUserWtihGoogle,
        clickToCreateUserWtihGitHub,
        handleProfile,
        handleSignOut,
        loader
    }
    return (
        <authData.Provider value={authValue}>
                {children}
        </authData.Provider>
    );
};

export default AuthProvider;