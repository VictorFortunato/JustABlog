import { db } from "../firebase/config";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassoword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAuthentication = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //cleanup
    //deal with memory leaking

    const [cancelled, setCancelled] = useState(false);
    const auth = getAuth();

    function checkIfItsCancelled() {
        if (cancelled) {
            return;
        }

    }
    const createUser = async (data) => {

        checkIfItsCancelled();
        setLoading(true);
        setError(null);

        try {
            const { user } = createUserWithEmailAndPassword(auth, data.email, data.password)

            //updating user profile on firebase, passing the user and and and obj

            await updateProfile(user,
                { displayName: data.displayName })

            return user;

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            //deal with password erros
                let systemErrorMessage;

                if(error.message.includes('password')){
                    systemErrorMessage = "Password needs at least 6 caracters"
                }else if(error.message.includes("email-already")){
                    systemErrorMessage = "Email already has been used"
                }else{
                    systemErrorMessage = "Error, please try again later."
                }
            setError(systemErrorMessage);
        }

        setLoading(false);

    }

    useEffect(() => {
        return () => setCancelled(true);

    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
    };


};





