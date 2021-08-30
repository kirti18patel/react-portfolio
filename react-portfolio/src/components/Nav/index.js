import React from 'react';
import logo from '../../assets/logo.png';
import resume from '../../assets/resume.docx';

function Nav(props) {
    const menu = ['About', 'Skills', 'Work', 'Contact']
  return (
<nav>
<div> <img src={logo} alt="logo" onClick={() => (props.setCurrentCategory('home'))}></img> </div>
<div>
  <ul>
      {
          menu.map(item => (
              <li key={item.toLocaleLowerCase()}>
                  <a href={"#" + item.toLocaleLowerCase()}
                  onClick={() => props.setCurrentCategory(item)}
                  key={item.toLocaleLowerCase()}>
                  {item}</a>
                  </li>
          ))
      }
  </ul>
</div>
<div>Social media icons</div>
<a href={resume} download="resume-KirtiPatel"> <i className="fa fa-download" aria-hidden="true"></i>  </a>
</nav>
  );
}

export default Nav;