import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConifg";
export const signUpUser = async (email: string, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
