import React from "react";
import "./RegistrationPage.css";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function RegistrationPage() {
  const navigate = useNavigate();

  const signup = async (event) => {
    event.preventDefault();

    var currentDate = new Date();
    var Dob = new Date(event.target.dob.value);

    let fname = event.target.fname.value;
    let lname = event.target.lname.value;
    let dob = event.target.dob.value;
    let phone = event.target.phone.value;
    let email = event.target.email.value;
    let pass = event.target.pass.value;
    let cpass = event.target.Cpass.value;

    // Age validation
    if (currentDate - Dob < 18 * 365 * 24 * 60 * 60 * 1000) {
      alert("You must be 18 years or older to register");
      return;
    }

    // Password match validation
    if (pass !== cpass) {
      alert("Passwords do not match! Please enter the same password.");
      return;
    }

    try {
      // Step 1: Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const uid = userCredential.user.uid;

      // Step 2: Store extra user data in Firestore
      await setDoc(doc(db, "users", uid), {
        fname,
        lname,
        dob,
        phone,
        email,
        uid,
      });

      console.log("User registered", email);
      alert("Registration Successful, please login");
      navigate("/Login");
    } catch (error) {
      console.error("Firebase registration error:", error);
      alert(error.message || "Registration failed.");
    }
  };

  const login = () => {
    navigate("/Login");
  };

  return (
    <div className="form-container">
      <h1>Registration Page</h1>

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
          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" placeholder="Enter password" required />
        </div>
        <div>
          <label htmlFor="Cpass">Confirm Password:</label>
          <input type="password" id="Cpass" placeholder="Re-enter password" required />
        </div>
        <div>
          <input type="submit" className="signup-btn" value="Sign Up" />
          <input type="button" className="login-btn" value="Login" onClick={login} />
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
