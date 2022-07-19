import auth from "../firebase";

export const signUpUserInFirebase = (email, pass) => {
  const isSignUp = auth.createUserWithEmailAndPassword(email, pass);
  return isSignUp;
};

export const logInUserInFirebase = (email, pass) => {
  const isLogIn = auth.signInWithEmailAndPassword(email, pass);
  return isLogIn;
};
