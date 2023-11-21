import React from "react";

const ContactForm = () => {
  return (
    <form>
      <label htmlFor="fname">Full Name</label>
      <input type="text" id="fname" placeholder="Full Name" required />
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" placeholder="E-mail" required />
      <label htmlFor="pnumber">Phone</label>
      <input type="tel" id="pnumber" placeholder="Phone" required />
      <label htmlFor="message">Message</label>
      <textarea rows={10} cols={5} id="message" placeholder="Message" required />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
