import './Card.css'

function Card(props){
    const subject = props.name;
    const mini = props.mini_test;
    const mid = props.mid_exam;
    const end = props.end_exam;
    const assignment = props.assignments_submitted;
    return(
        <div className='card'>
            <div className="subjectBox">
                <h3>{subject}</h3>
            </div>
            <div className='marksBox'>
                <div className='box'>
                    <label>Mini Test:</label>
                    <span id="mini">{mini}</span>
                </div>
                <div className='box'>
                    <label>Mid Exam:</label>
                    <span id="mid">{mid}</span>
                </div>
                <div className='box'>
                    <label>End Exam:</label>
                    <span id="end">{end}</span>
                </div>
                <div className='box'>
                    <label>Asignments:</label>
                    <span id="assignment">{assignment}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;