import React from "react";
import "./contactUs.css";
function ContactUs() {
    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");  
        alert("Feedback sent!");
    }
    return (
        <div className="contact-form">
            <h1>Contact Us</h1>
            <form onSubmit={onSubmit}>
            <label htmlFor="name" >Name:</label>
            <input type="text" name="email"placeholder="Enter your name" required/>
            <label htmlFor="email">Email:</label>
            <input type="email"name="email"placeholder="Enter your email" required/>
            <label htmlFor="message">Your message:</label>
            <textarea name="message" placeholder="Enter your message" required></textarea>
            <p className="note">*Our team will contact you as soon as possible*</p>
            <button type="submit">Submit</button>
            </form>
            
        </div>
    );
}
export default ContactUs;