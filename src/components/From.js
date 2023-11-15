import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Filter from './Filter';
import { useState } from "react";

function Form(props){
    const [newUser,setnewUser] = useState(true);
    let signout = props.signout;
    return(
        <div>
            <Filter newUser={newUser} setnewUser={setnewUser} />
            {newUser ? <SignUp signout={signout} /> : <SignIn signout={signout}/>}
        </div>
    )
}

export default Form;