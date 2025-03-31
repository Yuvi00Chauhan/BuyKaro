import React from "react";
import "./Account.css";
import { useNavigate } from "react-router-dom";

function Account() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className="account">
            <div className="top-content">
                <img src="/images/user.png" alt="User Avatar" />
                <h1>Howdy!! User</h1>
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Account;
