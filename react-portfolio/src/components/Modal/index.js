import React from 'react';

const Modal = ({ currentProject, onClose }) => {
    const {name, github, deployed, description, index} = currentProject;

    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
            <div className="project-info">
                <div className="project-img">
                    <img src={require(`../../assets/${index+1}.png`).default} alt="current category" />
                </div>
                <div className="project-description">
                    <p>{description}</p>
                    <div className="project-links">
                        <a href={github}>Github Repository Link >></a>
                        <a href={deployed}>Live URL >></a>
                    </div>
                </div>
            </div>
            <button className="modal-close-btn" onClick={onClose} type="button">Close this modal</button>
        </div>
      </div>
    );
  }
  
  export default Modal;