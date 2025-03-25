
import React from "react";
import "./RegistrationPage.css";

function RegisterationPage() {
return (
    
    <><div className="form-container">
        <h1>Registration Page</h1>
       
        <img src="/user.png" alt="user.img" className="user-image"/>
        <div className="checkout">
        <form >
          <div>
          <label htmlFor="fname">First Name:</label>
          <input type="text" name="fname" id="fname" placeholder="Enter your first name" required />
          </div>

          <div>
          <label htmlFor="lname">Last Name:</label>
          <input type="text" name="lname" id="lname" placeholder="Enter your last name" required />
          </div>
          <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" name="dob" id="dob" required />
          </div>
          <div>
          <label htmlFor="phone">Phone no:</label>
          <input type="text" name="phone" id="phone" placeholder="Enter your phone no." required />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" placeholder="Enter your email" required />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="pass" placeholder="Enter password" required />
            </div>
            <div>
            <label htmlFor="Cpassword">Confirm password:</label>
            <input type="Cpassword" name="Cpassword" id="Cpass" placeholder="Renter password" required />
            </div>
            <div >
          <input type="submit" className="signup-btn" id="" value="Sign Up" />
          </div>
        </form>
        
        </div>
 
    
    </div></>
);}
export default RegisterationPage;