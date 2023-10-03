import './Hero.css';
import Button from '../button/Button';
import HeroBackground  from '../../assets/images/HeroBackground.jpg'; 

function Hero(){
    
    return(

        <div className="hero">
            <img className='hero-img' src={HeroBackground} alt="Background"/>   
            <div className='hero-content'> 
                <h1 className='hero-title'>The Coffee Filter</h1>
                <p className='hero-text'>¿Es hora de una taza de café? Filtra y... ¡descubre tu próxima cafetería favorita!</p>
                <Button label="Buscar Cafetería de Especialidad"></Button>
            </div>      
        </div>
    );
}

export default Hero;

