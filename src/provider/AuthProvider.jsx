import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const registration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const update = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(user, {
            displayName: displayName, photoURL: photoURL
        })
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
            // const userEmail = { email: currentUser?.email || user?.email }
            // if (currentUser) {
            //     axios.post("/jwt", userEmail)
            //         .then(res => {
            //             // console.log("token response", res.data)
            //             console.log(res.data)
            //             localStorage.setItem("token", res.data);
            //         })
            // }else{
            //     localStorage.removeItem("token");

            // }
        });
        return () => {
            unSubscribe();
        }
    }, [user?.email])

    const AuthInfo = {
        user, loading, setLoading, login, logout, registration, googleLogin, update
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;