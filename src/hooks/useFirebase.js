import  { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';


initializeAuthentication();


const useFirebase = () => {

const [user, setUser] = useState({});

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// google sign in
const signInUsingGoogle =() =>{
   
    signInWithPopup(auth, googleProvider)
    .then( result =>{
       setUser(result.user);
    });
  
}
// sign in using  email/password 
// const handleRegistration = e =>{
//    console.log('registration')
//    e.preventDefault();
// }


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
    onAuthStateChanged(auth, (user) => {
        if (user) {
        setUser(user)

        } else {
        
        }
      });

},[])
    return {
               user, signInUsingGoogle , logOut
          }
};

export default useFirebase;