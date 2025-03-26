import React from "react";
import "./RegistrationPage.css";
import { useNavigate } from "react-router-dom";

function RegisterationPage() {
  const navigate = useNavigate();

  const signup = (event) => {
    event.preventDefault(); // Prevents page refresh
    console.log("User registered");
    alert("Registration Successful, please login");
    navigate("/Login"); // Navigate to login page
  };

  return (
    <div className="form-container">
      <h1>Registration Page</h1>
      {/* <img src="/images/user.png" alt="user.img" className="user-image" /> */}
      <div className="checkout">
        <form onSubmit={signup}>
          <div>
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" placeholder="Enter your first name" required />
          </div>
          <div>
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" placeholder="Enter your last name" required />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" required />
          </div>
          <div>
            <label htmlFor="phone">Phone no:</label>
            <input type="text" id="phone" placeholder="Enter your phone no." required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="pass" placeholder="Enter password" required />
          </div>
          <div>
            <label htmlFor="Cpassword">Confirm Password:</label>
            <input type="password" id="Cpass" placeholder="Re-enter password" required />
          </div>
          <div>
            <input type="submit" className="signup-btn" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterationPage;
