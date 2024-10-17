import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const loginAdmin = () => {
        const { email, password } = formData;
        if (email === 'virajrao665@gmail.com' && password === 'Viraj@123') {
            localStorage.setItem('auth-token', 'dummy-token'); // Use a dummy token
            onLogin(); // Notify parent of successful login
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className='Login'>
            <div className="UserLogo">
                <img src="src/assets/adminPic.png" alt="User Pic" />
            </div>
            <div className="LoginBox">
                <div className="heading">
                    <h2>Login</h2>
                </div>
                <div className="inputs">
                    <p>Email or Username</p>
                    <input
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        type="text"
                        placeholder='Email Address or Username'
                    />
                    <p>Password</p>
                    <input
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                        type="password"
                        placeholder='Password'
                    />
                </div>
                <div className="LoginBtn">
                    <button className="login" onClick={loginAdmin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
