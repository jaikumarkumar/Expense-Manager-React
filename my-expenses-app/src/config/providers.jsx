import { FirebaseAuth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

class FirebaseTransaction {
  // Private method to handle Firebase operations
  async _handleAuthOperation(authMethod, email, password) {
    try {
      const response = await authMethod(FirebaseAuth, email, password);
      return {
        email: response.user.email,
        token: response.user.stsTokenManager.accessToken,
        refreshToken: response.user.stsTokenManager.refreshToken,
      };
    } catch (error) {
      console.error("Authentication error:", error.message);
      throw new Error(error.message); // Rethrow the error for handling in the calling function
    }
  }

  async registerWithCredentials({ email, password }) {
    return await this._handleAuthOperation(
      createUserWithEmailAndPassword,
      email,
      password
    );
  }

  async loginWithCredentials({ email, password }) {
    return await this._handleAuthOperation(
      signInWithEmailAndPassword,
      email,
      password
    );
  }
}

const firebaseActivity = new FirebaseTransaction();

export { firebaseActivity };
