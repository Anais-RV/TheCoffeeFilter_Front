import { useState } from 'react';
import { login } from '../../services/api';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';


function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();  // previene recarga del formulario
    
        try {
            const data = await login(email, password);
            console.log(data);
            navigate('/admindashboard'); // hook función navigate -> envía a dashboard
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return (
        <div className="admin-login">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;

