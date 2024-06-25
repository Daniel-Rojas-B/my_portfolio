import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <form action="https://formspree.io/your-email" method="POST">
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;