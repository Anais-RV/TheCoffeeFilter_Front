import { useState } from 'react';
import axios from 'axios';
import './CoffeeForm.css';

const SuggestCoffeeShop = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        description: '',
        photo: '',
        city_id: 1 // Suponiendo un ID de ciudad por defecto, deberías proporcionar una manera de seleccionarlo.
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/coffeeshops/suggest', {
                ...formData,
                state: 'Suggested'
            });
            console.log('Sugerencia enviada con éxito:', response.data);
            setFormData({
                name: '',
                address: '',
                description: '',
                city_id: 1
            });
        } catch (error) {
            console.error('Hubo un error enviando la sugerencia:', error);
        }
    };

    return (
        <div>
            <h2>Sugerir una nueva cafetería</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <label>Dirección:</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div>
                    <button type="submit">Enviar sugerencia</button>
                </div>
            </form>
        </div>
    );
}

export default SuggestCoffeeShop;
