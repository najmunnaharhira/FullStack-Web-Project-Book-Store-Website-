import React from 'react';
import { createContext } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signUpWithGmail = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }

    const updateUserProfile = (name, photoURL) => {
        const currentUser = auth.currentUser;
        if (!currentUser) return Promise.reject(new Error('No user signed in'));
        return updateProfile(currentUser, { displayName: name || currentUser.displayName, photoURL: photoURL || currentUser.photoURL });
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                try {
                    localStorage.setItem("user", JSON.stringify({ uid: currentUser.uid, email: currentUser.email, displayName: currentUser.displayName }));
                    if (!localStorage.getItem("genius-token")) localStorage.setItem("genius-token", currentUser.uid);
                } catch (e) {}
            } else {
                localStorage.removeItem("user");
                localStorage.removeItem("genius-token");
            }
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        signUpWithGmail,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;