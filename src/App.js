import './App.css';
import Dashboard from './components/Dashboard';

import React, { useState } from "react";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Filter from './components/Filter';
import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { firebase } from 'firebase/app';
import { app } from "./firebase";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const auth = getAuth(app);


<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Autour+One&family=Bebas+Neue&family=Bruno+Ace+SC&family=Bungee+Spice&family=Cutive+Mono&family=DM+Sans:opsz,wght@9..40,100;9..40,200&family=Kalam:wght@300&family=Lilita+One&family=Oswald&family=PT+Sans+Narrow&family=Roboto+Condensed&family=Teko:wght@300&family=Tilt+Neon&family=Yanone+Kaffeesatz&display=swap');
</style>

function App() {

  const [newUser,setnewUser] = useState(true);
  const [logged, setLogged] = useState(false);
  const [signed,setsigned] = useState("Log In");
  // console.log(logged);

  // sign out function
  function signout(){
    signOut(auth).then(() => {
        toast.success("Sign Out Successfully");
        console.log("sign out successfully");
        setLogged(!logged)
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
        console.log("problem in signing you out successfully");
        toast.error(`Somethign went wrong ${error}`);
      });
  }

  onAuthStateChanged(auth,(user) => {
    if (user) {
      // User is signed in.
          console.log("Sign-in provider: " + user.providerData.providerId);
          console.log("  Provider-specific UID: " + user.providerData.uid);
          console.log("  Name: " + user.providerData.displayName);
          console.log("  Email: " + user.providerData.email);
          console.log("  Photo URL: " + user.providerData.photoURL);
          setsigned("Sign Out");
          // setLogged(!logged)
      // Show user-specific content or navigation options.
    } else {
      // No user is signed in.
      // document.getElementById('login-status').textContent = 'Not logged in';
      setsigned("Log In");
      // setLogged(!logged)
      // Show login options or general content.
    }
  });

  return (
    <div className="App">
      {/* <Filter newUser={newUser} setnewUser={setnewUser} /> */}
        {logged ?
        (<Dashboard signout= {signout} signed={signed} setsigned={setsigned} />) : 
        (newUser ? <SignUp newUser={newUser} setnewUser={setnewUser} logged = {logged} setLogged = {setLogged} signout={signout} /> : <SignIn newUser={newUser} setnewUser={setnewUser} logged = {logged} setLogged = {setLogged} signout={signout}/>)
      }
      <ToastContainer/>
    </div>
  );
}

export default App;
