import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Admin from './Pages/Admin/Admin'; // Make sure to import Admin component

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('auth-token'); // Clear token on logout
    };

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            {isLoggedIn ? <Admin onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
        </>
    );
};

export default App;
