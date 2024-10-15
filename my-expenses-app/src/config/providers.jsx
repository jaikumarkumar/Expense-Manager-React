import { FirebaseAuth } from './firebase';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "firebase/auth";


  class FirebaseTransaction{

    async signInWithCredentials({ email, password }){
        try {
            const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
            return resp.user.uid
    
        } catch (error) {
            return error.message;
        }
    }

    async loginWithCredentials({ email, password }){
        try{
            return await signInWithEmailAndPassword(FirebaseAuth, email, password);
        }
        catch(error){
            return error.message;
        }
    }
  }

  const firebaseActivity = new FirebaseTransaction()

export {
    firebaseActivity
}