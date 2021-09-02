import React from 'react';
import logo from '../../assets/logo.png';

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
          <div></div>
          </nav>
  );
}

export default Nav;