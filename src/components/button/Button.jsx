/* eslint-disable react/prop-types */
import './Button.css';
import { Link } from "react-router-dom";

function Button(props) {

    return (
    <Link to={props.to} >
    <button className='button'>{props.label}</button>
    </Link>
    );
}


export default Button;

