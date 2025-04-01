import React from "react";
import "./Account.css";
import { useNavigate } from "react-router-dom";

function Account() {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert("Logout sucessfull")
        navigate("/login");
    };

    return (
        <div className="account">
            <div className="top-content">
                <img className="user-img" src="/images/user.png" alt="User Avatar" />
                <h1 className="acc-head">Howdy!! User</h1>
                <button className="logoutButton" onClick={handleLogout}>Logout</button>
            </div>
            
        </div>
    );
}

export default Account;
