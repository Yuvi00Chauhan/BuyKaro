import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { auth, db } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

function LoginPage() {
  const navigate = useNavigate();
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event) => {
    event.preventDefault();

    try {
      // Step 1: Authenticate with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, useremail, password);
      const uid = userCredential.user.uid;

      // Step 2: Fetch user data from Firestore
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        alert("Welcome " + userData.fname);
        console.log("Login successful:", userData);

        // Optional: store user in localStorage
        // localStorage.setItem("payzzUser", JSON.stringify(userData));

        navigate("/ProductListing");
      } else {
        alert("User data not found in database.");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Login failed. Check your credentials.");
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
              placeholder="Enter your mail"
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
              placeholder="Enter your password"
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
