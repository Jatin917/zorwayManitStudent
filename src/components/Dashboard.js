import Nav from './Nav';
import AttendanceDetails from './AttendanceDetails';
import Semester from './Semester'
import './Dashboard.css'
function Dashboard(props){
    const signed = props.signed;
    const setsigned = props.setsigned;
    const signout = props.signout;
    // const[loggedIn,setLoggedIn]
    return(
        <div className='containerD'>
            <Nav signout = {signout} signed={signed} setsigned={setsigned} />
            <AttendanceDetails/>
            <Semester/>
        </div>
    )
}

export default Dashboard;