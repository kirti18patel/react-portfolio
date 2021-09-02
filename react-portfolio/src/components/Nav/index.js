import React from 'react';
import logo from '../../assets/logo.png';
import resume from '../../assets/resume.docx';

function Nav(props) {
    const menu = ['About', 'Skills', 'Work', 'Contact']
  return (
      <nav>
          <div className="logo"> <img src={logo} alt="logo" onClick={() => (props.setCurrentCategory('home'))}></img> </div>
          <div className= "menu">
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
          <h1><a href={resume} download="resume-KirtiPatel" className="download"> <i className="fa fa-download" aria-hidden="true"></i><span className="tooltiptext">Download my resume</span></a></h1>
      </nav>
  );
}

export default Nav;