import './Filter.css'

function Filter(props){
    const newUser = props.newUser;
    const setnewUser = props.setnewUser;
    const signIn = document.getElementById('signIn');
    const logIn = document.getElementById('logIn');

    return(
        <div className="flex item-center justify-around p-3 mt-16 rounded w-3/5">
            <button id='signIn' className='border-solid  border-2 border-red'  onClick={()=>{
                setnewUser(true);
                console.log("sign in");
                // signIn.classList.add('active');
                // logIn.classList.remove('active');
            }}>Sign Up</button>
            <button id='logIn' className='' onClick={()=>{
                setnewUser(false);
                console.log("log in");
                // logIn.classList.add('active');
                // signIn.classList.remove('active');
            }}>Log In</button>
        </div>
    )
}
export default Filter;