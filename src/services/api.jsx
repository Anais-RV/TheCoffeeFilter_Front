//const API_BASE_URL = "http://127.0.0.1:8000";

export async function login(email, password) {
    const response = await fetch(`http://127.0.0.1:8000/api/admin/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

//${API_BASE_URL}/api/admin/login
