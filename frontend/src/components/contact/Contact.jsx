import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import EMAIL_KEYS from '../../Keys';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // to prevent the page from reloading

    emailjs.sendForm(EMAIL_KEYS.service, EMAIL_KEYS.template, form.current, EMAIL_KEYS.public)
      .then((result) => {
          console.log(result.text); // should log 'OK'
          alert('Message sent successfully! I\'ll get back to you shortly!');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h2>Like what you see? Contact me!</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact;