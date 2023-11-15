import { useState } from "react";
import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";
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
    const [error, setError] = useState('');

    const logged = props.logged;
    const setLogged = props.setLogged;
    // const user = auth.user;
    
    function signUpUser(){
        createUserWithEmailAndPassword(auth,email,password).
        then((user)=>{
            toast.success(`Created account with ${user.user.email}`)
            // setLogged(!logged);
            // setnewUser(false);
            })
        .catch((err)=>{
            setError(err.message);
            toast.error(` ${error}`);
        });
    }

    return (
        <div className="signUp">
            <div className="my-4">
                <h1 className="text-2xl text-rose-900 uppercase">Create An Account Here</h1>
            </div>

            <div className="boxSignUp uppercase">
                <lable>email</lable>
                <input autocomplete="off" required className="border-solid border-2 border-black" value={email} type="email" name="email" onChange={(event)=>
                    setEmail(event.target.value)
                }/>
            </div>

            <div className="boxSignUp uppercase">
                <lable>password</lable>
                <input autocomplete="off" required className="border-solid border-2 border-black" value={password} id="pass" type="password" name="password" onChange={(event)=>
                    setPassword(event.target.value)
                }/>
            </div>
            <button className="bg-stone-800 px-3 py-1 rounded uppercase m-6 singUpbtn text-white" onClick={()=>{
                    signUpUser();
                    // sendVerificationEmail();
                    }}>create user</button>
                    <ToastContainer/>
        </div>
    )
}

export default Sign;