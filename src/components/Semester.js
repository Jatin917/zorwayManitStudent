import Heading  from "./Heading";
import './Semester.css'
import Card from './Card'
import  data  from '../data'
import { useState } from "react";
function Semester(){
    const heading = "Marksheet"
    const [marks,setmarks] = useState(data);
    return(
        <div className="main">
        <div className="containerM">
            <Heading heading={heading} />
            <div className="subHeading">
                <h2>Semester 1</h2>
            </div>
            <div className="cardsContainer">
                {
                marks[0].subjects.map((sub)=>{
                    return (
                        <Card {...sub}/>
                    )
                })
                }
            </div>
        </div>
        <div className="containerM">
            <div className="subHeading">
                <h2>Semester 2</h2>
            </div>
            <div className="cardsContainer">
                {
                marks[0].subjects.map((sub)=>{
                    return (
                        <Card {...sub}/>
                    )
                })
                }
            </div>
        </div>
        </div>
    )
}

export default Semester;