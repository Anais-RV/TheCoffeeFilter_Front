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
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export async function login(email, password) {
    const response = await makeRequest('/api/admin/login', 'POST', { email, password });
    const token = response.token; // Asegúrate de que el token se envía con esta clave
    localStorage.setItem('authToken', token);
    return response;
}

export function getAllCoffeeShops() {
    return makeRequest('/api/admin/coffeeshops/all');
}

export function updateCoffeeShop(id, data) {
    return makeRequest(`/api/admin/coffeeshops/${id}`, 'PUT', data);
}








// const API_BASE_URL = "http://127.0.0.1:8000";

// export async function login(email, password) {
//     const response = await fetch(`${API_BASE_URL}/api/admin/login`,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//     });

//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// }