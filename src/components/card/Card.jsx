import './Card.css'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


function Card(props) {
    return (
        <div className='card'>
            <img className='card-img' src={props.pics} alt="Imagen de la cafetería"/>
            <div className='glass-effect'></div> 
            <div className='card-content'>
                <h2 className='coffeeName'> {props.title} </h2>
                <h3 className='coffeeReview'> {props.text} </h3>
                <Link className='coffeeLink' to={props.to}>Saber más</Link>
            </div>
        </div>
    );
}


Card.propTypes = {
    title: PropTypes.string.isRequired,
    pics: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  // Validación para asegurar que label será un string
};

export default Card;