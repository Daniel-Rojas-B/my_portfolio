import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <form action="https://formspree.io/f/xeojqqgv" method="POST">
        <div className="contact">
          <div className='contact-container'>
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="8" cols="40" required></textarea>
            <button type="submit">Send</button>
          </div>
        </div> 
      </form>
    </div>
  );
};

export default Contact;