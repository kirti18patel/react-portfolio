import React from 'react';
function Home() {
  return (
    <section className="my-5">
      {/* <h1 className="">Web is fun!</h1> */}
      <div className="content">
        <h1><span>H</span>i,</h1> 
        <h1>I am <span>K</span>irti,</h1> 
        <h1>Full Stack Web developer</h1> 
      </div>
      <div className="description-home">
        <p>I write code and improve my skills every day. I am honored to work with special people and looking forward to meet ambitious people ahead.</p>
      </div>
      <a href="mailto:kirti18patel@yahoo.com" className="contact-me">Contact Me!</a>
    </section>
  );
}

export default Home;