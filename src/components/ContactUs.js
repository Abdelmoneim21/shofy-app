import React from "react";
import "./contact.css";

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>
        Have any questions or concerns? We're always ready to help! Reach out to
        us through any of the following ways.
      </p>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something.."
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
