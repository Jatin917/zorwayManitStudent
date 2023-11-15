import "./AttendanceDetails.css";
import { attendance } from "../data";
import Heading from "./Heading";
import { useEffect, useState } from "react";
function AttendanceDetails() {
  var nameP = document.querySelector("#name");
  var myinput = document.querySelectorAll(".myinput");
  var rangeV = document.querySelectorAll(".rangeV");
  var range = document.querySelector("#range");
  var words = document.querySelector("#words");
  const [subjectsAttendance,setSubjectsAttendance] = useState(attendance["students"][2]["attendance"])
  const subjects = [
    "Maths",
    "DCD",
    "PPL",
    "DSA",
    "DBMS",
    "PP",
  ];

  

  useEffect(() => {
    var myinput = document.querySelectorAll('.myinput');
    var rangeV = document.querySelectorAll('.rangeV');
    var subject = document.querySelectorAll(".subject");
    displaySub(subject);
    displayAttend(rangeV,Object.values(subjectsAttendance));
    rangeColor(myinput, rangeV);
  }, [subjectsAttendance]);

  function displaySub(subject){
    let i = 0;
    function getSubject(index) {
      return subjects[index];
    }
    subject.forEach((sub) => {
      sub.textContent = getSubject(i++);
    });
  }

  function displayAttend(rangeV, subjectsAttendance) {
    rangeV.forEach((atten, index) => {
      atten.textContent = subjectsAttendance[index++];
    });
  }

  function rangeColor(myinput,rangeV) {
    var value;
    let i = 0;
    myinput.forEach((element) => {
      value = element.value;
      element.style.background = `linear-gradient(to right,  rgb(13, 13, 37) 0%,  rgb(13, 13, 37) ${value}%, #fff ${value}%, #fff 100%)`;
      while (i < rangeV.length) {
        let elem = rangeV[i];
        elem.textContent = value;
        i++;
        break;
      }
    });
  }
  const heading = "Attendance Details"
  return (
    <div className="container">
      <Heading heading={heading}></Heading>
      <div className="skillbox">
        <div className="skillRange">
          <p className="subject"></p>

          <div className="rangeDiv">
            <div>
              <span className="rangeV">0</span>
              <span className="percend">%</span>
            </div>
            <input
              className="myinput"
              type="range"
              name="range"
              id="range"
              min="0"
              max="100"
              value="10"
            ></input>
          </div>
        </div>
        <div className="skillRange">
          <p className="subject"></p>

          <div className="rangeDiv">
            <div>
              <span className="rangeV">0</span>
              <span className="percend">%</span>
            </div>
            <input
              className="myinput"
              type="range"
              name="range"
              id="range"
              min="0"
              max="100"
              value="10"
            ></input>
          </div>
        </div>
        <div className="skillRange">
          <p className="subject"></p>

          <div className="rangeDiv">
            <div>
              <span className="rangeV">0</span>
              <span className="percend">%</span>
            </div>
            <input
              className="myinput"
              type="range"
              name="range"
              id="range"
              min="0"
              max="100"
              value="10"
            ></input>
          </div>
        </div>
        <div className="skillRange">
          <p className="subject"></p>

          <div className="rangeDiv">
            <div>
              <span className="rangeV">0</span>
              <span className="percend">%</span>
            </div>
            <input
              className="myinput"
              type="range"
              name="range"
              id="range"
              min="0"
              max="100"
              value="10"
            ></input>
          </div>
        </div>
        <div className="skillRange">
          <p className="subject">My Subject</p>

          <div className="rangeDiv">
            <div>
              <span className="rangeV">0</span>
              <span className="percend">%</span>
            </div>
            <input
              className="myinput"
              type="range"
              name="range"
              id="range"
              min="0"
              max="100"
              value="55"
            ></input>
          </div>
        </div>
        <div className="skillRange">
          <p className="subject">My Subject</p>

          <div className="rangeDiv">
            <div>
              <span className="rangeV">0</span>
              <span className="percend">%</span>
            </div>
            <input
              className="myinput"
              type="range"
              name="range"
              id="range"
              min="0"
              max="100"
              value="90"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceDetails;
