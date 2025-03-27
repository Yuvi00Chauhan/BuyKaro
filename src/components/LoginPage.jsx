import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();
    
        if (email === "admin@mail.com" && password === "admin@123") {
            alert("Login successful");
            console.log("Navigating to /ProductListing"); 
            navigate("/ProductListing");
        } else {
            alert("Login failed");
        }
    };
    

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login Page</h1>
                <form onSubmit={login}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email}
                            placeholder="admin@mail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="admin@123"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <input type="submit" className="login-btn" value="Login" />
                        <input type="button" className="register-btn" value="New User?" onClick={() => navigate("/register")} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
