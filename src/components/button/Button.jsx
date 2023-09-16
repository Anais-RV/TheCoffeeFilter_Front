import './Button.css';
import PropTypes from 'prop-types';

function Button({ label }) {

    return (
    <button className='button'>
        {label}
    </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired  // Validación para asegurar que label será un string
};

export default Button;