import './App.css';
import Dashboard from './components/Dashboard';
import Form from './components/From';
import { useEffect } from 'react';
import MyComponent from './components/Mycomponent';
// import { auth } from './firebase'; // Import your Firebase authentication instance

import React, { useState } from "react";
import { getAuth,onAuthStateChanged,signOut} from "firebase/auth";
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

  const [logged, setLogged] = useState(false);
  const [signed,setsigned] = useState("Log In");
  // console.log(logged);

  // sign out function
  function signout(){
    signOut(auth).then(() => {
        toast.success("Sign Out Successfully");
        console.log("sign out successfully");
        // setLogged(logged)
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
        toast.error(`Somethign went wrong ${error}`);
      });
  }

  // onAuthStateChanged(auth,(user) => {
  //   if (user) {
  //     // User is signed in.
  //         setsigned("Sign Out");
  //         setLogged(!logged)
  //     // Show user-specific content or navigation options.
  //   } else {
  //     // No user is signed in.
  //     setsigned("Log In");
  //     // setLogged(!logged)
  //     // Show login options or general content.
  //   }
  // });

  return (
    <div className="App">
      <MyComponent signed={signed} signout = {signout} setsigned={setsigned} logged={logged} setLogged={setLogged}  />
      <ToastContainer/>
      {console.log(logged)}
    </div>
  );
}

export default App;
