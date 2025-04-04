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
                <img className="user-img" src="/images/me.jpg" alt="User Avatar" />
                <h1 className="acc-head">Developed by Yuvraj Nirwan</h1>
                <a className="github-link" href="https://github.com/Yuvi00Chauhan" target="_black">@Yuvi00Chauhan</a>
                <br/>
                <button className="logoutButton" onClick={handleLogout}>Logout</button>
            </div>
            
        </div>
    );
}

export default Account;
