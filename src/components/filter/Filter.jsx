import { useState, useEffect } from 'react'; 
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

// import { useState, useEffect } from 'react'; 
// import Card from '../card/Card';
// import './Filter.css';
// import { getCommunities, getCitiesForCommunity, getCafeteriasForCity } from '../../services/api';

// function Filter() {
//     const [communities, setCommunities] = useState([]); 
//     const [cities, setCities] = useState([]);
//     const [cafeterias, setCafeterias] = useState([]);
//     const [selectedCommunity, setSelectedCommunity] = useState(""); 
//     const [selectedCity, setSelectedCity] = useState(""); 

//     useEffect(() => {
//         getCommunities()
//             .then(data => {
//                 setCommunities(data);
//             })
//             .catch(error => {
//                 console.error("Error fetching communities: ", error);
//             });
//     }, []);

//     useEffect(() => {
//         if (selectedCommunity) {
//             getCitiesForCommunity(selectedCommunity)
//                 .then(data => {
//                     setCities(data);
//                 })
//                 .catch(error => {
//                     console.error("Error fetching cities for selected community: ", error);
//                 });
//         } else {
//             setCities([]);
//         }
//     }, [selectedCommunity]);

//     useEffect(() => {
//         if (selectedCity) {
//             getCafeteriasForCity(selectedCity)
//                 .then(data => {
//                     setCafeterias(data);
//                 })
//                 .catch(error => {
//                     console.error("Error fetching cafeterias for selected city: ", error);
//                 });
//         }
//     }, [selectedCity]);

//     return (
//         <div className='filter-container'>
//             <h1 className="search-title">Buscador</h1>
//             <select 
//                 value={selectedCommunity} 
//                 onChange={(e) => setSelectedCommunity(e.target.value)}
//             >
//                 <option value="">-- Selecciona una comunidad --</option>
//                 {communities.map(com => <option key={com} value={com}>{com}</option>)}
//             </select>

//             <select 
//                 value={selectedCity} 
//                 onChange={(e) => setSelectedCity(e.target.value)}
//             >
//                 <option value="">-- Selecciona una ciudad --</option>
//                 {cities.map(c => <option key={c} value={c}>{c}</option>)}
//             </select>

//             <div className="cafeterias-container">
//                 {cafeterias.map(cafe => (
//                     <Card key={cafe.id} {...cafe} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Filter;
