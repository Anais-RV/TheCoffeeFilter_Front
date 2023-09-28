import React, { useState, useEffect } from 'react'; 
import { community, city, allCafeterias } from './dataMock';
import Card from '../card/Card';
import './Filter.css';

function Filter() {
    const [selectedCommunity, setSelectedCommunity] = useState(""); 
    const [selectedCity, setSelectedCity] = useState(""); 
    const [shownCities, setShownCities] = useState([]);
    const [cafeterias, setCafeterias] = useState([]);

    useEffect(() => {
        if (selectedCommunity && city[selectedCommunity]) {
            setShownCities(city[selectedCommunity]);
        } else {
            setShownCities([]);
        }
    }, [selectedCommunity]);
    

    useEffect(() => {
        if (selectedCity) {
            const filteredCafeterias = allCafeterias.filter(cafe => cafe.city === selectedCity);
            setCafeterias(filteredCafeterias);
        }
    }, [selectedCity]);

    return (
        <div className='filter-container'>
            <h1 className="search-title">Buscador</h1>
            <select 
                value={selectedCommunity} 
                onChange={(e) => setSelectedCommunity(e.target.value)}
            >
                <option value="">-- Selecciona una comunidad --</option>
                {community.map(com => <option key={com} value={com}>{com}</option>)}
            </select>

            <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
            >
                <option value="">-- Selecciona una ciudad --</option>
                {shownCities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <div className="cafeterias-container">
                {cafeterias.map(cafe => (
                    <Card key={cafe.id} {...cafe} />
                ))}
            </div>
        </div>
    );
}

export default Filter;
