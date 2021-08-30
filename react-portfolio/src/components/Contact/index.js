import React from 'react';
function Contact() {
  return (
    <section className="my-5">
        <h2>Contact Me</h2>
        <p>I am intrested in web development opportunities. If you have other question or want to discuss more about, don't hesitate to reach me.</p>
        <form>
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Subject"></input>
            <textarea placeholder="Message"></textarea>
            <button>Send Message</button>
        </form>
        <p>address</p>
    </section>
  );
}

export default Contact;