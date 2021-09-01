import React from 'react';
function Contact() {
  return (
    <section className="flex-center-column my-5">
      <div className="contactContent">
        <h2>Contact Me</h2>
        <p>I am intrested in web development opportunities. If you have other question or want to discuss more about, don't hesitate to reach me.</p>
      </div>
      <div className="container">
      <div class="contact-info">
                <div class="box">
                    <div class="icon"><i class="fa fa-map-marker"></i></div>
                    <div class="text">
                        <h3>ADDRESS</h3>
                        <p>Montreal, QC, CA H3N 2V7</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i class="fa fa-phone"></i></div>
                    <div class="text">
                        <h3>Phone</h3>
                        <p>+1 5145748186</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i class="fa fa-envelope"></i></div>
                    <div class="text">
                        <h3>Email</h3>
                        <p>kirti18patel@yahoo.com</p>
                    </div>
                </div>
            </div>
          <div className="contact-form">
            <form>
              <h2>Send Message</h2>
                <input placeholder="Name"></input>
                <input placeholder="Email"></input>
                <textarea placeholder="Type your message..."></textarea>
                <input type="submit" name="submit" value="Send Message" id="btn"></input>
            </form>
        </div>
      </div>

    </section>
  );
}

export default Contact;