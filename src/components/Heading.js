import './Heading.css'

function Heading(props){
    const heading = props.heading
    return(
            <div className="heading">
                <p>{heading}</p>
      </div>
    )
}
export default Heading;