import React from 'react';
import "./Navbar.css";
import navlogo from "../../assets/DivineLogo.png";

const Navbar = ({ isLoggedIn, onLogout }) => {
    return (
        <div className="Navbar">
            <img src={navlogo} alt="Navbar logo" />
            {isLoggedIn && (
                <button className="logoutBtn" onClick={onLogout}>
                    Log Out
                </button>
            )}
        </div>
    );
}

export default Navbar;
