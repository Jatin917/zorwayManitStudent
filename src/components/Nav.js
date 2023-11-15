import './Nav.css'
import manitlogo from '../images/Manit Logo (1).png'
import night from '../images/nightMode.png'
import sunny from '../images/sunny.png'
import menu from '../images/menu.png'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
function Nav(props){
    const[nightmode,setNightmode] = useState(false);
    const signed = props.signed;
    const setsigned = props.setsigned;
    const signout = props.signout;
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <img className='logo' src={manitlogo}>

                </img>
            </div>
            <div className='sectionLinksContainer'>
                <a>Home</a>
                <a>Attendance</a>
                <a>Marksheet</a>
                <a>About Us</a>
            </div>
            <div className='loginContainer'>
                <div className='logInBtn' onClick={signout
}>
                    {!signed ? "Log In" : "Sign Out"}
                </div>
                <button onClick={()=>{
                    setNightmode(!nightmode);
                }}>{
                    nightmode ? (<img className='night' src={sunny}></img>) : (<img className='night' src={night}></img>)
                    }
                    </button>

                <img className='menu night' src={menu}></img>
            </div>

            
        </nav>
        
    )
}

export default Nav;