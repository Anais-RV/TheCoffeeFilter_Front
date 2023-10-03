const API_BASE_URL = "http://127.0.0.1:8000";

async function makeRequest(endpoint, method = 'GET', data) {
    const token = localStorage.getItem('authToken');

    const headers = {
        'Content-Type': 'application/json',
    };

    // Si existe un token en localStorage, lo añade al header
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        method,
        headers,
    };

    if (data) {
        config.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!response.ok) {
        // Si la respuesta no es correcta, arroja un error con el mensaje
        const errorMessage = await response.text();
        throw new Error(`Error: ${response.status} - ${errorMessage}`);
    }

    return response.json();
}

export async function login(email, password) {
    return makeRequest('/api/admin/login', 'POST', { email, password });
}

export const getAllCoffeeShops = () => {
    return makeRequest('/api/admin/coffeeshops/all');
}

export const updateCoffeeShop = (id, data) => {
    return makeRequest(`/api/admin/coffeeshops/${id}`, 'PUT', data);
}

export const deleteCoffeeShop = (id) => {
    return makeRequest(`/api/admin/coffeeshops/${id}`, 'DELETE');
}

// export const getCommunities = () => {
//     return makeRequest('/api/communities');  
// }

// export const getCitiesForCommunity = (community) => {
//     return makeRequest(`/api/cities?community=${community}`);  
// }

// export const getCafeteriasForCity = (city) => {
//     return makeRequest(`/api/coffeeshops?city=${city}`);  
// }
