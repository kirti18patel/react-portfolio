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
    return date.getDay() === (6 || 7) ? "Weekend" : weekday[date.getDay()];
  }

  return (
    <section className="my-5">
        <h2>Hey there, lets know a bit more about me, </h2>
<p>I am a passionate full stack developer, located in Canada. I have a serious passion in web development and creating 
intuitive, dynamic user experiences. 

I have 1.5 years of experience as a developer and love working with React and other frameworks.
I am confident using the MERN Full-Stack and pursue good experience and knowledge in web technologies. 

Effective at combining creativity and problem solving to develop user-friendly applications. 

Strengths include creativity, teamwork, and trustworthiness. Well-organised person, problem solver, independent employee with high attention to detail and life-long dedication to learning. Love to do painting and write songs in my leisure time.

Love go explore beaty of nature, preferably hiking, for my vacation.

Interested in the entire web spectrum and working on ambitious projects with positive people.</p>
<p>Stay bold &

Have an outstanding {getCurrentDay()}!</p>
    </section>
  );
}

export default About;