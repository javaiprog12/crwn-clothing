import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = 
    {
        apiKey: "AIzaSyAo5m2PNYbYJRVX4D3EWxPUKmw6HHe4voo",
        authDomain: "crwn-db-b762f.firebaseapp.com",
        projectId: "crwn-db-b762f",
        storageBucket: "crwn-db-b762f.appspot.com",
        messagingSenderId: "1012303311618",
        appId: "1:1012303311618:web:419a7c758e88e8e612881b",
        measurementId: "G-5RN978EXW7"
    };
/****Storing authentication in firestore database */
    export const createUserProfileDocument = async(userAuth,additionalData) =>{
        if(!userAuth) return;

        const userRef = firestore.doc(`/users/${userAuth.uid}`); //document reference 
        const snapshot = userRef.get();

        if(!snapshot.exists){
            const {displayName,email} = userAuth;
            const createdAt = new Date();

            try{

                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            }catch(error){
                console.log('error creating user',error.message);

            }
        }

        return userRef;

    }

    firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'});
    export const  signInWithGoogle = () =>auth.signInWithPopup(provider);

    export default firebase;
