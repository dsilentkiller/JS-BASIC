import React, { useState } from "react";
import './Contact.css'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const [message,setMessage] = useState("");
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  

  return (
    <form >
 
        <div className="Container">
          {/* <div className=""> */}
      <div>
        <label htmlFor="name" className="label">Name:</label>
        <input type="text" id="name" required />   
      </div>
      <>
        <label htmlFor="email"  className="label" >Email:</label>
        <input type="email" id="email" required />
      </>
      <div>
        <label htmlFor="message"  className="label" >Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit" className="btn btn-secondary">Submit</button>
      </div>
    </form>
  
  );
};

export default ContactForm;