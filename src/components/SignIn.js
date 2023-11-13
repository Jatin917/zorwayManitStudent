import { useState } from "react";
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase";

import './SignIn.css'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const auth = getAuth(app);
function SignIn(props){
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const [error,setError] = useState("");
        const signout = props.signout;
        const logged = props.logged;
        const setLogged = props.setLogged;
    const onAuthStateChanged = props.onAuthStateChanged;
    function signUpUser(){
        signInWithEmailAndPassword(auth,email,password).
        then((value)=>            
        {
            toast.success(`signed in as ${value.user.email}`);
            setLogged(!logged);
        }
        )
        .catch((err)=>{
            setError(err.message);
            toast.error(`${error}`);
            console.log(error);
        });
    }


    return (
        <div className="signUp">

            <div className="my-4">
                <h1 className="text-2xl text-rose-900">Log In Here</h1>
            </div>

            <div className="boxSignUp">
                <lable>email</lable>
                <input autocomplete="off" required className="rounded text-black" value={email} type="email" name="email" onChange={(event)=>
                    setEmail(event.target.value)
                }/>
            </div>

            <div className="boxSignUp">
                <lable>password</lable>
                <input autocomplete="off" required className="rounded text-black" value={password} id="pass" type="password" name="password" onChange={(event)=>
                    setPassword(event.target.value)
                }/>
            </div>

                <button className="bg-stone-800 px-3 py-1 rounded uppercase m-6 singUpbtn" onClick={ signUpUser
                }>Sign In user</button>
                <button className="bg-stone-800 px-3 py-1 rounded uppercase m-6 singUpbtn" onClick={ signout
                }>Sign Out</button>
                {/* toast.error({error}); */}
                <ToastContainer/>
        </div>
    )
}

export default SignIn;