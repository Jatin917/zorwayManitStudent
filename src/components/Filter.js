import { useEffect } from 'react';
import './Filter.css'

function Filter(props){
    const newUser = props.newUser;
    const setnewUser = props.setnewUser;
    const signIn = document.getElementById('signIn');
    const logIn = document.getElementById('logIn');

    return(
        <div className={`filterContainer bg-slate-50 `}>
            <button id='signIn' className= {` ${newUser ? 'active' : ''}`}  onClick={()=>{
                setnewUser(true);
            }}>Sign Up </button>
            <button id='logIn' className={` ${!newUser ? 'active' : ''}`} onClick={()=>{
                setnewUser(false);
            }}>Log In</button>
        </div>
    )
}
export default Filter;