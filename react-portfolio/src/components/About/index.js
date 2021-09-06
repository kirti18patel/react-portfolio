import React from 'react';
function About() {
  const getCurrentDay = () =>{
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return date.getDay() === (6 || 0) ? "Weekend" : weekday[date.getDay()];
  }

  return (
    <section className="my-5">
      <div className="about">
        <h3>Hey there,</h3> 
        <h3>Lets know a bit more about me, </h3>
      </div>
      <div className="about-description">
        <p>I am a passionate full stack developer, located in Canada. I have a serious passion in web development and creating intuitive, dynamic user experiences. I love working with React and other frameworks. I am confident using the MERN Full-Stack and pursue good experience and knowledge in web technologies.</p>
        <p>Effective at combining creativity and problem solving to develop user-friendly applications. Strengths include creativity, teamwork, and trustworthiness. Well-organised person, problem solver, independent with high attention to detail and life-long dedication to learning.</p>
        <p>Love to do painting and write songs in my leisure time. I admire exploring beauty of nature, preferably hiking, for my vacation. Interested in the entire web spectrum and working on ambitious projects with positive people.</p>
      </div>
      <div className="slogan">
        <h3>Stay bold <span>&</span></h3>
        <h3>Have an outstanding {getCurrentDay()}! </h3>
      </div>
    </section>
  );
}

export default About;