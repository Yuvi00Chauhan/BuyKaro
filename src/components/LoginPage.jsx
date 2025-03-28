import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
    const navigate = useNavigate();
    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();

        // Get stored users from localStorage
        let storedUsers = JSON.parse(localStorage.getItem("userDetails")) || [];

        // Find user in stored data
        let user = storedUsers.find((u) => u.email === useremail && u.pass === password);

        if (user) {
            alert("Welcome "+ user.fname);
            console.log("Login successful");
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
                            value={useremail} 
                            onChange={(e) => setUseremail(e.target.value)}
                            placeholder="admin@mail.com"
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="admin@123"
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
