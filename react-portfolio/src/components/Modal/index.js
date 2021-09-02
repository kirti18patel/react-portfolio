import React from 'react';

const Modal = ({ currentProject, onClose }) => {
    const {name, github, deployed, description, index} = currentProject;

    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
            <div className="flex-space-between">
                <h3 className="modalTitle">{name}</h3>
                <button className="modal-close-btn" onClick={onClose} type="button">x</button>
            </div>
            <div className="project-info">
                <div className="project-img">
                    <a href={deployed}>
                        <img src={require(`../../assets/${index+1}.png`).default} alt="current category" />
                    </a>
                </div>
                <div className="project-description">
                    <p>{description}</p>
                    <div className="project-links">
                        <a href={github}><i class="fa fa-github"></i> Source Code</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Modal;