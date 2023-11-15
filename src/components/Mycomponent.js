import { useEffect } from 'react';
// import { auth } from '../firebase'; // Import your Firebase authentication instance
import Dashboard from './Dashboard';
import { getAuth,onAuthStateChanged,signOut} from "firebase/auth";
import { app } from "../firebase";
import Form from './From';
function MyComponent(props) {
    const auth = getAuth(app);
    let signout = props.signout;
    let signed = props.signed;
    let setsigned = props.setsigned;
    let logged = props.logged;
    let setLogged = props.setLogged;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {

        console.log('User is signed in:', user);
        setLogged(true);
      } else {
        // User is signed out.
        console.log('User is signed out');
        setLogged(false);
      }
    });

    // Cleanup the listener when the component unmounts.
    return () => unsubscribe();
  }, [logged]); // The empty dependency array ensures that the effect runs once after the initial render.

  // Your component code here...

  return (
    <div>
    {logged ?
        (<Dashboard signout= {signout} signed={signed} setsigned={setsigned} />) : 
        (<Form signout={signout} />)}
    </div>
  );
}

export default MyComponent;
