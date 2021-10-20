import  { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

// initialize firebase
initializeAuthentication();


const useFirebase = () => {
const [user, setUser] = useState({});
const [email, setEmail] = useState('');
const [password , setPassword] = useState('');
const [error, setError] = useState('');


const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// google sign in
const signInUsingGoogle =() =>{
    return  signInWithPopup(auth, googleProvider);
   
}
// email handle
 const handleEmailChange = e =>{
  setEmail(e.target.value);
}
// password handle
const handlePasswordChange = e =>{
   setPassword(e.target.value);
}

// registration using  email/password 
  const handleRegistration = e =>{
  //  console.log(email, password);
   e.preventDefault();
   if(password.length < 6){
     setError('password should be atleast 6 character long');
     return;
   }
   createUserWithEmailAndPassword(auth, email,password)
    .then((result) => {
      const user = result.user;
     console.log(user);
     setError('');
    })
    .catch((error) => {
     setError(error.message) ; 
    });   
}
// login using email/password
const handleLogin = e =>{
  e.preventDefault();
  if(password.length < 6){
    setError('Type your password carefully');
    return;
  }
  signInWithEmailAndPassword(auth, email, password)
  .then((result) => { 
  const user = result.user;
  console.log(user);
  setError('');
  })
  .catch((error) => {
   setError(error.message);
  });

}

// user log out 
  const logOut =() =>{
    signOut(auth)
    .then(() => {
      setUser({})
    }).catch((error) => {
     
    });
}

// observe user state change or not
useEffect(() =>{
 const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
        setUser(user)
        } 
      });
      return ()=> unsubscribed;
},[])
    return {
           user, signInUsingGoogle , logOut , handleRegistration , handleEmailChange ,handlePasswordChange ,error ,handleLogin
          }
};

export default useFirebase;