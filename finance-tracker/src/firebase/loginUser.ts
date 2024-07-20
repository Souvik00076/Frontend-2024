import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConifg";
export const loginUser = async (email: string, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response.user.toJSON());
  } catch (error) {}
};
