import React from "react";

function ContactPage() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
