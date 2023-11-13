import { useState } from "react";
import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { firebase } from 'firebase/app';
import { app } from "../firebase";

import './SignUp.css'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const auth = getAuth(app);
function Sign(props){
        const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [displayName,setDisplayName] = useState("");
    const [error, setError] = useState('');
    const signout = props.signout;
    const logged = props.logged;
    const setLogged = props.setLogged;
    const newUser = props.newUser;
    const setnewUser = props.setnewUser;
    const onAuthStateChanged = props.onAuthStateChanged;
    // const user = auth.user;
    
    function signUpUser(){
        createUserWithEmailAndPassword(auth,email,password,displayName).
        then((user)=>{
            toast.success(`Created account with ${user.user.email}`)
            setLogged(!logged);
            setnewUser(false);
            })
        .catch((err)=>{
            setError(err.message);
            toast.error(` ${error}`);
        });
    }

    return (
        <div className="signUp">
            <div className="my-4">
                <h1 className="text-2xl text-rose-900">Create An Account Here</h1>
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
            <button className="bg-stone-800 px-3 py-1 rounded uppercase m-6 singUpbtn" onClick={()=>{
                    console.log('chal rha hian');
                    signUpUser();
                    // sendVerificationEmail();
                    }}>create user</button>

            <button className="bg-slate-700 singUpbtn" onClick={signout}>Sign Out</button>
                    <ToastContainer/>
        </div>
    )
}

export default Sign;